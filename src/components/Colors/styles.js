import styled from "styled-components";

const Color = styled.div`
  width: 50%;
  height: 50px;
  border: 1px solid;
  margin: 5px;
  background-color: ${props => props.value};
`;
export default Color;
