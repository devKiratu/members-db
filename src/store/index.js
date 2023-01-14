import { configureStore } from "@reduxjs/toolkit";
import membersReducer from "./membersSlice";

const store = configureStore({
  reducer: { members: membersReducer },
});

export default store;
