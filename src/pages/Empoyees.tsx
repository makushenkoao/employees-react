import { Layout } from "../components";
import { Button } from "../ui";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { useGetAllEmployeesQuery } from "../app/services";
import { EMPLOYEES_TABLE_COLUMNS } from "../app/constants";
import { useNavigate } from "react-router-dom";
import { ERouteNames } from "../router";
import { useSelector } from "react-redux";
import { selectUser } from "../features";
import { useEffect } from "react";

export const Employees = () => {
  const { isLoading, data } = useGetAllEmployeesQuery();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(ERouteNames.LOGIN);
    }
  }, [user, navigate]);

  return (
    <Layout>
      <Button
        type="primary"
        onClick={() => navigate(ERouteNames.EMPLOYEE_ADD)}
        icon={<PlusCircleOutlined />}
      >
        Add employee
      </Button>
      <Table
        loading={isLoading}
        dataSource={data}
        pagination={false}
        columns={EMPLOYEES_TABLE_COLUMNS}
        rowKey={(record) => record.id}
        onRow={(record) => {
          return {
            onClick: () => navigate(ERouteNames.EMPLOYEE + "/" + record.id),
          };
        }}
      />
    </Layout>
  );
};
