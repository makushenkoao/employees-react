import { Link, useParams } from "react-router-dom";
import { Button, Result, Row } from "antd";
import { ERouteNames } from "../router";

const Statuses: Record<string, string> = {
  created: "User successfully created",
  updated: "User successfully updated",
  deleted: "User successfully deleted",
};

export const Status = () => {
  const { status } = useParams();

  return (
    <Row
      align="middle"
      justify="center"
      style={{
        width: "100%",
      }}
    >
      <Result
        status={status ? "success" : 404}
        title={status ? Statuses[status] : "Not found"}
        extra={
          <Button type="primary" key="dashboard">
            <Link to={ERouteNames.HOME}>To main</Link>
          </Button>
        }
      />
    </Row>
  );
};
