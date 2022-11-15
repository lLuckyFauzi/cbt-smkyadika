import { Form, Formik } from "formik";
import React, { useContext } from "react";
import InputText from "../../../components/Input/InputText";
import Text from "../../../components/Typography/Text";
import DateInput from "./DateInput";
import Material from "../../../data/useMaterial";
import Level from "../../../data/useLevel";
import Major from "../../../data/useMajor";
import { useMutation } from "react-query";
import { notification } from "antd";
import BtnPrimary from "../../../components/Button/Primary/Primary";
import Axios, { AxiosError } from "axios";
import { EmbedLinkPost } from "../../../models/EmbedLinkModels";
import { LOCAL_API } from "../../../constant";
import { useRouter } from "next/router";
import { PublicContext } from "../../../layout/core";
import Image from "next/image";
import DoneIcon from "../../../public/image/icons/Done.png";

interface Error {
  message: string;
}

const InsertForm = () => {
  const ctxPublic = useContext(PublicContext);
  const router = useRouter();

  const dataMaterial = Material("material");
  const dataLevel = Level("level");
  const dataMajor = Major("major");

  const InsertSubmit = async (data: EmbedLinkPost) => {
    const mutateLogin = await Axios.post(
      `${LOCAL_API}embed/link`,
      {
        mapel: data.mapel,
        embedLink: data.embedLink,
        guruMapel: data.guruMapel,
        tingkatan: data.tingkatan,
        jurusan: data.jurusan,
      },
      {
        headers: {
          tokenpublic: ctxPublic.isToken,
        },
      }
    );

    return mutateLogin;
  };

  const insertMutation = useMutation(InsertSubmit, {
    onSuccess: () => {
      router.replace("/dashboard");
      notification.success({
        message: "Berhasil menambahkan soal!",
      });
    },
    onError: (error: AxiosError<Error>) => {
      notification.error({
        message: error.response?.data.message,
      });
    },
  });

  return (
    <>
      <Formik
        initialValues={{
          namaMapel: "6371ec23aa89e1ee5861f78a",
          level: "6371e6573df93b7858dc8711",
          major: "6371e6733df93b7858dc8716",
          embed: "",
        }}
        onSubmit={(values) => {
          insertMutation.mutate({
            mapel: values.namaMapel,
            embedLink: values.embed,
            guruMapel: ctxPublic.idUser,
            jurusan: values.major,
            tingkatan: values.level,
          });
        }}
      >
        {(formik) => {
          const { values, handleChange } = formik;
          return (
            <Form>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text size={25} bold>
                  Tambah Mata Pelajaran
                </Text>
                <BtnPrimary
                  type="submit"
                  style={{
                    padding: "8px 39px 8px 39px",
                  }}
                  icon={<Image src={DoneIcon} width={"20px"} height={"20px"} />}
                >
                  <Text
                    size={20}
                    color="white"
                    style={{
                      fontWeight: 500,
                    }}
                  >
                    Selesai
                  </Text>
                </BtnPrimary>
              </div>
              <hr style={{ width: "100%", border: "1px solid gray" }} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    width: "55%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text size={18} style={{ fontWeight: 500 }}>
                      Nama Mata Pelajaran
                    </Text>
                    <select
                      id="namaMapel"
                      name="namaMapel"
                      value={values.namaMapel}
                      onChange={handleChange}
                      defaultValue={"PWPB"}
                      style={{
                        backgroundColor: "white",
                        height: "35px",
                        width: "298px",
                        borderRadius: "8px",
                        border: "1px solid #b8afaf71",
                        outlineStyle: "none",
                      }}
                    >
                      {dataMaterial.data?.data.map((el) => {
                        return (
                          <option id="namaMapel" key={el._id} value={el._id}>
                            {el.namaMapel}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text size={18} style={{ fontWeight: 500 }}>
                      URL Mapel
                    </Text>
                    <InputText
                      name="embed"
                      type="text"
                      style={{
                        width: "298px",
                        height: "34px",
                        borderRadius: "8px",
                      }}
                      placeholder="Masukkan url mapel"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text size={18} style={{ fontWeight: 500 }}>
                      Tingkat
                    </Text>
                    <select
                      id="level"
                      name="level"
                      value={values.level}
                      onChange={handleChange}
                      defaultValue="xii"
                      style={{
                        backgroundColor: "white",
                        height: "35px",
                        width: "298px",
                        borderRadius: "8px",
                        border: "1px solid #b8afaf71",
                        outlineStyle: "none",
                      }}
                    >
                      {dataLevel.data?.data.map((el) => {
                        return (
                          <option key={el._id} value={el._id}>
                            {el.tingkatan}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text size={18} style={{ fontWeight: 500 }}>
                      Jurusan
                    </Text>
                    <select
                      id="major"
                      name="major"
                      value={values.major}
                      onChange={handleChange}
                      defaultValue="Rekayasa Perangkat Lunak"
                      style={{
                        backgroundColor: "white",
                        height: "35px",
                        width: "298px",
                        borderRadius: "8px",
                        border: "1px solid #b8afaf71",
                        outlineStyle: "none",
                      }}
                    >
                      {dataMajor.data?.data.map((el) => {
                        return (
                          <option key={el._id} value={el._id}>
                            {el.jurusan}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <DateInput />
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default InsertForm;
