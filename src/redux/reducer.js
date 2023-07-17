import { initialState } from "./initial-state";
import { ADD_TASK } from "./actions";
import shortid from "shortid";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
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

    default:
      return state;
  }
};
