import { Button, Layout, Space, Typography } from "antd";
import styles from "./Header.module.css";
import { TeamOutlined } from "@ant-design/icons";

export const Header = () => {
  return (
    <Layout.Header className={styles.header}>
      <Space>
        <TeamOutlined className={styles.teamIcon} />
        <Button type="link">Login</Button>
      </Space>
    </Layout.Header>
  );
};
