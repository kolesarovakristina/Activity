import styled from "styled-components";
import homepage from "../../assets/homepage.jpg";

export const Wrapper = styled.div`
  background-image: url(${homepage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
`;
export const ItemWrapper = styled.div`
  padding-top: 5%;
`;
