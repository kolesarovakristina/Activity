import React from "react";
import Card from "./card";
import {
  Wrapper,
  CardWrapper,
  TimerWrapper,
  ContentWrapper,
  Button,
  Time,
  Text
} from "./styles";
import one from "../../assets/one.png";
import two from "../../assets/two.png";
import three from "../../assets/three.png";
import Answers from "../Answers";

const points = [
  { point: 1, src: one },
  { point: 2, src: two },
  { point: 3, src: three }
];

class Cards extends React.Component {
  state = {
    seconds: 30
  };
  startTime = () => {
    this.myInterval = setInterval(() => {
      const { seconds } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }));
      }
      if (seconds === 0) {
        clearInterval(this.myInterval);
      }
    }, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
  render() {
    const {
      openCardAction,
      closeCardAction,
      startTimeAction,
      word,
      gameId
    } = this.props;
    const { seconds } = this.state;
    return (
      <Wrapper>
        {points.map(({ point, src }) => (
          <CardWrapper key={point}>
            <Card
              src={src}
              point={point}
              onOpen={() => {
                openCardAction(point, gameId);
              }}
              onClose={() => {
                closeCardAction();
              }}
              onStart={() => {
                startTimeAction(gameId);
                this.startTime();
              }}
              word={word}
            />
          </CardWrapper>
        ))}
        {seconds === 0 ? (
          <Answers />
        ) : (
          <TimerWrapper>
            <ContentWrapper>
              <Text>Pripravený ?</Text>
              <Time>00:{seconds < 10 ? `0${seconds}` : seconds}</Time>
              <Button
                onClick={() => {
                  startTimeAction(gameId);
                  this.startTime();
                }}
              >
                Spustiť
              </Button>
            </ContentWrapper>
          </TimerWrapper>
        )}
      </Wrapper>
    );
  }
}

export default Cards;
