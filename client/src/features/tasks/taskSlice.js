import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 description",
    completed: false
  },
  {
    id: "2",
    title: "Task 2",
    description: "Task 2 description",
    completed: false
  },
]

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      // console.log(state, action);
      state.push(action.payload)
      // [...state, action.payload]
    },
    editTask: (state, action) => {
      // console.log(action.payload); //actualiza desde el reducer
      const { id, title, description } = action.payload;
      const foundTask = state.find(task => task.id === id);
      if (foundTask){
        foundTask.title = title;
        foundTask.description = description;
      }
    },
    deleteTask: (state, action) => {
      // console.log(action.payload);
      const taskFound = state.find(task => task.id === action.payload);
      // console.log(taskFound); //si el task.id === "x" --> undefine
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1)
      }

    },
  }
});

//exportamos las funciones individuales
export const { addTask, deleteTask, editTask } = tasksSlice.actions;

export default tasksSlice.reducer;