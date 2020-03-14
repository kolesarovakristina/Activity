import React from "react";
import { StyledInput } from "./styles";

const Input = ({
  type,
  value,
  onChange,
  placeholder,
  minLength,
  maxLength,
  name,
  pattern,
  textColor
}) => (
  <StyledInput
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    name={name}
    required
    minLength={minLength}
    maxLength={maxLength}
    pattern={pattern}
    textColor={textColor}
  />
);
export default Input;
