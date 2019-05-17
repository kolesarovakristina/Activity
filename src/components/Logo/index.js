import React from "react";
import { LogoWrapper, Logo } from "./styles";
import logo from "../../assets/logo.png";

const LogoComp = () => (
  <LogoWrapper>
    <Logo src={logo} alt="globallogic" />
  </LogoWrapper>
);
export default LogoComp;
