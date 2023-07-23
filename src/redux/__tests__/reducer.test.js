jest.mock("../initial-state", () => {
  return {
    initialState: {
      tasks: [],
    },
  };
});

import { reducer } from "../reducer";
beforeEach(() => {
  global.window = {
    localStorage: {
      setItem: jest.fn(),
    },
  };
});

afterEach(() => {
  global.window = null;
});

describe("Reducer", () => {
  test("should add a task item", () => {
    const initialState = {
      tasks: [],
    };

    const action = {
      type: "ADD_TASK",
      payload: {
        title: "Read a book",
      },
    };
    const newState = reducer(initialState, action);

    expect(newState.tasks[0].title).toBe("Read a book");
    expect(newState.tasks[0].completed).toBeFalsy();
    expect(newState.tasks[0].important).toBeFalsy();
  });

  test("should mark task as completed", () => {
    const initialState = {
      tasks: [
        { id: "123", title: "Read a book", completed: false, important: false },
      ],
    };
    const action = {
      type: "TOGGLE_COMPLETED",
      payload: {
        id: "123",
      },
    };
    const newState = reducer(initialState, action);
    expect(newState.tasks[0].completed).toBe(true);
  });

  test("should mark task as important", () => {
    const initialState = {
      tasks: [
        { id: "123", title: "Read a book", completed: false, important: false },
      ],
    };
    const action = {
      type: "TOGGLE_IMPORTANT",
      payload: {
        id: "123",
      },
    };
    const newState = reducer(initialState, action);
    expect(newState.tasks[0].important).toBe(true);
  });

  test("should delete task", () => {
    const initialState = {
      tasks: [
        {
          id: "123",
          title: "Read a book",
          completed: false,
          important: false,
        },
      ],
    };
    const action = {
      type: "DELETE_TASK",
      payload: {
        id: "123",
      },
    };
    const newState = reducer(initialState, action);
    expect(newState.tasks.length).toBe(0);
    expect(newState.tasks.some((task) => task.id === "123")).toBe(false);
  });
});
