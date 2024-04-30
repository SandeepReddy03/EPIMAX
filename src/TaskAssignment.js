import React, { useState } from "react";

const TaskAssignment = ({ tasks, onUpdateTask }) => {
  const [assignedTo, setAssignedTo] = useState("");
  const [selectedTaskId, setSelectedTaskId] = useState("");
  const [assignedTask, setAssignedTask] = useState(null);
  const [assignedUser, setAssignedUser] = useState("");

  const handleAssignedToChange = (e) => {
    setAssignedTo(e.target.value);
  };

  const handleTaskSelection = (taskId) => {
    setSelectedTaskId(taskId);
  };

  const handleAssignTask = () => {
    if (selectedTaskId && assignedTo.trim() !== "") {
      setAssignedTask("ok");
    } else {
      alert("Please select a task and user/team to assign!");
    }
  };

  return (
    <div>
      <h2>Task Assignment</h2>
      <select
        value={selectedTaskId}
        onChange={(e) => handleTaskSelection(parseInt(e.target.value))}
      >
        <option value="">Select Task</option>
        {tasks.map((task) => (
          <option key={task.id} value={task.id}>
            {task.name}
          </option>
        ))}
      </select>
      <select value={assignedTo} onChange={handleAssignedToChange}>
        <option value="">Select User or Team</option>
        {/* Option elements for users or teams */}
        <option value="User1">User1</option>
        <option value="User2">User2</option>
        <option value="Team1">Team1</option>
        <option value="Team2">Team2</option>
      </select>
      <button onClick={handleAssignTask}>Assign Task</button>
      {/* Display assigned task and user/team if assigned */}
      {assignedTask && (
        <p>
          Assigned Task: {selectedTaskId}, Assigned To: {assignedTo}
        </p>
      )}
    </div>
  );
};

export default TaskAssignment;
