import { useQuery } from "react-query";
import Axios, { AxiosError } from "axios";
import { LOCAL_API } from "../constant";

interface ModelMajor {
  _id: string;
  jurusan: string;
}

type useDataMajor = {
  data: ModelMajor[];
};

type TQueryFnData = useDataMajor;
type TError = AxiosError;

function useLevel(key: string) {
  const query = useQuery<TQueryFnData, TError>(key, async () => {
    const axios = await Axios.get(`${LOCAL_API}jurusan`, {
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
