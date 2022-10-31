import { DatePicker } from "antd";
import moment from "moment";
import React from "react";
import Text from "../../../components/Typography/Text";

const DateInput = () => {
  return (
    <div>
      <div
        style={{
          marginTop: "15px",
          border: "1px solid #B8AFAF",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            borderBottom: "1px solid #B8AFAF",
            display: "flex",
            justifyContent: "center",
            padding: "10px 25px 10px 25px",
          }}
        >
          <Text
            style={{
              display: "flex",
              lineHeight: "20px",
              fontWeight: 500,
            }}
            size={18}
          >
            Tanggal Pelaksanaan
          </Text>
        </div>
        <DatePicker
          style={{
            width: "175px",
            margin: "10px 25px 10px 25px",
            borderRadius: "8px",
          }}
          format="YYYY-MM-DD HH:mm:ss"
          placeholder="Pilih tanggal"
          showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
        />
      </div>
    </div>
  );
};

export default DateInput;
