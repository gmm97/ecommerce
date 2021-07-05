import styled from "styled-components";

interface ResponseBackground {
  status: "Error" | "Pending" | "Success";
}

export const NotificationTitle = styled.div`
  font-size: 2rem;
  margin-left: 3rem;
`;
export const NotificationWrapper = styled.div`
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  position: fixed;
  height: 8rem;
  bottom: 0;
  width: 100%;
  left: 0;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props: ResponseBackground) =>
    (props.status === "Success" && "#F0FFF0") ||
    (props.status === "Error" && "#F08080") ||
    (props.status === "Pending" && "#F5FFFA")};
`;

export const NotificationMessage = styled.div`
  font-size: 2rem;
  margin-right: 3rem;
`;
