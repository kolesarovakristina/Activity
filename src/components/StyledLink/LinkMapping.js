import React from "react";
import Link from "./Link";
import { LinkWrapper, StyledLink } from "./styles";

const link = [
  {
    title: "New Game",
    to: "/gameBoard"
  },
  {
    title: "Settings",
    to: "/playerSetting"
  },
  {
    title: "Rules",
    to: "/rules"
  }
];
const LinkMapping = () => {
  return (
    <LinkWrapper>
      {link.map(({ title, to }) => (
        <StyledLink key={title} to={to}>
          <Link title={title} to={to} />
        </StyledLink>
      ))}
    </LinkWrapper>
  );
};
export default LinkMapping;
