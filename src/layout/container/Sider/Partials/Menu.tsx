import { Menu, MenuProps } from "antd";
import Image from "next/image";
import React from "react";
import DashboardIcon from "../../../../public/image/icons/Dashboard.png";

const MenuSider = () => {
  type MenuItem = Required<MenuProps>["items"][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem(
      "Dashboard",
      "1",
      <Image src={DashboardIcon} width={"18px"} height={"18px"} />
    ),
  ];
  return <Menu items={items} />;
};

export default MenuSider;
