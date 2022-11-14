import React, { useContext } from "react";
import Logout from "../../../../public/image/icons/Logout.png";
import Image from "next/image";
import { notification, Popconfirm } from "antd";
import Text from "../../../../components/Typography/Text";
import { useRouter } from "next/router";
import { PublicContext } from "../../../core";

const FooterSider = () => {
  const router = useRouter();
  const ctxPublic = useContext(PublicContext);
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
          onConfirm={() => {
            ctxPublic.setIsLogin(false);
            localStorage.removeItem("tokenpublic");
            router.replace("/login");
            notification.success({
              message: "Logout berhasil!",
            });
          }}
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
            {ctxPublic.userData?.nama}
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
            {ctxPublic.userData?.username}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default FooterSider;
