import React from "react";
import { Layout } from "antd";
import Image from "next/image";
import DashboardHead from "../../../../public/image/icons/DashboardHead.png";
import Text from "../../../../components/Typography/Text";

const TitleHead = () => {
  const { Header } = Layout;
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            width: "41px",
            height: "41px",
          }}
        >
          <Image src={DashboardHead} />
        </div>
        <Text
          size={25}
          style={{
            fontWeight: 800,
          }}
        >
          Dashboard
        </Text>
      </div>
      <hr
        style={{
          marginTop: "35px",
          backgroundColor: "#B8AFAF",
          borderColor: "#B8AFAF",
          width: "100%",
          borderRadius: "12px",
        }}
      />
    </>
  );
};

export default TitleHead;
