import Axios from "axios";
import { LOCAL_API } from "../constant";

interface LoginType {
  email?: string;
  password?: string;
}

export default async function useSubmitLogin(data: LoginType) {
  const mutateLogin = await Axios.post(`${LOCAL_API}guru/login`, {
    username: data.email,
    password: data.password,
  }).catch((err) => {
    console.log(err);
  });

  return await mutateLogin;
}
