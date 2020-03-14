import React from "react";
import Color from "./styles";

const Colors = ({ value, onClick, id, textColor }) => (
  <Color value={value} onClick={onClick} id={id} textColor={textColor} />
);
export default Colors;
