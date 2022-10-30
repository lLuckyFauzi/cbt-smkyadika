import React from "react";
import BtnPrimary from "../../../components/Button/Primary/Primary";
import InputText from "../../../components/Input/InputText";
import Text from "../../../components/Typography/Text";
import LoginFormStyle from "./Style.module.scss";
import EmailIcon from "../../../public/image/icons/Email.png";
import PassIcon from "../../../public/image/icons/Password.png";
import Image from "next/image";

const LoginForm = () => {
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
            Hello Teacher, How's your day? hope it's good!
          </Text>
          <br />
          <Text size={20} style={{ fontWeight: 200, color: "#023E7D" }}>
            Please enter your detail.
          </Text>
          <form
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
                icons={<Image src={EmailIcon} width={"28px"} height={"28px"} />}
                label
                labelText={"Email"}
                placeholder={"Enter Your Email"}
                style={{
                  height: "52px",
                  borderRadius: "12px",
                }}
              />
            </div>
            <div
              style={{
                marginTop: "20px",
              }}
            >
              <InputText
                icons={<Image src={PassIcon} width={"28px"} height={"28px"} />}
                label
                labelText={"Password"}
                placeholder={"Enter Your Password"}
                style={{
                  height: "52px",
                  borderRadius: "12px",
                }}
              />
            </div>
            <div
              style={{
                marginTop: "65px",
              }}
            >
              <BtnPrimary>
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
          </form>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "268px",
        }}
      >
        <Text size={15} style={{ fontWeight: 200 }}>
          Powered by{" "}
        </Text>
        <Text size={15} style={{ fontWeight: 700, color: "#023E7D" }}>
          Team Teaching Factory
        </Text>
      </div>
    </div>
  );
};

export default LoginForm;
