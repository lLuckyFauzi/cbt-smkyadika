import Image from "next/image";
import React from "react";
import Text from "../../../components/Typography/Text";
import Teacher from "../../../public/image/teacher.png";
import ImgBackdropStyle from "./Style.module.scss";

const ImageBackdrop = () => {
  return (
    <div className={ImgBackdropStyle["backdrop"]}>
      <div className={ImgBackdropStyle["ImageContainer"]}>
        <Image width={"376px"} height={"456px"} src={Teacher} alt="Teacher" />
        <div>
          <Text
            style={{
              color: "white",
              fontWeight: 700,
            }}
            size={35}
          >
            Hello Teacher
          </Text>
        </div>
        <div>
          <Text
            style={{
              color: "white",
              fontWeight: 600,
            }}
            size={25}
          >
            Ayo masukkan soal untuk ujian
          </Text>
          <br />
          <Text
            style={{
              color: "white",
              fontWeight: 600,
            }}
            size={25}
          >
            para siswa
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ImageBackdrop;
