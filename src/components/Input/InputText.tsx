import { Input } from "antd";
import React, { ChangeEventHandler, CSSProperties } from "react";
import Text from "../Typography/Text";

interface InputProps {
  label?: boolean;
  labelText?: string;
  placeholder?: string;
  style?: CSSProperties;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const InputText = (props: InputProps) => {
  const { label, labelText, placeholder, style, value, onChange } = props;

  return (
    <div>
      {label ? (
        <div>
          <label htmlFor="email">
            {<Text>{labelText}</Text> || <Text>Label</Text>}
          </label>
        </div>
      ) : (
        ""
      )}
      <Input
        style={style}
        placeholder={placeholder || "Placeholder"}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputText;
