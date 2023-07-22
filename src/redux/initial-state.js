export const initialState = JSON.parse(
  window.localStorage.getItem("tasks-manager")
) || {
  tasks: [
    {
      id: 0,
      title: "Buy fruits",
      completed: false,
      important: false,
    },
    {
      id: 1,
      title: "Meet a friend",
      completed: false,
      important: true,
    },
    {
      id: 2,
      title: "Call a doctor",
      completed: true,
      important: true,
    },
    {
      id: 3,
      title: "Car service",
      completed: false,
      important: true,
    },
    {
      id: 4,
      title: "Prepare for meeting",
      completed: true,
      important: false,
    },
  ],
};
