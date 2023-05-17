import { ColumnsType } from "antd/es/table";
import { IEmployee } from "../../types";

export const LOCAL_STORAGE_TOKEN = "token";

export const EMPLOYEES_TABLE_COLUMNS: ColumnsType<IEmployee> = [
  {
    title: "Name",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];
