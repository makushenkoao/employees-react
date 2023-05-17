import { Button } from "../../ui";
import { Layout, Row, Space, Typography } from "antd";
import {
  TeamOutlined,
  UserOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { ERouteNames } from "../../router";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features";
import { LOCAL_STORAGE_TOKEN } from "../../app/constants";

export const Header = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    localStorage.removeItem(LOCAL_STORAGE_TOKEN);
    navigate(ERouteNames.LOGIN);
  };

  return (
    <Layout.Header
      style={{
        padding: 0,
        background: "transparent",
        margin: "20px 0",
      }}
    >
      <Row align="bottom" justify="space-between">
        <Space>
          <TeamOutlined style={{ fontSize: "26px" }} />
          <Link to={ERouteNames.HOME}>
            <Button type="ghost">
              <Typography.Title level={1}>Employees</Typography.Title>
            </Button>
          </Link>
        </Space>
        {!user ? (
          <Space>
            <Link to={ERouteNames.REGISTER}>
              <Button type="ghost" icon={<UserOutlined />}>
                Register
              </Button>
            </Link>
            <Link to={ERouteNames.LOGIN}>
              <Button type="ghost" icon={<LoginOutlined />}>
                Login
              </Button>
            </Link>
          </Space>
        ) : (
          <Button type="ghost" icon={<LogoutOutlined />} onClick={onLogout}>
            Logout
          </Button>
        )}
      </Row>
    </Layout.Header>
  );
};
