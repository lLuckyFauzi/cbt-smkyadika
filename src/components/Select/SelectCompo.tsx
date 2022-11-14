import React, { ChangeEvent, CSSProperties, ReactNode, useState } from "react";
import { Select } from "antd";
import SelectStyle from "./Style.module.scss";
import { DefaultOptionType } from "antd/lib/select";

interface SelectProps {
  children?: ReactNode;
  defaultValue?: string;
  style?: CSSProperties;
  placeholder?: string;
  values?: string;
  onChange?:
    | ((value: string, option: DefaultOptionType | DefaultOptionType[]) => void)
    | undefined;
}

const SelectCompo = (props: SelectProps) => {
  const { children, defaultValue, style, placeholder, values, onChange } =
    props;
  console.log(values);

  return (
    <div
      className={SelectStyle.select}
      style={{
        display: "flex",
        marginBottom: "30px",
      }}
    >
      <Select
        style={style}
        defaultValue={defaultValue}
        placeholder={placeholder}
        value={values}
        onChange={onChange}
      >
        {children}
      </Select>
    </div>
  );
};

export default SelectCompo;
