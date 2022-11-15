import { Button } from "antd";
import type { NextPage } from "next";
import { useState } from "react";
import Text from "../../components/Typography/Text";

const Home: NextPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Text
          size={55}
          color="main"
          bold
          style={{ padding: "5px", borderRadius: "8px" }}
        >
          Kokys
        </Text>
        <br />
        <Text
          size={20}
          style={{
            padding: "5px",
            backgroundColor: "white",
            borderRadius: "8px",
          }}
        >
          Happy coding with Kokys Template!
        </Text>
        <br />
        <div style={{ marginTop: "20px" }}>
          <Text size={35} color="main">
            {count}
          </Text>
        </div>
        <br />
        <Button
          type="primary"
          style={{
            marginTop: "20px",
            borderRadius: "5px",
          }}
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default Home;
