import { Button } from "antd";
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
  type?: "button" | "submit" | "reset" | undefined;
}

const BtnPrimary = (props: ButtonProps) => {
  const { className, onClick, disabled, children, style, icon, href, type } =
    props;

  return (
    <div className={className || Styling.primary}>
      <Button
        style={style}
        htmlType={type}
        onClick={onClick}
        disabled={disabled}
      >
        {icon}
        {children || "Button"}
      </Button>
    </div>
  );
};

export default BtnPrimary;
