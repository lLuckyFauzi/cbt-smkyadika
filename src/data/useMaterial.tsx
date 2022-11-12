import { useQuery } from "react-query";
import Axios from "axios";
import { LOCAL_API } from "../constant";

function useMaterial(key: string) {
  const query = useQuery(key, async () => {
    const axios = await Axios.get(`${LOCAL_API}mapel`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return res.data;
    });

    return axios;
  });

  return {
    ...query,
    data: query?.data,
  };
}

export default useMaterial;
