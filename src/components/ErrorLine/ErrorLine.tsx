import React from "react";
import Text from "../Typography/Text";

interface ErrorLineProps {
  name?: string | false | undefined;
}

const ErrorLine = (props: ErrorLineProps) => {
  const { name } = props;

  return (
    <div
      style={{
        padding: "2px 6px",
        borderRadius: "8px",
        margin: "5px 0px",
        display: "block",
      }}
    >
      <Text
        style={{
          color: "red",
        }}
      >
        {name}
      </Text>
    </div>
  );
};

export default ErrorLine;
