import styled from "styled-components";

export const StyledInput = styled.input`
  transition: all 0.2s linear;
  width: 100%;
  display: inline-block;
  height: 35px;
  font-size: 12px;
  outline: none;
  display: block;
  text-indent: 10px;
  color: rgb(255, 87, 26);
  background: #fffce6;
  border-bottom: 1.5px solid rgb(255, 87, 26);
  border-top: none;
  border-right: none;
  border-left: none;
  text-decoration: none;
  &:focus {
    border-bottom: 2.5px solid rgb(255, 87, 26);
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  justify-content: space-around;
`;
export const ColorWrapper = styled.span`
  width: 40%;
  display: flex;
  flex-direction: row;
  padding-top: 7px;
`;
export const InputWrapper = styled.div`
  width: 40%;
`;
export const IconWrapper = styled.span`
  display: flex;
  width: 5%;
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Button = styled.button`
  background: #fffce6;
  transition: all 0.2s linear;
  width: 30%;
  height: 40px;
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
    background: rgb(255, 87, 26);
    color: #fffce6;
  }
`;
export const ErrorWrapper = styled.div`
  color: red;
  font-size: 15px;
  display: flex;
  justify-content: center;
  font-weight: bold;
  padding-bottom: 5px;
`;
