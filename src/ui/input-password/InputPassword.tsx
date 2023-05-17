import { Form, Input } from "antd";
import { NamePath } from "antd/es/form/interface";
import { FC } from "react";
import { SizeType } from "antd/es/config-provider/SizeContext";

interface InputPasswordProps {
  name: string;
  placeholder: string;
  dependencies?: NamePath[];
  size?: SizeType;
}

export const InputPassword: FC<InputPasswordProps> = ({
  dependencies,
  name,
  placeholder,
  size = "large",
}) => {
  return (
    <Form.Item
      name={name}
      dependencies={dependencies}
      hasFeedback
      rules={[
        {
          required: true,
          message: "Required field",
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value) {
              return Promise.resolve();
            }

            if (name === "confirmPassword") {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            } else {
              if (value.length < 5) {
                return Promise.reject(
                  new Error("Password must be more than 5 characters")
                );
              }
              return Promise.resolve();
            }
          },
        }),
      ]}
    >
      <Input.Password placeholder={placeholder} size={size} />
    </Form.Item>
  );
};
