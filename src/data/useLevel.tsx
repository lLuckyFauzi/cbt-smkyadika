import { useQuery } from "react-query";
import Axios, { AxiosError } from "axios";
import { LOCAL_API } from "../constant";

interface ModelLevel {
  _id: string;
  tingkatan: string;
}

type useDataLevel = {
  data: ModelLevel[];
};

type TQueryFnData = useDataLevel;
type TError = AxiosError;

function useLevel(key: string) {
  const query = useQuery<TQueryFnData, TError>(key, async () => {
    const axios = await Axios.get(`${LOCAL_API}tingkatan`, {
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

export default useLevel;
