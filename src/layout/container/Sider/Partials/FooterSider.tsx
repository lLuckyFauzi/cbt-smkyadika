import React from "react";
import Logout from "../../../../public/image/icons/Logout.png";
import Image from "next/image";
import { Popconfirm } from "antd";
import Text from "../../../../components/Typography/Text";

const FooterSider = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
        position: "absolute",
        bottom: "20px",
      }}
    >
      <div
        style={{
          width: "34px",
          height: "34px",
          cursor: "pointer",
        }}
      >
        <Popconfirm
          placement="topLeft"
          title="Logout?"
          onConfirm={() => {}}
          okText="Yes"
          cancelText="No"
        >
          <Image src={Logout} />
        </Popconfirm>
      </div>
      <div>
        <div>
          <Text
            size={15}
            color="white"
            style={{
              display: "block",
              fontWeight: 800,
            }}
          >
            Lucky Fauzi
          </Text>
        </div>
        <div>
          <Text
            size={10}
            color="white"
            style={{
              display: "block",
              fontWeight: 400,
            }}
          >
            luckyfauzi2004@gmail.com
          </Text>
        </div>
      </div>
    </div>
  );
};

export default FooterSider;
