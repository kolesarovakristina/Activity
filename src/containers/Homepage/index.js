import React from "react";
import { Wrapper, ItemWrapper } from "./styles";
import LinkMapping from "../../components/StyledLink/LinkMapping";
import Logo from "../../components/Logo";

class Homepage extends React.Component {
  render() {
    return (
      <Wrapper>
        <ItemWrapper>
          <Logo />
          <LinkMapping />
        </ItemWrapper>
      </Wrapper>
    );
  }
}

export default Homepage;
