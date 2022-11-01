import { Menu, MenuProps } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Text from "../../../../components/Typography/Text";
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
  return (
    <div>
      <Menu>
        <Menu.Item
          icon={<Image src={DashboardIcon} width={"18px"} height={"18px"} />}
        >
          <Link href={"/dashboard"}>
            <Text color="white" size={15} style={{ fontWeight: "400" }}>
              Dashboard
            </Text>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default MenuSider;
