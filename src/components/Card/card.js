import React from "react";
import "./style.css";
import logo from "../../assets/logo.png";

const Card = ({ src, word }) => (
  <label>
    <input type="checkbox" />
    <div class="card">
      <div class="front" style={{ display: "flex", flexDirection: "column" }}>
        <img src={logo} style={{ width: "150px" }} />
        <img src={src} style={{ width: "100px", margin: "auto" }} />
      </div>
      <div class="back">{word}</div>
    </div>
  </label>
);
export default Card;
