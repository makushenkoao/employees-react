import { FC, ReactNode } from "react";
import { Form, Button as AntButton } from "antd";

interface ButtonProps {
  children: ReactNode;
  htmlType?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  type?:
    | "link"
    | "text"
    | "ghost"
    | "default"
    | "primary"
    | "dashed"
    | undefined;
  danger?: boolean;
  loading?: boolean;
  shape?: "default" | "circle" | "round" | undefined;
  icon?: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  children,
  type,
  htmlType,
  onClick,
  loading,
  danger,
  shape,
  icon,
}) => {
  return (
    <Form.Item>
      <AntButton
        htmlType={htmlType}
        type={type}
        onClick={onClick}
        loading={loading}
        danger={danger}
        shape={shape}
        icon={icon}
      >
        {children}
      </AntButton>
    </Form.Item>
  );
};
