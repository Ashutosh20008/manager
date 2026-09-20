import React, { useState, useContext } from 'react';
import TaskContext from '../../context/task/taskContext';

const TaskForm = () => {
  const taskContext = useContext(TaskContext);
  const { addTask } = taskContext;

  const [task, setTask] = useState({
    title: '',
    description: '',
    status: 'todo'
  });

  const { title, description, status } = task;

  const onChange = e => setTask({ ...task, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (title === '' || description === '') {
      alert('Please fill in all fields');
    } else {
      addTask(task);
      setTask({
        title: '',
        description: '',
        status: 'todo'
      });
    }
  };

  return (
    <div className="task-form">
      <h2>Add New Task</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Task Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={onChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Task Description</label>
          <textarea
            name="description"
            value={description}
            onChange={onChange}
            required
            className="form-control"
            rows="3"
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            name="status"
            value={status}
            onChange={onChange}
            className="form-control"
          >
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <input type="submit" value="Add Task" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default TaskForm;
