import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: "dark-mode"
};

const modeSlice = createSlice({
  name: 'togglemode',
  initialState,
  reducers: {
    darkMode: (state) => {
      state.value = "dark-mode";
    },
    lightMode: (state) => {
      state.value = "light-mode";
    }
  }
});

export const { darkMode, lightMode } = modeSlice.actions;

export default modeSlice.reducer;
