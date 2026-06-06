import { useState } from "react";
import api from "../services/api";

function TaskForm({ refreshTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await api.post("/tasks", {
        title: title,
        description: description,
      });

      console.log(response.data);

      setTitle("");
setDescription("");

refreshTasks();
    } catch (error) {
      console.error("Error:", error);

      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
      }

      alert("Error adding task");
    }
  };

  return (
    <div>
      <h2>Add Task</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <br />

        <div>
          <textarea
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;