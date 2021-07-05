import { GetServerSideProps } from "next";
import { useState } from "react";
import { SignoutForm } from "../components/Sign/Signout";
import { HeaderWrapper } from "../components/Header/HeaderWrapper";
import buildAxiosServer from "../components/Axios-Fetcher/buildClient";
import { submitRequest } from "../components/Hooks/useRequest";
import { CurrentUserResponse } from "../components/Responses";

const AuthPage = ({ response }: { response: CurrentUserResponse }) => {
  const [currentUser, setCurrentUser] = useState(response.currentUser);
  return (
    <HeaderWrapper currentUser={currentUser}>
      <SignoutForm setCurrentUser={setCurrentUser} currentUser={currentUser} />
    </HeaderWrapper>
  );
};

export default AuthPage;

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
