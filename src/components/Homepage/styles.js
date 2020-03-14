import styled from "styled-components";
import homepage from "../../assets/homepage.jpg";

export const Wrapper = styled.div`
  background-image: url(${homepage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: fixed;
`;
export const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const Image = styled.img`
  width: 35%;
  @media (max-width: 840px) {
    width: 70%;
  }
`;
