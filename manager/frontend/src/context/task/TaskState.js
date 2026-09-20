import React, { createContext, useReducer, useEffect } from 'react';
import TaskReducer from './taskReducer';
import { GET_TASKS, ADD_TASK, DELETE_TASK, UPDATE_TASK, CLEAR_TASKS } from '../types';

export const TaskContext = createContext();

const TaskState = ({ children }) => {
  const [state, dispatch] = useReducer(TaskReducer, {
    tasks: [],
    error: null
  });

  useEffect(() => {
    // Load tasks from local storage or API
    // eslint-disable-next-line
  }, []);

  const getTasks = () => {
    // Implement getTasks logic
    dispatch({ type: GET_TASKS, payload: [] });
  };

  const addTask = task => {
    dispatch({ type: ADD_TASK, payload: task });
  };

  const deleteTask = id => {
    dispatch({ type: DELETE_TASK, payload: id });
  };

  const updateTask = (id, task) => {
    dispatch({ type: UPDATE_TASK, payload: { id, task } });
  };

  const clearTasks = () => {
    dispatch({ type: CLEAR_TASKS });
  };

  return (
    <TaskContext.Provider value={{
      tasks: state.tasks,
      getTasks,
      addTask,
      deleteTask,
      updateTask,
      clearTasks
  }}>
    {children}
  </TaskContext.Provider>
  );
};

export default TaskState;
