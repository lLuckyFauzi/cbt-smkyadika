import { Button } from "antd";
import React, { ReactNode } from "react";
import Styling from "../ButtonStyle.module.scss";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: ReactNode;
}

const BtnPrimary = (props: ButtonProps) => {
  const { className, onClick, disabled, children } = props;

  return (
    <div
      className={className || Styling.primary}
      style={{ textAlign: "center", marginTop: "51px" }}
    >
      <Button type="link" onClick={onClick} disabled={disabled}>
        {children || "Button"}
      </Button>
    </div>
  );
};

export default BtnPrimary;
