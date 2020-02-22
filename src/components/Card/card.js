import React from "react";
import "./style.css";
import logo from "../../assets/logo.png";

class Card extends React.Component {
  render() {
    const { src, word, onOpen,onClose,onStart } = this.props;
    return (
      <label>
        <input type="checkbox" />
        <div className="card">
          <div
          onClick={onOpen}
            className="front"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <img src={logo} style={{ width: "140px" }} alt="logo" />
            <img
              src={src}
              style={{ width: "90px", margin: "auto" }}
              alt="point"
            />
          </div>
          <div className="back">
            <div className="backContent">
              <div className="word" onClick={onClose}>{word}</div>
              <button className="button" onClick={onStart}>start</button>
            </div>
          </div>
        </div>
      </label>
    );
  }
}
export default Card;
