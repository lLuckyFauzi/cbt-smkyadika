import { Layout } from "antd";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import React from "react";
import Header from "../container/Header/Header";
import Sider from "../container/Sider/Sider";

const LayoutDefault = (props: AppProps) => {
  const { Component, pageProps } = props;
  const router = useRouter();

  if (router.pathname !== "/login") {
    return (
      <Layout
        style={{
          backgroundColor: "white",
        }}
      >
        <Sider />
        <Header>
          <Component {...pageProps} />
        </Header>
      </Layout>
    );
  } else {
    return (
      <Layout
        style={{
          backgroundColor: "white",
        }}
      >
        <Component {...pageProps} />
      </Layout>
    );
  }
};

export default LayoutDefault;
