import styled from "styled-components";

const Color = styled.div`
  width: 100%;
  height: 25px;
  margin: 3px;
  cursor: pointer;
  box-shadow: 0px 0px 5px 0.5px rgba(0, 0, 0, 0.3);
  background-color: ${props => props.value};
  &:hover {
    box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.3);
  }
`;
export default Color;
