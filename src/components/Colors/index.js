import React from "react";
import Color from "./styles";

const Colors = ({ value, onClick, id, clicked }) => (
  <Color value={value} onClick={onClick} id={id} clicked={clicked} />
);
export default Colors;
