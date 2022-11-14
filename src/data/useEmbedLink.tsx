import Axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import { LOCAL_API } from "../constant";
import { EmbedLink } from "../models/EmbedLinkModels";

type useEmbed = {
  data: EmbedLink[];
};

type TQueryFnData = useEmbed;
type TError = AxiosError;

function useEmbedLink(key: string) {
  const query = useQuery<TQueryFnData, TError>(key, async () => {
    const axios = await Axios.get(`${LOCAL_API}embed/link`, {
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
    data: query?.data?.data,
  };
}

export default useEmbedLink;
