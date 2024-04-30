import React from "react";

const TaskSummary = ({ tasks }) => {
  // Calculate total number of tasks
  const totalTasks = tasks.length;

  // Calculate number of tasks assigned to each user/team
  const assignedTasks = {};
  tasks.forEach((task) => {
    const assignedTo = task.assignedTo || "Unassigned";
    assignedTasks[assignedTo] = (assignedTasks[assignedTo] || 0) + 1;
  });

  // Calculate number of tasks in each status
  const taskStatusCounts = {};
  tasks.forEach((task) => {
    taskStatusCounts[task.status] = (taskStatusCounts[task.status] || 0) + 1;
  });

  return (
    <div>
      <h2>Task Summary</h2>
      <p>Total Tasks: {totalTasks}</p>
      <h3>Tasks Assigned to Users/Teams:</h3>
      <ul>
        {Object.entries(assignedTasks).map(([userTeam, count]) => (
          <li key={userTeam}>
            {userTeam}: {count}
          </li>
        ))}
      </ul>
      <h3>Task Status Counts:</h3>
      <ul>
        {Object.entries(taskStatusCounts).map(([status, count]) => (
          <li key={status}>
            {status}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskSummary;
  