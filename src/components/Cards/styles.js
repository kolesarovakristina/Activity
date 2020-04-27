import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 7%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;
export const CardWrapper = styled.div`
  padding: 15px;
`;
export const TimerWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  z-index: 20;
  position: absolute;
  width: 100%;
  color: #202020;
  font-weight: bold;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid;
  width: 20%;
  border-radius: 5px;
  margin: 25px;
`;
export const Button = styled.div`
  border: none;
  background: none;
  text-transform: uppercase;
  font-size: 15px;
  cursor: pointer;
  :hover {
    border: none;
    background: none;
    color: green;
  }
`;
export const Text = styled.div`
  font-size: 20px;
  text-transform: uppercase;
`;
export const Time = styled.div`
  font-size: 40px;
`;
