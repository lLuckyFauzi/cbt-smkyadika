import { Button } from "antd";
import Link from "next/link";
import React, { CSSProperties, ReactNode } from "react";
import Styling from "../ButtonStyle.module.scss";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: ReactNode;
  style?: CSSProperties;
  icon?: ReactNode;
  href?: string;
}

const BtnPrimary = (props: ButtonProps) => {
  const { className, onClick, disabled, children, style, icon, href } = props;

  return (
    <div className={className || Styling.primary}>
      <Link href={href || "#"}>
        <Button style={style} type="link" onClick={onClick} disabled={disabled}>
          {icon}
          {children || "Button"}
        </Button>
      </Link>
    </div>
  );
};

export default BtnPrimary;
