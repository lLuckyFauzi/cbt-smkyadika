import React, { ReactNode } from "react";
import { Layout } from "antd";
import TitleHead from "./Partials/TitleHead";

interface HeaderProps {
  children?: ReactNode;
}

const Header = (props: HeaderProps) => {
  const { children } = props;
  const { Header } = Layout;

  return (
    <Header
      style={{
        backgroundColor: "white",
        marginRight: "72px",
        minWidth: "85%",
      }}
    >
      <TitleHead />
      {children}
    </Header>
  );
};

export default Header;
