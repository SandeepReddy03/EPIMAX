const TaskStatus = ({ task, onUpdateStatus }) => {
    const handleStatusUpdate = (newStatus) => {
      onUpdateStatus(task.id, newStatus);
    };
  
    return (
      <div>
        <h2>Task Status</h2>
        <button onClick={() => handleStatusUpdate("start")}>Start Task</button>
        <button onClick={() => handleStatusUpdate("pending")}>
          Pending Task
        </button>
        <button onClick={() => handleStatusUpdate("complete")}>
          Complete Task
        </button>
      </div>
    );
  };
  export default TaskStatus;
  