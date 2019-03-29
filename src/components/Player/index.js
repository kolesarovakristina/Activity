import React from "react";
import piece from "../../assets/piece.png";
import gameBoard from "../../assets/gameBoard.png";
import { Wrapper, Piece } from "./styles";

class Player extends React.Component {
  state = {
    columnsCount: 4,
    canvasWidth: 400,
    rowsCount: 8,
    canvasHeight: 800,
    actualRow: 1,
    position: 0
  };

  handleMove = () => {
    const { canvasWidth, columnsCount, actualRow, position } = this.state;
    const frame = () => {
      this.setState({
        position: this.state.position + 1
      });
      if (position % columnsCount === 0) {
        this.setState({
          actualRow: this.state.actualRow + 1
        });
      }

      if (actualRow % 2 === 1) {
        this.setState({
          canvasWidth:
            canvasWidth - (canvasWidth / columnsCount) * position + "px"
        });
      } else {
        this.setState({
          canvasWidth: (canvasWidth / columnsCount) * position + "px"
        });
      }
    };
    frame();
    const id = setInterval(frame, 5000);
  };
  render() {
    console.log("width", this.state.canvasWidth);
    console.log("position", this.state.position);
    console.log("actualRow", this.state.actualRow);
    return (
      <Wrapper>
        <Piece
         src={piece}
          onClick={this.handleMove}
          style={{left:"50px;"}}
        />
      </Wrapper>
    );
  }
}

export default Player;
