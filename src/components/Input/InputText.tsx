import { Input } from "antd";
import React, { ChangeEventHandler, CSSProperties, ReactNode } from "react";
import Text from "../Typography/Text";
import Icon from "@ant-design/icons/lib/components/Icon";
import EmailIcon from "../../public/image/icons/Email.png";
import Image, { StaticImageData } from "next/image";

interface InputProps {
  label?: boolean;
  labelText?: string;
  placeholder?: string;
  style?: CSSProperties;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  icons?: ReactNode;
}

const InputText = (props: InputProps) => {
  const { label, labelText, placeholder, style, value, onChange, icons } =
    props;

  return (
    <div>
      {label ? (
        <div>
          <label
            htmlFor="email"
            style={{
              display: "flex",
              marginBottom: "8px",
              gap: "8px",
            }}
          >
            {icons ? icons : ""}
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
