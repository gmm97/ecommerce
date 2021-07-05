import React from "react";
import { GetServerSideProps } from "next";
import { HeaderWrapper } from "../components/Header/HeaderWrapper";
import buildAxiosServer from "../components/Axios-Fetcher/buildClient";
import { submitRequest } from "../components/Hooks/useRequest";
import { CurrentUserResponse } from "../components/Responses";

export default function Home({ response }: { response: CurrentUserResponse }) {
  const { currentUser } = response;
  return (
    <HeaderWrapper currentUser={currentUser}>
      <div>Welcome to the Home Page!</div>
    </HeaderWrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const request = context.req;
  const instance = buildAxiosServer(request);
  const { doRequest } = submitRequest({
    url: "/api/users/currentuser",
    method: "get",
    instance: instance,
  });
  const response: CurrentUserResponse = await doRequest();
  return {
    props: { response },
  };
};
