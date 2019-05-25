import React from "react";
import { Wrapper, ItemWrapper } from "./styles";
import LinkMapping from "../../components/StyledLink/LinkMapping";
import Logo from "../../components/Logo";
import Card from "../../components/Card";

const Homepage = () => {
  return (
    <Wrapper>
      <ItemWrapper>
        <Logo />
        <LinkMapping />
      </ItemWrapper>
      <Card />
    </Wrapper>
  );
};

export default Homepage;
