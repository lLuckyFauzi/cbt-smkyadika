import React, { ReactNode } from "react";
import { Layout } from "antd";
import TitleHead from "./Partials/TitleHead";
import Image from "next/image";
import DashboardHead from "../../../public/image/icons/DashboardHead.png";
import Letter from "../../../public/image/icons/Letter.png";
import { useRouter } from "next/router";

interface HeaderProps {
  children?: ReactNode;
}

const Header = (props: HeaderProps) => {
  const { children } = props;
  const { Header } = Layout;
  const router = useRouter();

  return (
    <Header
      style={{
        backgroundColor: "white",
        marginRight: "72px",
        minWidth: "80%",
      }}
    >
      {router.pathname === "/insert" ? (
        <TitleHead title="Add Material" icon={<Image src={Letter} />} />
      ) : (
        <TitleHead title="Dashboard" icon={<Image src={DashboardHead} />} />
      )}
      {children}
    </Header>
  );
};

export default Header;
