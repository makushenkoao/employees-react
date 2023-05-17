import { EmployeeForm, Layout, Loader } from "../components";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import {
  editEmployee,
  useEditEmployeeMutation,
  useGetEmployeeQuery,
} from "../app/services";
import { Row } from "antd";
import { ERouteNames } from "../router";
import { IEmployee } from "../types";
import { isErrorWithMessage } from "../utils/is-error-with-message";

export const EditEmployee = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [error, setError] = useState<string>("");
  const { data, isLoading } = useGetEmployeeQuery(id || "");
  const [editEmployee] = useEditEmployeeMutation();

  const onFinish = async (employee: IEmployee) => {
    try {
      const editedEmployee = {
        ...data,
        ...employee,
      };
      await editEmployee(editedEmployee).unwrap();
      navigate(ERouteNames.STATUS + "/updated");
    } catch (e) {
      const isE = isErrorWithMessage(e);
      if (isE) {
        setError(e.data.message);
      } else {
        setError("Uncaught error :3");
      }
    }
  };

  if (isLoading) return <Loader />;
  return (
    <Layout>
      <Row align="middle" justify="center">
        <EmployeeForm
          title="Edit employee"
          employee={data}
          onFinish={onFinish}
          btnText="Edit"
          error={error}
        />
      </Row>
    </Layout>
  );
};
