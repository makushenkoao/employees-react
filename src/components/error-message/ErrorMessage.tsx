import { Alert } from "antd";

export const ErrorMessage = ({ message }: { message?: string }) => {
  if (!message) return null;
  return <Alert message={message} type="error" />;
};
