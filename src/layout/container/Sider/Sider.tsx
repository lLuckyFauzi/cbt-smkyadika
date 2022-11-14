import { Layout } from "antd";
import React from "react";
import SideHeader from "./Partials/SideHeader";
import SiderStyle from "./SiderStyle.module.scss";
import MenuSider from "./Partials/Menu";
import FooterSider from "./Partials/FooterSider";

const Sider = () => {
  const { Sider } = Layout;
  return (
    <>
      <Sider
        className={SiderStyle.sider}
        width={"228px"}
        style={{
          height: "100vh",
        }}
      >
        <div
          style={{
            padding: "0px 32px",
            position: "fixed",
            bottom: 0,
            top: 0,
            left: 0,
            width: "228px",
            backgroundImage:
              "linear-gradient(to bottom right, rgba(10, 133, 237, 1), rgba(8, 183, 246, 1))",
          }}
        >
          <SideHeader />
          <MenuSider key={"Dashboard"} />
          <FooterSider />
        </div>
      </Sider>
    </>
  );
};

export default Sider;
