import Axios from "axios";
import { LOCAL_API } from "../constant";

interface Delete {
  _id: string;
  token: string;
}

export default async function useDeleteTable(data: Delete) {
  const axios = await Axios.delete(`${LOCAL_API}embed/link/${data._id}`, {
    headers: {
      tokenpublic: data.token,
    },
  });

  return axios;
}
