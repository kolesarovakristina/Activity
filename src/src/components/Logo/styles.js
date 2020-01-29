import styled from "styled-components";

export const LogoWrapper = styled.div`
  width: 100%;
  transition: all 0.2s linear;
  display: flex;
  justify-content: center;
`;

export const Logo = styled.img`
  max-width: auto;
  min-height: 25px;
  width: 40%;
  height: 40%;
  display: flex;
  padding: 0 0.75em;
  @media (max-width: 840px) {
    width: 90%;
  }
`;
