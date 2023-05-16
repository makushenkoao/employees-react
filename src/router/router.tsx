import { createBrowserRouter } from "react-router-dom";
import { ERouteNames } from ".";
import {
  Employees,
  EditEmployee,
  Employee,
  AddEmployee,
  Login,
  Register,
  Status,
} from "../pages";

export const router = createBrowserRouter([
  {
    path: ERouteNames.HOME,
    element: <Employees />,
  },
  {
    path: ERouteNames.LOGIN,
    element: <Login />,
  },
  {
    path: ERouteNames.REGISTER,
    element: <Register />,
  },
  {
    path: ERouteNames.EMPLOYEE_ADD,
    element: <AddEmployee />,
  },
  {
    path: ERouteNames.EMPLOYEE + "/:id",
    element: <Employee />,
  },
  {
    path: ERouteNames.EMPLOYEE_EDIT + "/:id",
    element: <EditEmployee />,
  },
  {
    path: ERouteNames.STATUS + "/:status",
    element: <Status />,
  },
]);
