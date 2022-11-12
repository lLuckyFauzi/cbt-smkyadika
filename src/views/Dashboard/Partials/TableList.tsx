import React, { ReactNode, useEffect, useState } from "react";
import { Popconfirm, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import Text from "../../../components/Typography/Text";
import BtnPrimary from "../../../components/Button/Primary/Primary";
import TableStyle from "./Style.module.scss";
import SelectCompo from "../../../components/Select/SelectCompo";
import { Select } from "antd";
import AddIcon from "../../../public/image/icons/Add.png";
import Image from "next/image";
import TrashIcon from "../../../public/image/icons/Trash.png";

const TableData = () => {
  const { Option } = Select;

  interface DataType {
    key: React.Key;
    namaMapel: string;
    tingkat: number;
    namaGuru: string;
    tanggal: string;
    action: ReactNode;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Nama Mapel",
      dataIndex: "namaMapel",
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
      title: "Tanggal Pelaksanaan",
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
      namaMapel: "PKN",
      tingkat: 12,
      namaGuru: "Bu Desty",
      tanggal: "22 October 2022",
      action: (
        <Popconfirm
          placement="topLeft"
          title="Are you sure?"
          onConfirm={() => {}}
          onCancel={() => {}}
        >
          <Image
            style={{ cursor: "pointer" }}
            src={TrashIcon}
            width={"26px"}
            height={"26px"}
          />
        </Popconfirm>
      ),
    },
    {
      key: "2",
      namaMapel: "Bahasa Inggris",
      tingkat: 12,
      namaGuru: "Ms Fitri",
      tanggal: "22 October 2022",
      action: (
        <Popconfirm
          placement="topLeft"
          title="Are you sure?"
          onConfirm={() => {}}
          onCancel={() => {}}
        >
          <Image
            style={{ cursor: "pointer" }}
            src={TrashIcon}
            width={"26px"}
            height={"26px"}
          />
        </Popconfirm>
      ),
    },
    {
      key: "3",
      namaMapel: "Basis Data",
      tingkat: 11,
      namaGuru: "Pak Yoga",
      tanggal: "22 October 2022",
      action: (
        <Popconfirm
          placement="topLeft"
          title="Are you sure?"
          onConfirm={() => {}}
          onCancel={() => {}}
        >
          <Image
            style={{ cursor: "pointer" }}
            src={TrashIcon}
            width={"26px"}
            height={"26px"}
          />
        </Popconfirm>
      ),
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
          top: "20px",
        }}
      >
        <BtnPrimary
          href="/insert"
          icon={<Image src={AddIcon} width={"20px"} height={"20px"} />}
          style={{
            padding: "8px 32px",
          }}
        >
          Tambah
        </BtnPrimary>
      </div>
      <SelectCompo>
        <Option>Jake</Option>
      </SelectCompo>
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
