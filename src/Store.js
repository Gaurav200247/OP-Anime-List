import { configureStore } from "@reduxjs/toolkit";
import { SideBarReducer, NavSeachReducer, FormTypeReducer } from "./Reducer";

const store = configureStore({
  reducer: {
    SideBarReducer: SideBarReducer,
    NavSeachReducer: NavSeachReducer,
    FormTypeReducer: FormTypeReducer,
  },
});

export default store;
