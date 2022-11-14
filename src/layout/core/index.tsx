import { Layout } from "antd";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { User } from "../../models/UserModel";
import Header from "../container/Header/Header";
import Sider from "../container/Sider/Sider";
import JWT from "jwt-decode";

interface GlobalContext {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  isToken: string;
  setIsToken: (value: string) => void;
  totalMaterial: number | undefined;
  setTotalMaterial: (value: number | undefined) => void;
  userData: User | undefined;
  setUserData: (value: User | undefined) => void;
  idUser: unknown;
  setIdUser: (value: string) => void;
}

export const PublicContext = React.createContext<GlobalContext>({
  isLogin: false,
  setIsLogin: (_value: boolean) => {},
  setIsLoading: (_value: boolean) => {},
  isLoading: false,
  isToken: "",
  setIsToken: (_value: string) => {},
  totalMaterial: 0,
  setTotalMaterial: (_value: number | undefined) => {},
  userData: { id: "", username: "", nama: "" },
  setUserData: (_value: User | undefined) => {},
  idUser: "",
  setIdUser: (_value: string) => {},
});

function ErrorCheck() {
  const publicCtx = useContext(PublicContext);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("tokenpublic");
    if (publicCtx.isLogin === true) {
      router.replace("/dashboard");
    }
    if (!token) {
      router.push("/login");
    }
  }, [publicCtx.isLogin]);

  return null;
}

function CheckToken() {
  const publicCtx = useContext(PublicContext);
  useEffect(() => {
    const token = localStorage.getItem("tokenpublic");
    if (token) {
      publicCtx.setIsToken(token);
    }
    if (publicCtx.isToken === "" || undefined) {
      return;
    } else {
      const decode: User = JWT(publicCtx.isToken);
      publicCtx.setUserData(decode);
      publicCtx.setIdUser(decode.id);
    }
  }, [publicCtx.isToken]);

  return null;
}

const LayoutDefault = (props: AppProps) => {
  const { Component, pageProps } = props;
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isToken, setIsToken] = useState<string>("");
  const [idUser, setIdUser] = useState<unknown>();
  const [userData, setUserData] = useState<User>();
  const [totalMaterial, setTotalMaterial] = useState<number | undefined>(0);

  const router = useRouter();
  return (
    <PublicContext.Provider
      value={{
        isLogin,
        setIsLogin,
        setIsLoading,
        isLoading,
        isToken,
        setIsToken,
        totalMaterial,
        setTotalMaterial,
        userData,
        setUserData,
        idUser,
        setIdUser,
      }}
    >
      <ErrorCheck />
      <CheckToken />
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
