import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: !!localStorage.getItem("accessToken"),
  userNickname: localStorage.getItem("userNickname") ?? "",
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
    updateUserInfo: (state, action) => {
      const newUserInfo = action.payload;
      state.userNickname = newUserInfo;
    },
  },
});

export const { changeLogin, changeLogout, updateUserInfo } = authSlice.actions;
export default authSlice.reducer;
