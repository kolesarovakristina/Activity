import React from "react";
import Card from "./card";
import { Wrapper, CardWrapper } from "./styles";
import one from "../../assets/one.png";
import two from "../../assets/two.png";
import three from "../../assets/three.png";

const words = { word: "love" };
class CardsContainer extends React.Component {
  render() {
    return (
      <Wrapper>
        <CardWrapper>
          <Card src={one} word={words.word} />
        </CardWrapper>
        <CardWrapper>
          <Card src={two} word={words.word} />
        </CardWrapper>
        <CardWrapper>
          <Card src={three} word={words.word} />
        </CardWrapper>
      </Wrapper>
    );
  }
}
export default CardsContainer;
