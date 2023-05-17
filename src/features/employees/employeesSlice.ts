import { IEmployee } from "../../types";
import { createSlice } from "@reduxjs/toolkit";
import {
  getAllEmployees,
  getEmployee,
  addEmployee,
  removeEmployee,
  editEmployee,
} from "../../app/services";
import { RootState } from "../../app/store";

interface InitialState {
  employees: IEmployee[] | null;
}

const initialState: InitialState = {
  employees: null,
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: { logout: () => initialState },
  extraReducers: (builder) => {
    builder.addMatcher(getAllEmployees.matchFulfilled, (state, action) => {
      state.employees = action.payload;
    });
    // builder.addMatcher(getEmployee.matchFulfilled, (state, action) => {});
    // builder.addMatcher(addEmployee.matchFulfilled, (state, action) => {});
    // builder.addMatcher(removeEmployee.matchFulfilled, (state, action) => {});
    // builder.addMatcher(editEmployee.matchFulfilled, (state, action) => {});
  },
});

export const selectEmployees = (state: RootState) => state.employees;
export default employeesSlice.reducer;
