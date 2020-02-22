import React from "react";
import Card from "../Card/card";
import { Wrapper, CardWrapper } from "./styles";
import one from "../../assets/one.png";
import two from "../../assets/two.png";
import three from "../../assets/three.png";

const points = [
  { point: 1, src: one },
  { point: 2, src: two },
  { point: 3, src: three }
];

class Cards extends React.Component {
  render() {
    const { getCardAction,closeCardAction,startTimeAction, word, gameId } = this.props;
    return (
      <Wrapper>
        {points.map(({ point, src }) => (
          <CardWrapper key={point}>
            <Card
              src={src}
              point={point}
              onOpen={() => {
                getCardAction(point, gameId);
              }}
              onClose={()=>{
                closeCardAction()
              }}
              onStart={()=>{
                startTimeAction(gameId)
              }}
              word={word}
            />
          </CardWrapper>
        ))}
      </Wrapper>
    );
  }
}

export default Cards;
