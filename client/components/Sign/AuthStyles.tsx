import styled from "styled-components";

interface StyledLabel {
  focusedInput: boolean;
}

interface SubComponent {
  signin?: boolean;
}

export const FormWrapper = styled.form`
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

export const SubComponent = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: ${(props: SubComponent) => (props.signin ? "5rem 0" : "3rem 0")};
`;

export const StyledLabel = styled.div`
  position: absolute;
  bottom: 3.4rem;
  left: 5.5rem;
  font-size: 1.5rem;
  color: ${(props: StyledLabel) =>
    props.focusedInput ? "#FFE4E1" : "#dbdbdb"};
  background-color: #fff;
  transition: color 0.4s ease-in;
`;

export const StyledInput = styled.input`
  width: 80%;
  outline: none;
  margin: 0;
  background: #fff;
  border: 1px solid #dbdbdb;
  font-size: 1.5rem;
  padding: 0.8em 0.5em;
  border-radius: 2px;
`;

export const SubmitButtonComponent = styled.button`
  text-align: center;
  width: 50%;
  padding: 1rem 1rem;
  background-color: #ddaf94;
  border-radius: 2rem;
  font-size: 1.5rem;
  color: #000;
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
`;

export const ImageComponent = styled.div`
  width: 300px;
  height: 500px;
  position: relative;
`;
