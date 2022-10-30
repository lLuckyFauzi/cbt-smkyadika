import Image from "next/image";
import React from "react";
import DepartStyle from "./Style.module.scss";
import CodeTyping from "../../../public/image/CodeTyping.png";

const Departement = () => {
  return (
    <div className={DepartStyle.box}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Image src={CodeTyping} width={"74px"} height={"74px"} />
      </div>
      <div className={DepartStyle.titleContainer}>
        <p
          style={{
            lineHeight: "15px",
            display: "block",
            fontWeight: 700,
            fontSize: "14px",
          }}
        >
          Rekayasa Perangkat Lunak
        </p>
        <p
          style={{
            lineHeight: "0px",
            display: "block",
            fontWeight: 400,
            fontSize: "10px",
          }}
        >
          3 Mata Pelajaran
        </p>
      </div>
    </div>
  );
};

export default Departement;
