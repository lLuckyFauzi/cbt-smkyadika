import { Layout } from "antd";
import React from "react";
import SideHeader from "./Partials/SideHeader";
import SiderStyle from "./SiderStyle.module.scss";
import MenuSider from "./Partials/Menu";
import FooterSider from "./Partials/FooterSider";

const Sider = () => {
  const { Sider } = Layout;
  return (
    <Sider
      className={SiderStyle.sider}
      width={"228px"}
      style={{
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <SideHeader />
      <MenuSider />
      <FooterSider />
    </Sider>
  );
};

export default Sider;
