import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: !!localStorage.getItem("accessToken"),
  userNickname: localStorage.getItem("userNickname") ?? "",
  userId: localStorage.getItem("userId") ?? "",
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
    updateUserNickname: (state, action) => {
      const newUserNickname = action.payload;
      state.userNickname = newUserNickname;
    },
    updateUserId: (state, action) => {
      const newUserId = action.payload;
      state.userId = newUserId;
    },
  },
});

export const { changeLogin, changeLogout, updateUserNickname, updateUserId } =
  authSlice.actions;
export default authSlice.reducer;
