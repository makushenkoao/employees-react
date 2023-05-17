import { Card, Form, Row, Space, Typography } from "antd";
import { ErrorMessage, Layout } from "../components";
import { Button, Input, InputPassword } from "../ui";
import { Link, useNavigate } from "react-router-dom";
import { ERouteNames } from "../router";
import { TUserData } from "../types";
import { useLoginMutation } from "../app/services";
import { isErrorWithMessage } from "../utils/is-error-with-message";
import React, { useState } from "react";

export const Login = () => {
  const [loginUser, loginUserResult] = useLoginMutation();
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit = async (data: TUserData) => {
    try {
      await loginUser(data)
        .unwrap()
        .finally(() => navigate(ERouteNames.HOME));
    } catch (e) {
      const isE = isErrorWithMessage(e);
      if (isE) {
        setError(e.data.message);
      } else {
        setError("Uncaught error :3");
      }
    }
  };

  React.useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Login" style={{ width: "30rem" }}>
          <Form onFinish={onSubmit}>
            <Input name="email" type="email" placeholder="Write email..." />
            <InputPassword name="password" placeholder="Write password..." />
            <Button htmlType="submit" type="primary">
              Login
            </Button>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              No account? <Link to={ERouteNames.REGISTER}>Register</Link>
            </Typography.Text>
            <ErrorMessage message={error} />
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};
