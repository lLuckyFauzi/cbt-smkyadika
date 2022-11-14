import Axios from "axios";
import { useContext } from "react";
import { LOCAL_API } from "../constant";
import { PublicContext } from "../layout/core";

interface EmbedType {
  embedLink: string;
  guruMapel: unknown;
  tingkatan: string;
  jurusan: string;
}

export default async function useSubmitLogin(data: EmbedType) {
  const ctxPublic = useContext(PublicContext);
  const mutateLogin = await Axios.post(
    `${LOCAL_API}embed/link`,
    {
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
}
