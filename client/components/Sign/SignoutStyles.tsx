import styled from "styled-components";

export const SignoutWrapper = styled.div`
  box-shadow: 0 0 0.5rem #222;
  width: 900px;
  height: 500px;
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #dbdbdb;
`;
export const FormHeader = styled.p`
  margin: 0 0 3rem 0;
  width: 100%;
  padding: 10px;
  text-align: center;
  font-size: 3rem;
  color: darken(#e5e5e5, 50%);
  border-bottom: solid 1px #e5e5e5;
`;

export const SubmitButtonComponent = styled.button`
  text-align: center;
  width: 50%;
  padding: 1rem 1rem;
  background-color: #ddaf94;
  border-radius: 2rem;
  font-size: 1.5rem;
  color: #000;
  margin: 10rem 0;
  border: 1px solid black;
  opacity: 0.7;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const SwapSignInSignUp = styled.p`
  cursor: pointer;
  margin-top: 2rem;
`;

export const FormDetailsComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 500px;
  text-align: center;
`;

export const ImageComponent = styled.div`
  width: 300px;
  height: 500px;
  position: relative;
`;

export const FormParagraph = styled.p`
  margin: 2rem;
  font-size: 3rem;
  color: #000;
  opacity: 0.8;
`;

export const FormDisclaimer = styled.p`
  margin: 3rem 0;
  font-size: 2rem;
  color: #f08080;
`;
