import React from "react";
import Departement from "./Partials/Departement";
import Title from "./Partials/Title";
import TableData from "./Partials/TableList";

const Dashboard = () => {
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
          <Departement />
          <Departement />
          <Departement />
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
      <TableData />
    </div>
  );
};

export default Dashboard;
