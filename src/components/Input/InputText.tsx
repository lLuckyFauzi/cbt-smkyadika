import { Input } from "antd";
import React, { ReactNode } from "react";
import Text from "../Typography/Text";
import { InputProps } from "antd/lib/input";
import { useField } from "formik";

interface FieldProps extends InputProps {
  title?: string;
  label?: string;
  icons?: ReactNode;
  inputName?: string;
  inputType?: "Password" | "Text";
  className?: string;
}

const InputText = (props: FieldProps) => {
  const {
    label,
    placeholder,
    style,
    icons,
    inputType,
    className,
    ...otherProps
  } = props;
  const [field] = useField(otherProps as any);

  return (
    <div className={className}>
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
          {<Text style={{ lineHeight: "1px" }}>{label}</Text> || (
            <Text>Label</Text>
          )}
        </label>
      </div>
      <Input {...field} {...props} />
    </div>
  );
};

export default InputText;
