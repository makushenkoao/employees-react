import { ErrorMessage, Layout } from "../components";
import { Card, Form, Row, Space, Typography } from "antd";
import { Button, Input, InputPassword } from "../ui";
import { Link, useNavigate } from "react-router-dom";
import { ERouteNames } from "../router";
import { isErrorWithMessage } from "../utils/is-error-with-message";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features";
import { useRegisterMutation } from "../app/services";
import { TRegisterData } from "../types";

export const Register = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [error, setError] = useState<string>("");
  const [registerUser] = useRegisterMutation();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const register = async (data: TRegisterData) => {
    try {
      await registerUser(data).unwrap();
      navigate("/");
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
        <Card title="Register" style={{ width: "30rem" }}>
          <Form onFinish={register}>
            <Input name="name" type="name" placeholder="Write name..." />
            <Input name="email" type="email" placeholder="Write email..." />
            <InputPassword name="password" placeholder="Write password..." />
            <InputPassword
              name="confirmPassword"
              placeholder="Confirm password"
            />
            <Button htmlType="submit" type="primary">
              Register
            </Button>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              Have an account? <Link to={ERouteNames.LOGIN}>Login</Link>
            </Typography.Text>
            <ErrorMessage message={error} />
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};
