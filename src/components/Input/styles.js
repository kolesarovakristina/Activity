import styled from "styled-components";

export const StyledInput = styled.input`
  transition: all 0.2s linear;
  width: 100%;
  display: inline-block;
  height: 35px;
  font-size: 15px;
  outline: none;
  display: block;
  text-indent: 10px;
  color: rgb(255, 87, 26);
  background: #f2ffcc;
  border-bottom: 1.5px solid rgb(255, 87, 26);
  border-top: none;
  border-right: none;
  border-left: none;
  text-decoration: none;
  box-shadow: 1px 12px 10px -10px rgba(0, 0, 0, 0.3);
  &:focus {
    border-bottom: 2.5px solid rgb(255, 87, 26);
    box-shadow: 1px 12px 10px -10px rgba(0, 0, 0, 0.3);
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
  height: 25px;
  padding-right: 10px;
`;
export const InputWrapper = styled.div`
  width: 40%;
`;
export const IconWrapper = styled.span`
  display: flex;
  width: 5%;
  cursor: pointer;
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 30px;
`;
export const Button = styled.button`
  background: rgb(255, 87, 26);
  transition: all 0.2s linear;
  width: 30%;
  height: 40px;
  font-size: 14px;
  color: #fffce6;
  letter-spacing: 1px;
  font-weight: bold;
  letter-spacing: 1px;
  border: 1.5px solid rgb(255, 87, 26);
  outline: none;
  display: block;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 1px 5px 5px 0.5px rgba(0, 0, 0, 0.3);
  &:hover {
    background: #f2ffcc;
    color: rgb(255, 87, 26);
    box-shadow: 5px 5px 5px 3px rgba(0, 0, 0, 0.3);
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
