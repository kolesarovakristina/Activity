import React from "react";
import { ItemWrapper, Item } from "./styles";

const Link = ({ title }) => {
  return (
    <ItemWrapper>
      <Item>{title}</Item>
    </ItemWrapper>
  );
};
export default Link;
