import Axios from "axios";
import { LOCAL_API } from "../constant";

interface LoginType {
  username?: string;
  password?: string;
}

export default async function useSubmitLogin(data: LoginType) {
  const mutateLogin = await Axios.post(`${LOCAL_API}guru/login`, {
    username: data.username,
    password: data.password,
  });

  return mutateLogin;
}
