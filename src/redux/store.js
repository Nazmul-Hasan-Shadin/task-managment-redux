import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./feature/task/taskSlice";
const store = configureStore({
  reducer: {
    task: taskSlice,
  },
});

export default store;
