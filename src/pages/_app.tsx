import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import LayoutDefault from "../layout/core";
import Head from "next/head";
import "../global.scss";

function MyApp(props: AppProps) {
  const layout = LayoutDefault(props);
  return (
    <>
      <Head>
        <title>Kykys</title>
      </Head>
      {layout}
    </>
  );
}

export default MyApp;
