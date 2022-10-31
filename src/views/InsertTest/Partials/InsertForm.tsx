import { DatePicker } from "antd";
import moment from "moment";
import React from "react";
import InputText from "../../../components/Input/InputText";
import Text from "../../../components/Typography/Text";
import DateInput from "./DateInput";

const InsertForm = () => {
  return (
    <form>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "45%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Text size={18} style={{ fontWeight: 500 }}>
              Nama Guru
            </Text>
            <InputText
              style={{
                width: "300px",
                height: "34px",
                borderRadius: "8px",
              }}
              placeholder="Masukkan nama guru"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Text size={18} style={{ fontWeight: 500 }}>
              Nama Mata Pelajaran
            </Text>
            <InputText
              style={{
                width: "300px",
                height: "34px",
                borderRadius: "8px",
              }}
              placeholder="Masukkan nama mata pelajaran"
            />
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
            }}
          >
            <Text size={18} style={{ fontWeight: 500 }}>
              Tingkat
            </Text>
            <InputText
              style={{
                width: "300px",
                height: "34px",
                borderRadius: "8px",
              }}
              placeholder="Tingkat"
            />
          </div>
        </div>
        <DateInput />
      </div>
    </form>
  );
};

export default InsertForm;
