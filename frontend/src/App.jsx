import "./App.css";
import { useState } from "react";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [refresh, setRefresh] = useState(false);

  const refreshTasks = () => {
    setRefresh(prev => !prev);
  };

  return (
    <div className="App">
      <h1>To-Do Task Management</h1>

      <TaskForm refreshTasks={refreshTasks} />

      <hr />

      <TaskList refresh={refresh} />
    </div>
  );
}

export default App;