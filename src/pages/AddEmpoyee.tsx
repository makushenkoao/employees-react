import { EmployeeForm, Layout } from "../components";
import { Row } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features";
import { useAddEmployeeMutation } from "../app/services";
import { ERouteNames } from "../router";
import { IEmployee } from "../types";
import { isErrorWithMessage } from "../utils/is-error-with-message";

export const AddEmployee = () => {
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const [addEmployee] = useAddEmployeeMutation();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!user) {
      navigate(ERouteNames.LOGIN);
    }
  }, [user, navigate]);

  const onFinish = async (data: IEmployee) => {
    try {
      await addEmployee(data).unwrap();
      navigate(ERouteNames.STATUS + "/created");
    } catch (e) {
      const isE = isErrorWithMessage(e);
      if (isE) {
        setError(e.data.message);
      } else {
        setError("Uncaught error :3");
      }
    }
  };

  return (
    <Layout>
      <Row align="middle" justify="center">
        <EmployeeForm
          title="Add employee"
          btnText="Add"
          onFinish={onFinish}
          error={error}
        />
      </Row>
    </Layout>
  );
};
