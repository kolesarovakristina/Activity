import React from "react";
import Link from "./Link";
import { LinkWrapper, StyledLink } from "./styles";

const link = [
  {
    title: "ZAČAŤ HRU",
    to: "/setupGame"
  },
  {
    title: "PRAVIDLÁ HRY",
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
