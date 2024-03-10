import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [],
  userTask: [],
};
const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.task.length === 0) {
        state.task.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastElement = state.task.at(-1);
        state.task.push({
          id: lastElement.id + 1,
          status: "pending",
          ...payload,
        });
      }
    },

    removeTask: (state, { payload }) => {
      state.task.filter((item) => item.id !== payload);
    },
    updateStatus: (state, { payload }) => {
      const target = state.task.find((item) => item.id === payload.id);
      target.status = payload.status;
    },

    userTask: (state, { payload }) => {
      state.userTask = state.task.filter((item) => item.assignTo === payload);
    },
  },
});

export const { addTask, updateStatus, removeTask, userTask } =
  taskSlice.actions;
export default taskSlice.reducer;
