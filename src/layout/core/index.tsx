import { Layout } from "antd";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import Header from "../container/Header/Header";
import Sider from "../container/Sider/Sider";
import JWT from "jwt-decode";

interface GlobalContext {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
}
export const PublicContext = React.createContext<GlobalContext>({
  isLogin: false,
  setIsLogin: (_value: boolean) => {},
});

function ErrorCheck() {
  const publicCtx = useContext(PublicContext);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("tokenpublic");
    if (publicCtx.isLogin === true) {
      router.replace("/");
    }
    if (!token) {
      router.push("/login");
    }
  }, [publicCtx.isLogin]);

  return null;
}

const LayoutDefault = (props: AppProps) => {
  const { Component, pageProps } = props;
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();
  return (
    <PublicContext.Provider value={{ isLogin, setIsLogin }}>
      <ErrorCheck />
      <Layout
        style={{
          backgroundColor: "white",
        }}
      >
        {router.pathname === "/login" ? (
          <Component {...pageProps} />
        ) : (
          <>
            <Sider />
            <Header>
              <Component {...pageProps} />
            </Header>
          </>
        )}
      </Layout>
    </PublicContext.Provider>
  );
};

export default LayoutDefault;
