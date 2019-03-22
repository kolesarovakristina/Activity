import React from "react";
import gameBoard from "../../assets/gameBoard.png";
import { Wrapper, StyledImage} from "./styles";

const GameBoard = () => {
  return (
    <Wrapper>
      <StyledImage src={gameBoard} />
    </Wrapper>
  );
};
export default GameBoard;
