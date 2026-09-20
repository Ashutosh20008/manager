import React, { useContext, useEffect } from 'react';
import TaskContext from '../../context/task/taskContext';

const TaskList = () => {
  const taskContext = useContext(TaskContext);
  const { tasks, getTasks, deleteTask, updateTask } = taskContext;

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line
  }, []);

  const handleDelete = id => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(id);
    }
  };

  const handleStatusChange = (id, newStatus) => {
    updateTask(id, { status: newStatus });
  };

  if (tasks.length === 0) {
    return <h4>No tasks found. Add a new task to get started!</h4>;
  }

  return (
    <div className="task-list">
      <h2>Your Tasks</h2>
      {tasks.map(task => (
        <div key={task._id} className="task-item">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <div className="task-actions">
            <select
              value={task.status}
              onChange={(e) => handleStatusChange(task._id, e.target.value)}
              className="form-control"
            >
              <option value="todo">To Do</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
            <button
              onClick={() => handleDelete(task._id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
