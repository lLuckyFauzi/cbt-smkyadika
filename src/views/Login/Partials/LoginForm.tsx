import React, { useContext } from "react";
import BtnPrimary from "../../../components/Button/Primary/Primary";
import InputText from "../../../components/Input/InputText";
import Text from "../../../components/Typography/Text";
import LoginFormStyle from "./Style.module.scss";
import UserIcon from "../../../public/image/icons/user.png";
import PassIcon from "../../../public/image/icons/Password.png";
import Image from "next/image";
import { Form, Formik } from "formik";
import LoginSchema from "../../../validations/VLogin";
import ErrorLine from "../../../components/ErrorLine/ErrorLine";
import { useMutation } from "react-query";
import { notification } from "antd";
import SubmitLogin from "../../../mutations/useSubmitLogin";
import { PublicContext } from "../../../layout/core";
import { AxiosError } from "axios";

interface Error {
  message: string;
}

const LoginForm = () => {
  const ctxPublic = useContext(PublicContext);

  const loginMutation = useMutation(SubmitLogin, {
    onSuccess: async (values) => {
      const token = values?.data.token;
      localStorage.setItem("tokenpublic", token);
      ctxPublic.setIsLogin(true);
      notification.success({
        message: "Login berhasil!",
      });
      ctxPublic.setIsLoading(false);
    },
    onError: async (err: AxiosError<Error>) => {
      const error = err.response?.data.message;
      if (err.response?.status === 404) {
        ctxPublic.setIsLoading(false);
        return notification.error({
          message: "User tidak ditemukan!",
        });
      } else if (err.response?.status === 401) {
        ctxPublic.setIsLoading(false);
        return notification.error({
          message: "Password salah!",
        });
      }
      notification.error({
        message: error,
      });
      ctxPublic.setIsLoading(false);
    },
    onMutate: async () => {
      ctxPublic.setIsLoading(true);
    },
  });

  return (
    <div className={LoginFormStyle.form}>
      <div
        style={{
          marginLeft: "43px",
        }}
      >
        <Text
          size={30}
          style={{
            fontWeight: 400,
            color: "#023E7D",
            marginRight: "5px",
          }}
        >
          Vanilla
        </Text>
        <Text
          size={30}
          style={{
            marginRight: "5px",
            fontWeight: 800,
            color: "#023E7D",
          }}
        >
          CBT
        </Text>
        <Text
          size={20}
          style={{
            fontWeight: 400,
            color: "#023E7D",
          }}
        >
          Admin
        </Text>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            marginTop: "165px",
          }}
        >
          <Text size={40} style={{ fontWeight: 800, color: "#023E7D" }}>
            Welcome
          </Text>
          <br />
          <Text size={20} style={{ fontWeight: 200, color: "#023E7D" }}>
            Hello Teacher, How yours day? hope its good!
          </Text>
          <br />
          <Text size={20} style={{ fontWeight: 200, color: "#023E7D" }}>
            Please enter your detail.
          </Text>
          <Formik
            validationSchema={LoginSchema}
            initialValues={{ username: "", password: "" }}
            onSubmit={(values) => {
              loginMutation.mutate({
                username: values.username,
                password: values.password,
              });
            }}
          >
            {(formikHelpers) => {
              const { handleSubmit, errors, touched } = formikHelpers;
              return (
                <Form
                  onSubmit={handleSubmit}
                  style={{
                    marginTop: "45px",
                    width: "425px",
                  }}
                >
                  <Text size={20} style={{ fontWeight: 700 }}>
                    LOGIN
                  </Text>
                  <div
                    style={{
                      marginTop: "20px",
                    }}
                  >
                    <InputText
                      icons={
                        <Image src={UserIcon} width={"28px"} height={"28px"} />
                      }
                      placeholder={"Enter Your Username"}
                      label="Username"
                      name="username"
                      type="text"
                      style={{
                        height: "52px",
                        borderRadius: "12px",
                      }}
                    />
                    <ErrorLine name={touched.username && errors.username} />
                  </div>
                  <div
                    style={{
                      marginTop: "20px",
                    }}
                  >
                    <InputText
                      icons={
                        <Image src={PassIcon} width={"28px"} height={"28px"} />
                      }
                      placeholder={"Enter Your Password"}
                      label="Password"
                      name="password"
                      type="password"
                      style={{
                        height: "52px",
                        borderRadius: "12px",
                      }}
                    />
                    <ErrorLine name={touched.password && errors.password} />
                  </div>
                  <div
                    style={{
                      marginTop: "65px",
                    }}
                  >
                    <BtnPrimary type="submit">
                      <Text
                        size={20}
                        color="white"
                        style={{
                          fontWeight: "700",
                        }}
                      >
                        Login
                      </Text>
                    </BtnPrimary>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "268px",
        }}
      >
        <Text size={15} style={{ fontWeight: 200 }}>
          Powered by
        </Text>
        <Text size={15} style={{ fontWeight: 700, color: "#023E7D" }}>
          Team Teaching Factory
        </Text>
      </div>
    </div>
  );
};

export default LoginForm;
