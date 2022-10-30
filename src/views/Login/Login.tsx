import React from "react";
import ImageBackdrop from "./Partials/ImageBackdrop";
import LoginForm from "./Partials/LoginForm";

const Login = () => {
  return (
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
  );
};

export default Login;
