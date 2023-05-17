import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  useGetEmployeeQuery,
  useRemoveEmployeeMutation,
} from "../app/services";
import { useSelector } from "react-redux";
import { selectUser } from "../features";
import { ErrorMessage, Layout, Loader } from "../components";
import { ERouteNames } from "../router";
import { Descriptions, Divider, Modal, Space } from "antd";
import { Button } from "../ui";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { isErrorWithMessage } from "../utils/is-error-with-message";

export const Employee = () => {
  const [error, setError] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const [removeEmployee] = useRemoveEmployeeMutation();
  const { isLoading, data } = useGetEmployeeQuery(id || "");
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!user) {
      navigate(ERouteNames.LOGIN);
    }
  }, [user, navigate]);

  if (isLoading) return <Loader />;
  if (!data) navigate(ERouteNames.HOME);

  const onDelete = async () => {
    setIsOpen(false);
    try {
      data && (await removeEmployee(data.id).unwrap());
      navigate(ERouteNames.STATUS + "/" + "deleted");
    } catch (e) {
      console.log(e);
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
      <Descriptions title="Employee information" bordered column={3}>
        <Descriptions.Item label="Name" span={3}>
          {`${data?.firstName} ${data?.lastName}`}
        </Descriptions.Item>
        <Descriptions.Item label="Age" span={3}>
          {data?.age}
        </Descriptions.Item>
        <Descriptions.Item label="Address" span={3}>
          {data?.address}
        </Descriptions.Item>
      </Descriptions>
      {user?.id === data?.userId && (
        <>
          <Divider orientation="left">Actions</Divider>
          <Space>
            <Link to={ERouteNames.EMPLOYEE_EDIT + "/" + data?.id}>
              <Button shape="round" type="default" icon={<EditOutlined />}>
                Edit
              </Button>
            </Link>
            <Button
              shape="round"
              danger
              type="default"
              onClick={() => setIsOpen(true)}
              icon={<DeleteOutlined />}
            >
              Delete
            </Button>
          </Space>
        </>
      )}
      <ErrorMessage message={error} />
      <Modal
        title="Confirm deletion"
        open={isOpen}
        onOk={onDelete}
        onCancel={() => setIsOpen(false)}
        cancelButtonProps={{
          danger: true,
        }}
        okText="Confirm"
        cancelText="Cancel"
      >
        Are you sure you want to remove the employee from the table?
      </Modal>
    </Layout>
  );
};
