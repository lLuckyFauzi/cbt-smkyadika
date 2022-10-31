import React, { ReactNode, useState } from "react";
import DepartStyle from "./Style.module.scss";

interface ImageProps {
  active?: boolean;
  image?: ReactNode;
  onClick?: () => void;
  title: string;
}

const Departement = (props: ImageProps) => {
  const { image, onClick, title } = props;

  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onClick={() => {
        if (isActive == true) {
          setIsActive(false);
        } else {
          setIsActive(true);
        }
      }}
      className={isActive === true ? DepartStyle.boxActive : DepartStyle.box}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div
          style={{
            width: "74px",
            height: "74px",
          }}
        >
          {image}
        </div>
      </div>
      <div
        className={
          isActive === true
            ? DepartStyle.titleContainerActive
            : DepartStyle.titleContainer
        }
      >
        <p
          style={{
            lineHeight: "15px",
            display: "block",
            fontWeight: 700,
            fontSize: "14px",
          }}
        >
          {title || "Title"}
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
