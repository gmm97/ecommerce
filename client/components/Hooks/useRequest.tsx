import { AxiosInstance } from "axios";
import buildClient from "../Axios-Fetcher/buildClient";

interface useRequestProps {
  url: string;
  method: "post" | "get";
  data?: any;
  instance: AxiosInstance;
}

export const submitRequest = (props: useRequestProps) => {
  const { url, method, data, instance } = props;

  const doRequest = async () => {
    try {
      const response = await instance[method](url, data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
  return { doRequest };
};
