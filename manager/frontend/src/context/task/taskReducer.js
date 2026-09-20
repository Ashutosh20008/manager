import { GET_TASKS, ADD_TASK, DELETE_TASK, UPDATE_TASK, CLEAR_TASKS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { ...action.payload, _id: Date.now().toString() }]
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task._id !== action.payload)
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task._id === action.payload.id ? { ...task, ...action.payload.task } : task
        )
      };
    case CLEAR_TASKS:
      return {
        ...state,
        tasks: []
      };
    default:
      return state;
  }
};
