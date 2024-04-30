import './App.css';
import { useState } from "react";
import TaskList from "./TaskList";
import TaskAssignment from "./TaskAssignment";
import TaskStatus from "./TaskStatus";
import TaskSummary from "./TaskSummary";

const taskss = [
  { id: 1, name: "Task 1", status: "pending" },
  { id: 2, name: "Task 2", status: "pending" },
];
const App = () => {
  const [tasks, setTasks] = useState([...taskss]);

  const handleUpdateStatus = (taskId, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: newStatus };
        }
        return task;
      })
    );
  };

  return (
    <div style={{textAlign: "center"}}>
      <TaskList />
      <TaskAssignment tasks={tasks} />
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.name}</h3>
          <p>Status: {task.status}</p>
          <TaskStatus task={task} onUpdateStatus={handleUpdateStatus} />
        </div>
      ))}
      <TaskSummary tasks={tasks} />
    </div>
  );
};

export default App;

