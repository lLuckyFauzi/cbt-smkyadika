import Image from "next/image";
import React from "react";
import Text from "../../../components/Typography/Text";
import Teacher from "../../../public/image/teacher.png";
import ImgBackdropStyle from "./Style.module.scss";

const ImageBackdrop = () => {
  return (
    <div className={ImgBackdropStyle["backdrop"]}>
      <div className={ImgBackdropStyle["Container"]}>
        <div
          style={{
            paddingLeft: "146px",
            paddingRight: "146px",
          }}
        >
          <Image src={Teacher} alt="Teacher" />
        </div>
        <div
          style={{
            paddingLeft: "122px",
            paddingRight: "122px",
          }}
        >
          <div>
            <Text
              style={{
                color: "white",
                fontWeight: 700,
              }}
              size={25}
            >
              Hello Teacher
            </Text>
          </div>
          <div
            style={{
              marginTop: "10px",
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: 600,
              }}
              size={15}
            >
              Ayo masukkan soal untuk ujian
            </Text>
            <br />
            <Text
              style={{
                color: "white",
                fontWeight: 600,
              }}
              size={15}
            >
              para siswa
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBackdrop;
