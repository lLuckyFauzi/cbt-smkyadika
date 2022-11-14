import { Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Text from "../../../../components/Typography/Text";
import DashboardIcon from "../../../../public/image/icons/Dashboard.png";

interface MenuItemProps {
  key?: string;
}

const MenuSider = (props: MenuItemProps) => {
  const { key } = props;
  return (
    <div>
      <Menu>
        <Menu.Item
          key={key}
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
