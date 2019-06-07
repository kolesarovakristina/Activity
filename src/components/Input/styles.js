import styled from "styled-components";

export const StyledInput = styled.input`
  transition: all 0.2s linear;
  width: 100%;
  display: inline-block;
  height: 40px;
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
  &:focus {
    border-bottom: 2.5px solid rgb(255, 87, 26);
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
export const StyledInputWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;
export const ColorWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px;
`;
export const InputWrapper = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  padding: 10px;
`;
export const IconWrapper = styled.span`
  line-height: 25px;
  text-align: center;
  width: 30px;
  height: 25px;
  background: #fffce6;
  border: 1.5px solid rgb(255, 87, 26);
  margin-top: 10px;
  margin-left: 10px;
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
    background: none;
    border: 1.5px solid rgb(255, 87, 26);
    color: rgb(255, 87, 26);
  }
`;
// export const Text = styled.div`
//   font-size: 20px;
//   text-transform: uppercase;
//   color: rgb(255, 87, 26);
//   text-align: center;
// `;
