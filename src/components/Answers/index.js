import React from "react";
import { Wrapper, Button, Text, ContentWrapper, ButtonWrapper } from "./styles";

class Answers extends React.Component {
  render() {
    const { wrongAnswer, correctAnswer, gameId } = this.props;
    return (
      <Wrapper>
        <ContentWrapper>
          <Text>Podarilo sa tvojej skupine odpovedať správne ?</Text>
          <ButtonWrapper>
            <Button
              onClick={() => {
                correctAnswer(gameId);
              }}
            >
              ÁNO
            </Button>
            <Button
              onClick={() => {
                wrongAnswer(gameId);
              }}
            >
              NIE
            </Button>
          </ButtonWrapper>
        </ContentWrapper>
      </Wrapper>
    );
  }
}

export default Answers;
