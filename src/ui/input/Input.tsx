import { Form, Input as AntInput } from "antd";
import { FC } from "react";
import { SizeType } from "antd/es/config-provider/SizeContext";

export interface InputProps {
  name: string;
  placeholder: string;
  type?: string;
  size?: SizeType;
}

export const Input: FC<InputProps> = ({
  name,
  placeholder,
  type = "text",
  size = "large",
}) => {
  return (
    <Form.Item
      name={name}
      shouldUpdate
      rules={[
        {
          required: true,
          message: "Required field",
        },
      ]}
    >
      <AntInput placeholder={placeholder} type={type} size={size} />
    </Form.Item>
  );
};
