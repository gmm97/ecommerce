import React from "react";
import { UserPayload } from "../Responses";
import { HeaderBox, MenuOptions, MenuOption, SiteLogo } from "./HeaderStyles";
import { NextLink } from "../Custom-Components/CustomLink";

interface HeaderComponentProps {
  currentUser: UserPayload;
}

const HeaderComponent = (props: HeaderComponentProps) => {
  return (
    <HeaderBox>
      <SiteLogo>Ticketing</SiteLogo>
      <MenuOptions>
        {!props.currentUser && <NextLink to="/auth" text="Login / Sign Up" />}
        {props.currentUser && <NextLink to="/signout" text="Sign Out" />}
        {props.currentUser && <NextLink to="/orders" text="My Orders" />}
        {props.currentUser && <NextLink to="/sales" text="My Sales" />}
        {props.currentUser && <NextLink to="/profile" text="My Profile" />}
      </MenuOptions>
    </HeaderBox>
  );
};

export default HeaderComponent;
