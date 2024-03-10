import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "Nazmul",
  email: "shadin@gmail.com",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
