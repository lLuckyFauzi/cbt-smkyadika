import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { notification, Popconfirm, Spin, Table } from "antd";
import Text from "../../../components/Typography/Text";
import BtnPrimary from "../../../components/Button/Primary/Primary";
import TableStyle from "./Style.module.scss";
import AddIcon from "../../../public/image/icons/Add.png";
import Image from "next/image";
import TrashIcon from "../../../public/image/icons/Trash.png";
import Link from "next/link";
import EmbedData from "../../../data/useEmbedLink";
import { EmbedLinkGet } from "../../../models/EmbedLinkModels";
import Moment from "moment";
import { PublicContext } from "../../../layout/core";
import UseDeleteTable from "../../../mutations/useDeleteTable";
import { useMutation, useQueryClient } from "react-query";

interface TableListProps {
  departement?: string;
  setTotal: React.Dispatch<React.SetStateAction<number | undefined>>;
}

interface DataType {
  key: string;
  namaMapel: string;
  namaGuru: string;
  tingkat: string;
  jurusan: string;
  tanggal: string;
  action: ReactNode;
}

const TableData = (props: TableListProps) => {
  const { departement, setTotal } = props;
  const queryClient = useQueryClient();
  const EmbedLink = EmbedData("embed");
  const ctxPublic = useContext(PublicContext);

  function fileringData(departement: string | undefined) {
    const material = EmbedLink.data?.filter((data) => {
      const departementFilter = data?.jurusan?.jurusan === departement;
      return departementFilter;
    });
    return material;
  }

  const embedLinkData = fileringData(departement);

  useEffect(() => {
    setTotal(embedLinkData?.length);
  }, [embedLinkData]);

  const deleteTableMutation = useMutation(UseDeleteTable, {
    onSuccess: async (data) => {
      notification.success({
        message: "Embed deleted",
      });
    },
    onSettled: async (data) => {
      if (data) {
        await queryClient.invalidateQueries("embed");
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });

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
            onConfirm={() => {
              deleteTableMutation.mutate({
                _id: el._id,
                token: ctxPublic?.isToken,
              });
            }}
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
      <Spin spinning={ctxPublic.isLoading} tip="Loading...">
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
