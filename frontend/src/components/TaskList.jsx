import { useState, useEffect } from "react";
import api from "../services/api";

function TaskList({ refresh }) {
  const [tasks, setTasks] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  useEffect(() => {
    fetchTasks();
  }, [refresh]);

  const fetchTasks = async () => {
    try {
      const response = await api.get("/tasks");
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.log(error);
      alert("Error deleting task");
    }
  };

  const doneTask = async (id) => {
    try {
      await api.patch(`/tasks/${id}/done`);
      fetchTasks();
    } catch (error) {
      console.log(error);
      alert("Error completing task");
    }
  };

  const startEdit = (task) => {
    setEditingId(task.id);
    setEditTitle(task.title);
    setEditDescription(task.description);
  };

  const updateTask = async (id) => {
    if (!editTitle || !editDescription) {
      alert("Please fill all fields");
      return;
    }

    try {
      await api.put(`/tasks/${id}`, {
        title: editTitle,
        description: editDescription,
      });

      setEditingId(null);
      setEditTitle("");
      setEditDescription("");

      fetchTasks();
    } catch (error) {
      console.log(error);
      alert("Error updating task");
    }
  };

  return (
    <div>
      <h2>Task List</h2>

      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="task-card">
            {editingId === task.id ? (
              <>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />

                <br />
                <br />

                <textarea
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                />

                <br />
                <br />

                <button onClick={() => updateTask(task.id)}>
                  Save
                </button>

                <button
                  onClick={() => setEditingId(null)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <h3>{task.title}</h3>

                <p>{task.description}</p>

                <button onClick={() => startEdit(task)}>
                  Edit
                </button>

                <button onClick={() => doneTask(task.id)}>
                  Done
                </button>

                <button onClick={() => deleteTask(task.id)}>
                  Delete
                </button>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;