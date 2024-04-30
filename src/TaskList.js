import { useState } from "react";

const TaskList = () => {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleAddTask = () => {
    if (taskName.trim() !== "") {
      setTasks([
        ...tasks,
        { name: taskName, assignedTo: null, status: "pending" },
      ]);
      setTaskName("");
    } else {
      alert("Please enter a valid task name!");
    }
  };

  return (
    <div>
      <h2>Task List</h2>
      <input type="text" value={taskName} onChange={handleTaskNameChange} />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.name} - Assigned:{" "}
            {task.assignedTo ? task.assignedTo : "Unassigned"} - Status:{" "}
            {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TaskList;
