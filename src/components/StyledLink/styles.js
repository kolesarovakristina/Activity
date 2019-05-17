import styled from "styled-components";
import { Link } from "react-router-dom";

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 15px;
`;
export const Item = styled.button`
  background: #fffce6;
  transition: all 0.2s linear;
  width: 100%;
  height: 50px;
  font-size: 14px;
  color: rgb(255, 87, 26);
  letter-spacing: 1px;
  font-weight: bold;
  letter-spacing: 1px;
  border: 1.5px solid rgb(255, 87, 26);
  outline: none;
  display: block;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: none;
    border: 1.5px solid rgb(255, 87, 26);
    color: rgb(255, 87, 26);
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
`;
export const LinkWrapper = styled.div`
  width: 40%;
  margin: auto;
  @media (max-width: 840px) {
    width: 90%;
  }
`;
