import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  z-index: 20;
  position: absolute;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ButtonWrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
`;
export const Button = styled.button`
  margin: 20px;
  font-family: 'Allan', cursive;
  font-style: italic;
  font-weight: bold;
  font-size: 30px;
  background: none;
  border: none;
  color: #084808;
  cursor: pointer;
  text-shadow: 2px 2px #197419;
  letter-spacing: 5px;
  :hover {
    background: none;
    border: none;
    text-shadow: 2px 2px #084808;
    color: #197419;
  }
`;

export const Text = styled.div`
  margin: 10px;
  font-family: 'Allan', cursive;
  font-style: italic;
  font-weight: bold;
  font-size: 25px;
  color:#202020;
`;
