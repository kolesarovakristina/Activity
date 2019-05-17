import styled from "styled-components";
import gameBoard from "../../assets/gameBoard.png";
import background from "../../assets/background.jpg";


export const  StyledWrapper = styled.div`
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 100%;
  background-image: url(${background});`;

export const Wrapper = styled.div`
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 1000px;
  height: 725px;
  background-image: url(${gameBoard});
`;
export const Piece = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  top:20px;
  right:200px;
  transition: all 1s ease-in-out;
`;
