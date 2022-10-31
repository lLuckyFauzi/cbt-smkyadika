import React from "react";
import Text from "../../../components/Typography/Text";

const Title = () => {
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
    </div>
  );
};

export default Title;
