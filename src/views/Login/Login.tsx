import { Spin } from "antd";
import React, { useContext } from "react";
import { PublicContext } from "../../layout/core";
import ImageBackdrop from "./Partials/ImageBackdrop";
import LoginForm from "./Partials/LoginForm";

const Login = () => {
  const ctxPublic = useContext(PublicContext);
  return (
    <Spin spinning={ctxPublic.isLoading} tip={"Loading..."}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "15px 20px",
        }}
      >
        <ImageBackdrop />
        <LoginForm />
      </div>
    </Spin>
  );
};

export default Login;
