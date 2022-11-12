import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import LayoutDefault from "../layout/core";
import Head from "next/head";
import "../global.scss";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function MyApp(props: AppProps) {
  const layout = LayoutDefault(props);
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>Kookys</title>
        </Head>
        {layout}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
