import axios, { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  SignoutWrapper,
  FormHeader,
  SubmitButtonComponent,
  FormDetailsComponent,
  ImageComponent,
  FormParagraph,
  FormDisclaimer,
} from "./SignoutStyles";

import authImage from "../../public/images/authImage.jpg";
import { UserPayload } from "../Responses";

interface AuthFormProps {
  setCurrentUser: (payload: UserPayload | null) => void;
  currentUser: UserPayload | null;
}

export const SignoutForm = (props: AuthFormProps) => {
  const router = useRouter();
  const signoutUser = async () => {
    const axiosURL = `/api/users/signout`;
    try {
      const response: AxiosResponse<{}> = await axios.post(axiosURL, {});
      props.setCurrentUser(null);
      router.push("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <SignoutWrapper>
      <ImageComponent>
        <Image src={authImage} layout="fill" objectFit="cover" />
      </ImageComponent>
      <FormDetailsComponent>
        <FormHeader>Sign Out</FormHeader>
        <FormParagraph>
          Are you sure you want to sign out of your account?
        </FormParagraph>
        <FormDisclaimer>
          All unsaved information will be lost once you sign out.
        </FormDisclaimer>
        <SubmitButtonComponent onClick={signoutUser}>
          Sign Out
        </SubmitButtonComponent>
      </FormDetailsComponent>
    </SignoutWrapper>
  );
};
