import styled from "styled-components";
import background from "../../assets/background.jpg"

export const Wrapper = styled.div`
background-image: url(${background});
position:absolute;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
width:100%;
height:100%;
`;
export const StyledImage = styled.img`
width:65%;
position:relative;
`;

