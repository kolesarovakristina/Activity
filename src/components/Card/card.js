import React from "react";
import "./style.css";
import logo from "../../assets/logo.png";

const Card = ({ src, word, onClick }) => (
  <label onClick={onClick}>
    <input type="checkbox" />
    <div className="card">
      <div
        className="front"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <img src={logo} style={{ width: "140px" }} alt="logo" />
        <img src={src} style={{ width: "90px", margin: "auto" }} alt="point" />
      </div>
      <div className="back">
        <div className="backContent">
          <div className="word">{word}</div>
          <button className="button">start</button>
        </div>
      </div>
    </div>
  </label>
);
export default Card;
