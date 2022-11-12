import { Input } from "antd";
import React, { ChangeEventHandler, CSSProperties, ReactNode } from "react";
import Text from "../Typography/Text";

interface InputProps {
  label?: boolean;
  labelText?: string;
  placeholder?: string;
  style?: CSSProperties;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  icons?: ReactNode;
  id?: string | undefined;
  inputName?: string;
  inputType?: "Password" | "Text";
  onBlur?: ChangeEventHandler<HTMLInputElement>;
}

const InputText = (props: InputProps) => {
  const {
    label,
    labelText,
    placeholder,
    style,
    value,
    onChange,
    icons,
    id,
    inputName,
    inputType,
    onBlur,
    ...otherProps
  } = props;

  return (
    <div>
      {label ? (
        <div>
          <label
            htmlFor="email"
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
              gap: "8px",
            }}
          >
            {icons ? icons : ""}
            {<Text style={{ lineHeight: "1px" }}>{labelText}</Text> || (
              <Text>Label</Text>
            )}
          </label>
        </div>
      ) : (
        ""
      )}
      {inputType === "Password" ? (
        <Input.Password
          id={id}
          name={inputName}
          onBlur={onBlur}
          style={style}
          placeholder={placeholder || "Placeholder"}
          value={value}
          onChange={onChange}
        />
      ) : (
        <Input
          id={id}
          name={inputName}
          onBlur={onBlur}
          style={style}
          placeholder={placeholder || "Placeholder"}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default InputText;
