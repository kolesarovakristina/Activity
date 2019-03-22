import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  animation-name: handleMove;
  animation-fill-mode: both;

  @keyframes handleMove {
    from {
      right: ${({ move }) => (move ? "100px" : "0px")};
    }
    to {
      right: ${({ move }) => (move ? "100px" : "0px")};
    }
  }
`;
export const Piece = styled.img`
  height: 50px;
  margin-top: 20px;
`;
