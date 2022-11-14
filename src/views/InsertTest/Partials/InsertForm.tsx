import { Form, Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import InputText from "../../../components/Input/InputText";
import Text from "../../../components/Typography/Text";
import DateInput from "./DateInput";
import Material from "../../../data/useMaterial";
import Level from "../../../data/useLevel";
import Major from "../../../data/useMajor";
import { useMutation } from "react-query";
import JWT from "jwt-decode";
import { PublicContext } from "../../../layout/core";
import { Button, notification } from "antd";
import BtnPrimary from "../../../components/Button/Primary/Primary";
import Axios from "axios";
import { EmbedLink } from "../../../models/EmbedLinkModels";
import { LOCAL_API } from "../../../constant";
import { useRouter } from "next/router";

interface User {
  id: string;
  nama: string;
  username: string;
}

interface EmbedLinkTypes {
  mapel: string;
  embedLink: string;
  guruMapel: unknown;
  tingkatan: string;
  jurusan: string;
}

const InsertForm = () => {
  const [isToken, setIsToken] = useState<string>("");
  const [idUser, setIdUser] = useState<unknown>();
  const router = useRouter();

  const dataMaterial = Material("material");
  const dataLevel = Level("level");
  const dataMajor = Major("major");
  const ctxPublic = useContext(PublicContext);

  useEffect(() => {
    const token = localStorage.getItem("tokenpublic");
    if (token) {
      ctxPublic.setIsToken(token);
    }
    if (ctxPublic.isToken === "" || undefined) {
      return;
    } else {
      const decode: User = JWT(ctxPublic.isToken);
      setIdUser(decode.id);
    }
  }, [ctxPublic.isToken]);

  const InsertSubmit = async (data: EmbedLinkTypes) => {
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
    ).catch((err) => {
      console.log(err);
    });

    return await mutateLogin;
  };

  const insertMutation = useMutation(InsertSubmit, {
    onSuccess: () => {
      router.replace("/dashboard");
      notification.success({
        message: "Menambahkan soal berhasil!",
      });
    },
  });

  return (
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
          guruMapel: idUser,
          jurusan: values.major,
          tingkatan: values.level,
        });
      }}
    >
      {(formik) => {
        const { values, handleChange } = formik;
        return (
          <Form>
            <BtnPrimary type="submit">Submit</BtnPrimary>
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
                      height: "30px",
                      width: "50%",
                      borderRadius: "10px",
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
                      width: "300px",
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
                      height: "30px",
                      width: "50%",
                      borderRadius: "10px",
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
                      height: "30px",
                      width: "50%",
                      borderRadius: "10px",
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
  );
};

export default InsertForm;
