import React from "react";
import gif from "../../assets/gif.gif";
import { Wrapper, Loading } from "./styles";

const LoadingPage = () => (
  <Wrapper>
  <Loading src={gif} />
  </Wrapper>
);

export default LoadingPage;
