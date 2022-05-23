import { createReducer } from "@reduxjs/toolkit";

const initialState1 = {
  isSideBar: false,
};

const initialState2 = {
  SearchedData: [],
};

const initialState3 = {
  formType: "login",
};

export const SideBarReducer = createReducer(initialState1, {
  OpenSideBar: (state) => {
    state.isSideBar = true;
  },
  CloseSideBar: (state) => {
    state.isSideBar = false;
  },
});

export const NavSeachReducer = createReducer(initialState2, {
  SetSearchedData: (state, action) => {
    state.SearchedData = action.payload;
  },
});

export const FormTypeReducer = createReducer(initialState3, {
  SetFormType: (state, action) => {
    state.formType = action.payload;
  },
});
