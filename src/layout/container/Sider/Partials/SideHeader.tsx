import Image from "next/image";
import React from "react";
import Text from "../../../../components/Typography/Text";
import Yadika from "../../../../public/image/logo/yadika.png";

const SideHeader = () => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "35px",
      }}
    >
      <Image src={Yadika} alt="img" width={"56px"} height={"56px"} />
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Text
          size={20}
          style={{
            color: "white",

            fontWeight: 500,
          }}
        >
          CBT
        </Text>
        <Text
          size={20}
          style={{
            color: "white",
            fontWeight: 800,
          }}
        >
          {" "}
          SMK Yadika
        </Text>
        <Text
          size={20}
          style={{
            color: "white",
            fontWeight: 800,
          }}
        >
          {" "}
          Soreang
        </Text>
        <br />
        <Text
          size={10}
          style={{
            color: "white",
            fontWeight: 500,
          }}
        >
          {" "}
          Admin
        </Text>
      </div>
    </div>
  );
};

export default SideHeader;
