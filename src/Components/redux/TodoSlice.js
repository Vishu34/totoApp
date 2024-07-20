import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  completetask: [],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodoData: (state, action) => {
      state.todos.push({ id: Date.now(), task: action.payload });
    },

    edittodoData: (state, action) => {
      const { editTask, inputTask1 } = action.payload;

      const existingData = state.todos.find((elm) => elm.id === editTask);

      if (existingData) {
        existingData.task = inputTask1;
      }
    },

    deleteTask: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((elm) => elm.id !== id);
      state.completetask = state.completetask.filter((elm) => elm.id !== id);
    
      localStorage.setItem("todoData" , JSON.stringify(state.todos))
      localStorage.setItem("CompletedData", JSON.stringify(state.completetask))
    },

    addCheckData: (state, action) => {
      const { checked, id } = action.payload;
      const addData = state.todos.find((elm) => elm.id === id);
     
      if (addData) {
        state.todos = state.todos.filter((elm) => elm.id !== id);
        localStorage.setItem("todoData" , JSON.stringify(state.todos))
        state.completetask.push({
          id:Date.now(),
          taskid:addData.id,
          task: addData.task,
          checked: checked,
        });
      }

      
    },
    removeCheckData: (state, action) => {
        const { checked, id } = action.payload;
        const addData = state.completetask.find((elm) => elm.id === id);
       
        if (addData) {
          state.completetask = state.completetask.filter((elm) => elm.id !== id);
          localStorage.setItem("CompletedData", JSON.stringify(state.completetask))
          state.todos.push({
            id:Date.now(),
            completetaskid:addData.id,
            task: addData.task,
            checked: checked,
          });
        }
  
        
      },
  },
});

export const { addtodoData, edittodoData, deleteTask, addCheckData , removeCheckData} =
  todoSlice.actions;

export default todoSlice.reducer;
