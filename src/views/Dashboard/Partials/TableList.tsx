import React from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import Text from "../../../components/Typography/Text";
import { Select } from "antd";
import BtnPrimary from "../../../components/Button/Primary/Primary";
import TableStyle from "./Style.module.scss";

const TableData = () => {
  const { Option } = Select;

  interface DataType {
    key: React.Key;
    nama: string;
    tingkat: number;
    namaGuru: string;
    tanggal: string;
    action: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Nama",
      dataIndex: "nama",
    },
    {
      title: "Tingkat",
      dataIndex: "tingkat",
    },
    {
      title: "Nama Guru",
      dataIndex: "namaGuru",
    },
    {
      title: "Tanggal Dibuat",
      dataIndex: "tanggal",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      nama: "John Brown",
      tingkat: 32,
      namaGuru: "New York No. 1 Lake Pa",
      tanggal: "22 October 2022",
      action: "Hapus",
    },
    {
      key: "2",
      nama: "Jim Green",
      tingkat: 42,
      namaGuru: "London No. 1 Lake Park",
      tanggal: "22 October 2022",
      action: "Hapus",
    },
    {
      key: "3",
      nama: "Joe Black",
      tingkat: 32,
      namaGuru: "Sidney No. 1 Lake Park",
      tanggal: "22 October 2022",
      action: "Hapus",
    },
  ];

  return (
    <div className={TableStyle.tableContainer}>
      <div>
        <Text
          size={25}
          style={{
            fontWeight: 700,
          }}
        >
          Mata Pelajaran
        </Text>
      </div>
      <div
        style={{
          position: "absolute",
          right: "40px",
          top: "-35px",
        }}
      >
        <BtnPrimary />
      </div>
      <div
        style={{
          display: "flex",
          marginBottom: "30px",
        }}
      >
        <Select defaultValue={"Jack"}>
          <Option value="jak">Jack</Option>
        </Select>
      </div>
      <Table
        className={TableStyle.table}
        style={{
          fontFamily: "Karla",
        }}
        columns={columns}
        dataSource={data}
        size="middle"
      />
    </div>
  );
};

export default TableData;
