import React from "react";
import Link from "next/link";
import { MenuOption } from "./CustomLinkStyles";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  text: string;
}

export const NextLink = (props: LinkProps) => {
  return (
    <Link href={props.to} passHref>
      <MenuOption>{props.text}</MenuOption>
    </Link>
  );
};
