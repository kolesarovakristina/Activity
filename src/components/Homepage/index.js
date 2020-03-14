import React from "react";
import { Wrapper, IconsWrapper, Image } from "./styles";
import LinkMapping from "../../components/Links/LinkMapping";
import Logo from "../Logo";
import icons from "../../assets/icons.png";

class Homepage extends React.Component {
  render() {
    return (
      <Wrapper>
        <Logo />
        <LinkMapping />
        <IconsWrapper>
          <Image src={icons} alt="icons" />
        </IconsWrapper>
      </Wrapper>
    );
  }
}

export default Homepage;
