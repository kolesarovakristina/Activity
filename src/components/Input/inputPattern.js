import React from "react";
import { StyledInput } from "./styles";

const Input = ({
  type,
  value,
  onChange,
  placeholder,
  minLength,
  maxLength,
  name
}) => (
  <StyledInput
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    name={name}
    required
    autocomplete="off"
    minLength={minLength}
    maxLength={maxLength}
  />
);
export default Input;
