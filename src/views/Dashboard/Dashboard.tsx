import React from "react";
import Text from "../../components/Typography/Text";
import Departement from "./Partials/Departement";

const Dashboard = () => {
  return (
    <div>
      <Text
        size={25}
        style={{ height: "25px", fontWeight: 800, display: "block" }}
      >
        Jurusan
      </Text>
      <Text
        size={15}
        style={{ fontWeight: 300, color: "#616161", display: "block" }}
      >
        Pilih jurusan agar dapat menambahkan Mata Pelajaran untuk ulangan
      </Text>

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
    </div>
  );
};

export default Dashboard;
