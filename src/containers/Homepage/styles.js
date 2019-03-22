import styled from "styled-components";
import homepage from "../../assets/homepage.jpg";

export const Wrapper = styled.div`
text-align:center;
background-image: url(${homepage});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
position:relative;
width:100%;
height:100%;
`;
export const Title = styled.div`
font-style:italic;
font-size:100px;
color:rgb(255, 87, 26);
text-transform: uppercase;
letter-spacing: 8px;
font-weight: bold;
`;
export const Image = styled.img``;