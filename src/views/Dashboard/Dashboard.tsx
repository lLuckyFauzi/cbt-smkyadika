import React, { useContext, useState } from "react";
import Departement from "./Partials/Departement";
import Title from "./Partials/Title";
import TableList from "./Partials/TableList";
import Image from "next/image";
import DepartementStatic from "../../static/data";
import { PublicContext } from "../../layout/core";

const Dashboard = () => {
  const [departement, setDepartement] = useState("");
  const ctxPublic = useContext(PublicContext);
  console.log(ctxPublic.userData);

  return (
    <div
      style={{
        minWidth: "70vw",
        height: "100vh",
      }}
    >
      <Title />
      <div>
        <div
          style={{
            display: "flex",
            gap: "28px",
          }}
        >
          {DepartementStatic.map((el) => {
            return (
              <Departement
                departement={departement}
                onClick={() => {
                  setDepartement(el.nama_jurusan);
                }}
                key={el.id}
                image={
                  <Image width={"100%"} height={"100%"} src={el.img_url} />
                }
                title={el.nama_jurusan}
              />
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "35px",
          }}
        >
          <hr
            style={{
              marginTop: "15px",
              backgroundColor: "#B8AFAF",
              borderColor: "#B8AFAF",
              width: "96%",
              borderRadius: "12px",
            }}
          />
        </div>
      </div>
      <TableList departement={departement} />
    </div>
  );
};

export default Dashboard;
