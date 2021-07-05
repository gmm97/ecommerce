import axios, { AxiosInstance } from "axios";
import { GetServerSidePropsContext } from "next";

export const buildAxiosServer = (
  request: GetServerSidePropsContext["req"]
): AxiosInstance => {
  // if we execute the request on the server, we send the request to the cross-namespace url of ingress-nginx and pass through the
  // request headers, so that ingress-nginx knows where to forward the request to
  return axios.create({
    baseURL: "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
    headers: request.headers,
  });
};

export default buildAxiosServer;
