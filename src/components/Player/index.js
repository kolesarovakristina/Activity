import React from "react";
import piece from "../../assets/piece.png";
import { Wrapper, Piece } from "./styles";

class Player extends React.Component {
    state ={
        move: false
    }
    handleMove = () => {
        this.setState({
            move:true
        })
    }
  render() {
      console.log(this.state.move);
      const {move} = this.state;
    return (
      <Wrapper onClick={this.handleMove} move={move}>
        <Piece src={piece} />
      </Wrapper>
    );
  }
}

export default Player;
