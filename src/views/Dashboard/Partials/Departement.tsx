import React, { ReactNode, useContext } from "react";
import { PublicContext } from "../../../layout/core";
import DepartStyle from "./Style.module.scss";

interface ImageProps {
  active?: boolean;
  image?: ReactNode;
  onClick?: () => void;
  title: string;
  departement?: string;
  total?: number | undefined;
}

const Departement = (props: ImageProps) => {
  const { image, onClick, title, departement, total } = props;
  const ctxPublic = useContext(PublicContext);

  return (
    <div
      onClick={onClick}
      className={
        departement === title ? DepartStyle.boxActive : DepartStyle.box
      }
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
          departement === title
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
          {departement === title && total + " Mata Pelajaran"}
        </p>
      </div>
    </div>
  );
};

export default Departement;
