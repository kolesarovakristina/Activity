import styled from "styled-components";

const Color = styled.div`
  width: 100%;
  height: 22px;
  margin: 3px;
  background-color: ${props => props.value};
  &:hover {
    border: 1px solid rgb(255, 87, 26);
  }
`;
export default Color;
