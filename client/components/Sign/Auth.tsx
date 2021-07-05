import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { ResponseComponent } from "./ResponseComponent";
import {
  FormWrapper,
  FormHeader,
  SubComponent,
  StyledLabel,
  StyledInput,
  SubmitButtonComponent,
  SwapSignInSignUp,
  FormDetailsComponent,
  ImageComponent,
} from "./AuthStyles";

import authImage from "../../public/images/authImage.jpg";
import axios, { AxiosResponse } from "axios";
import { UserPayload } from "../Responses";

interface AxiosData {
  email: string;
  password: string;
  confirmPassword?: string;
}

interface AuthFormProps {
  setCurrentUser: (payload: UserPayload | null) => void;
  currentUser: UserPayload | null;
}

export interface NotificationItem {
  message: string;
  status: "Pending" | "Error" | "Success";
  title: string;
}

export const AuthForm = (props: AuthFormProps) => {
  const [currentMode, setCurrentMode] = useState<"signin" | "signup">("signin");
  const [focusedInput, setFocusedInput] = useState("");
  const [requestStatus, setRequestStatus] = useState<
    "Progress" | "Completed" | "Error" | null
  >(null);
  const [errors, setErrors] = useState<string | null>(null);
  const router = useRouter();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const swapSignUpSignIn = () => {
    if (currentMode === "signin") {
      setCurrentMode("signup");
    } else {
      setCurrentMode("signin");
    }
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setRequestStatus("Progress");
    const email: string = emailRef.current.value;
    const password: string = passwordRef.current.value;
    if (currentMode === "signup") {
      const confirmPassword: string = confirmPasswordRef.current.value;
      if (confirmPassword != password) {
        setErrors("Please ensure your passwords match before submitting!");
        setRequestStatus("Error");
        return;
      }
    }

    const data: AxiosData = {
      email: email,
      password: password,
    };
    await sendRequest(currentMode, data);
  };

  const sendRequest = async (currentMode: string, data: AxiosData) => {
    const axiosURL = `/api/users/${currentMode}`;
    try {
      var response: AxiosResponse<UserPayload> = await axios.post(
        axiosURL,
        data
      );
      props.setCurrentUser(response.data);
      setRequestStatus("Completed");
    } catch (err) {
      setErrors(err.response.data.errors[0].message);
      setRequestStatus("Error");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setRequestStatus(null);
      setErrors(null);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [requestStatus]);

  let notification: NotificationItem;

  if (requestStatus === "Completed") {
    notification = {
      status: "Success",
      title: "Sent Request",
      message: "Your message has been sent!",
    };
  }

  if (requestStatus === "Progress") {
    notification = {
      status: "Pending",
      title: "Sending Request",
      message: "Your request is being sent...!",
    };
  }

  if (requestStatus === "Error") {
    notification = {
      status: "Error",
      title: "Error",
      message: errors,
    };
  }

  return (
    <React.Fragment>
      <FormWrapper name="sign-form" onSubmit={(e) => submitForm(e)}>
        <ImageComponent>
          <Image src={authImage} layout="fill" objectFit="cover" />
        </ImageComponent>
        <FormDetailsComponent>
          <FormHeader>
            {currentMode === "signin" && "Sign In"}
            {currentMode === "signup" && "Sign Up"}
          </FormHeader>
          <SubComponent signin={currentMode === "signin"}>
            <StyledLabel focusedInput={focusedInput === "Email"}>
              Email
            </StyledLabel>
            <StyledInput
              id="Email"
              name="Email"
              type="text"
              ref={emailRef}
              onFocus={(e) => setFocusedInput(e.target.name)}
            />
          </SubComponent>
          <SubComponent signin={currentMode === "signin"}>
            <StyledLabel focusedInput={focusedInput === "Password"}>
              Password
            </StyledLabel>
            <StyledInput
              id="Password"
              name="Password"
              type="password"
              ref={passwordRef}
              onFocus={(e) => setFocusedInput(e.target.name)}
            />
          </SubComponent>
          {currentMode === "signup" && (
            <SubComponent>
              <StyledLabel focusedInput={focusedInput === "ConfirmPassword"}>
                Confirm Password
              </StyledLabel>
              <StyledInput
                id="ConfirmPassword"
                name="ConfirmPassword"
                type="password"
                ref={confirmPasswordRef}
                onFocus={(e) => setFocusedInput(e.target.name)}
              />
            </SubComponent>
          )}
          <SubmitButtonComponent name="submit" id="submit">
            {currentMode === "signin" && "Sign In"}
            {currentMode === "signup" && "Sign Up"}
          </SubmitButtonComponent>
          <SwapSignInSignUp onClick={() => swapSignUpSignIn()}>
            {currentMode === "signin" &&
              "Don't Have an Account yet? Click here to sign up!"}
            {currentMode === "signup" &&
              "Click here to sign into your account!"}
          </SwapSignInSignUp>
        </FormDetailsComponent>
      </FormWrapper>
      {notification && (
        <ResponseComponent
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </React.Fragment>
  );
};
