import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./feature/task/taskSlice";
import userSlice from "./feature/user/userSlice";
const store = configureStore({
  reducer: {
    task: taskSlice,
    userSlice: userSlice,
  },
});

export default store;
