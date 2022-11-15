import { useQuery } from "react-query";
import Axios, { AxiosError } from "axios";
import { LOCAL_API } from "../constant";
import { EmbedLinkGet } from "../models/EmbedLinkModels";

type useEmbed = {
  data: EmbedLinkGet[];
};

type TQueryFnData = useEmbed;
type TError = AxiosError;

function useEmbedLink(key: string) {
  const query = useQuery<TQueryFnData, TError>(
    key,
    async () => {
      const axios = await Axios.get(`${LOCAL_API}embed/link`, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        return res.data;
      });

      return axios;
    },
    {
      staleTime: 3000,
    }
  );

  return {
    ...query,
    data: query?.data?.data,
  };
}

export default useEmbedLink;
