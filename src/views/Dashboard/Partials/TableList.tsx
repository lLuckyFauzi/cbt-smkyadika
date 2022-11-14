import React, { ReactNode, useContext, useEffect, useState } from "react";
import { Popconfirm, Spin, Table } from "antd";
import Text from "../../../components/Typography/Text";
import BtnPrimary from "../../../components/Button/Primary/Primary";
import TableStyle from "./Style.module.scss";
import SelectCompo from "../../../components/Select/SelectCompo";
import { Select } from "antd";
import AddIcon from "../../../public/image/icons/Add.png";
import Image from "next/image";
import TrashIcon from "../../../public/image/icons/Trash.png";
import Link from "next/link";
import EmbedData from "../../../data/useEmbedLink";
import { EmbedLinkGet } from "../../../models/EmbedLinkModels";
import Moment from "moment";
import { PublicContext } from "../../../layout/core";

interface TableListProps {
  departement?: string;
}

function fileringData(departement: string | undefined) {
  const EmbedLink = EmbedData("embed-link");
  const material = EmbedLink.data?.filter((data) => {
    const departementFilter = data.jurusan.jurusan === departement;
    return departementFilter;
  });

  return material;
}

const TableData = (props: TableListProps) => {
  const { departement } = props;
  const { Option } = Select;
  const embedLinkData = fileringData(departement);
  const ctxPublic = useContext(PublicContext);

  useEffect(() => {
    ctxPublic.setTotalMaterial(embedLinkData?.length);
  }, [departement]);

  interface DataType {
    key: string;
    namaMapel: string;
    namaGuru: string;
    tingkat: string;
    jurusan: string;
    tanggal: string;
    action: ReactNode;
  }

  const columns = [
    {
      title: "Nama Mapel",
      dataIndex: "namaMapel",
    },
    {
      title: "Nama Guru",
      dataIndex: "namaGuru",
    },
    {
      title: "Tingkat",
      dataIndex: "tingkat",
    },
    {
      title: "Jurusan",
      dataIndex: "jurusan",
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

  const data: DataType[] | undefined = embedLinkData?.map(
    (el: EmbedLinkGet) => {
      return {
        key: el._id,
        namaMapel: el.mapel.namaMapel,
        namaGuru: el.guruMapel.nama,
        tingkat: el.tingkatan.tingkatan,
        jurusan: el.jurusan.jurusan,
        tanggal: Moment(el.createdAt).format("LL"),
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
      };
    }
  );

  return (
    <div className={TableStyle.tableContainer}>
      <div
        style={{
          marginBottom: "15px",
        }}
      >
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
        <Link href={"/insert"}>
          <BtnPrimary
            icon={<Image src={AddIcon} width={"20px"} height={"20px"} />}
            style={{
              padding: "8px 32px",
            }}
          >
            Tambah
          </BtnPrimary>
        </Link>
      </div>
      {/* <SelectCompo defaultValue="Jake" placeholder="Hello">
        <Option>Jake</Option>
      </SelectCompo> */}
      <Spin spinning={false} tip="Loading...">
        <Table
          className={TableStyle.table}
          style={{
            fontFamily: "Karla",
          }}
          columns={columns}
          dataSource={data}
          size="middle"
        />
      </Spin>
    </div>
  );
};

export default TableData;
