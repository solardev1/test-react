import { createStore } from "redux";

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "TOGGLE_COMPLETED":
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task, index) => index !== action.payload),
      };
    case "FILTER_TASKS":
      return {
        ...state,
        filter: action.payload, // Actualizamos el estado del filtro
      };
    default:
      return state;
  }
};

const store = createStore(taskReducer);

export default store;
