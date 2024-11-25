import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: !!localStorage.getItem("accessToken"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeLogin: (state) => {
      state.isLogin = true;
    },
    changeLogout: (state) => {
      state.isLogin = false;
      localStorage.clear();
    },
  },
});

export const { changeLogin, changeLogout } = authSlice.actions;
export default authSlice.reducer;
