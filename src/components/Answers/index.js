import React from "react";

class Answers extends React.Component {
  render() {
      const {wrongAnswer, correctAnswer,gameId}=this.props;
    return (
     <div>
         <button onClick={()=>{correctAnswer(gameId)}}>Yes</button>
         <button onClick={()=>{wrongAnswer(gameId)}}>No</button>
     </div>
    );
  }
}

export default Answers;
