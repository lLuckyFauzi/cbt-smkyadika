import React, { ReactNode } from "react";
import { Select } from "antd";
import SelectStyle from "./Style.module.scss";

interface SelectProps {
  children?: ReactNode;
  defaultValue?: string;
}

const SelectCompo = (props: SelectProps) => {
  const { children, defaultValue } = props;

  return (
    <div
      className={SelectStyle.select}
      style={{
        display: "flex",
        marginBottom: "30px",
      }}
    >
      <Select defaultValue={defaultValue} placeholder="Tanggal">
        {children}
      </Select>
    </div>
  );
};

export default SelectCompo;
