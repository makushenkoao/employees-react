import React from "react";
import { Spin } from "antd";

export const Loader = () => {
  return (
    <Spin
      size="large"
      style={{
        position: "absolute",
        top: "50%",
        right: "50%",
        translate: "translate(-50%, -50%)",
      }}
    />
  );
};