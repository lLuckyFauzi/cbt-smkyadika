import Image from "next/image";
import React from "react";
import BtnPrimary from "../../../components/Button/Primary/Primary";
import DoneIcon from "../../../public/image/icons/Done.png";
import Text from "../../../components/Typography/Text";

const Title = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text size={25} bold>
          Tambah Mata Pelajaran
        </Text>
        <BtnPrimary
          style={{
            padding: "8px 39px 8px 39px",
          }}
          icon={<Image src={DoneIcon} width={"20px"} height={"20px"} />}
        >
          <Text
            size={20}
            color="white"
            style={{
              fontWeight: 500,
            }}
          >
            Selesai
          </Text>
        </BtnPrimary>
      </div>
      <hr style={{ width: "100%", border: "1px solid gray" }} />
    </>
  );
};

export default Title;
