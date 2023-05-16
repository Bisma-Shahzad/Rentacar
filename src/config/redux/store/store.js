import { configureStore } from "@reduxjs/toolkit";
import loginslice from "../reducer/loginslice";

const store = configureStore({
  reducer: {
    Login: loginslice,
  },
});

export default store;