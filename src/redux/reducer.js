import { initialState } from "./initial-state";
import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_COMPLETED,
  TOGGLE_IMPORTANT,
} from "./actions";
import shortid from "shortid";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const { title } = action.payload;
      const newState = {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: shortid(),
            title,
            completed: false,
            important: false,
          },
        ],
      };
      return newState;
    }
    case TOGGLE_COMPLETED: {
      const newTasks = state.tasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task
      );
      const newState = {
        ...state,
        tasks: newTasks,
      };
      return newState;
    }
    case DELETE_TASK: {
      const newTasks = state.tasks.filter((t) => t.id !== action.payload.id);
      const newState = {
        ...state,
        tasks: newTasks,
      };
      return newState;
    }
    case TOGGLE_IMPORTANT: {
      const newTasks = state.tasks.map((t) =>
        t.id === action.payload.id ? { ...t, important: !t.important } : t
      );
      const newState = {
        ...state,
        tasks: newTasks,
      };
      return newState;
    }
    default:
      return state;
  }
};
