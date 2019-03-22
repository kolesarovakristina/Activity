import React from "react";
import { Wrapper, Title } from "./styles";
import StyledLink from "../../components/StyledLink";
import PaperImage from "../../components/PaperImage";


const Homepage = () => {
  return (
    <Wrapper>
      <Title>Activity</Title>
      <StyledLink/>
      <PaperImage/>
    </Wrapper>
  );
};

export default Homepage;
