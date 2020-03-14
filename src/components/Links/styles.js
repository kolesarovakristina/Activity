import styled from "styled-components";
import { Link } from "react-router-dom";

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 12px;
`;
export const Item = styled.div`
  height: 40px;
  font-size: 30px;
  color: rgb(255, 87, 26);
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.3);
  &:hover {
    color: #fffce6;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
`;
export const LinkWrapper = styled.div`
  width: 30%;
  margin: auto;
  @media (max-width: 840px) {
    width: 100%;
  }
`;
