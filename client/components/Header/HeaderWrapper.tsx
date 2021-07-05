import { UserPayload } from "../Responses";
import HeaderComponent from "./Header";

interface HeaderWrapperProps {
  currentUser: UserPayload | null;
  children: React.ReactNode;
}

export const HeaderWrapper = (props: HeaderWrapperProps) => {
  return (
    <>
      <HeaderComponent currentUser={props.currentUser} />
      <main>{props.children}</main>
    </>
  );
};
