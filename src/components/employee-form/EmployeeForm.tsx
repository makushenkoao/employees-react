import React, { FC } from "react";
import { IEmployee } from "../../types";
import { Card, Form, Space } from "antd";
import { Button, Input } from "../../ui";
import { ErrorMessage } from "../error-message/ErrorMessage";

interface EmployeeFormProps {
  onFinish: (value: IEmployee) => void;
  btnText: string;
  title: string;
  error?: string;
  employee?: IEmployee;
}

export const EmployeeForm: FC<EmployeeFormProps> = ({
  employee,
  btnText,
  error,
  title,
  onFinish,
}) => {
  return (
    <Card
      title={title}
      style={{
        width: "30rem",
      }}
    >
      <Form name="employee-form" onFinish={onFinish} initialValues={employee}>
        <Input name="firstName" placeholder="Write firstName..." />
        <Input name="lastName" placeholder="Write lastName..." />
        <Input type="number" name="age" placeholder="Age" />
        <Input name="address" placeholder="Write address..." />
        <Space>
          <ErrorMessage message={error} />
          <Button type='primary' htmlType="submit">{btnText}</Button>
        </Space>
      </Form>
    </Card>
  );
};
