import styled from "styled-components";
import {Link} from "react-router-dom";

export const Wrapper= styled.div`
margin: 20px;
margin-top: 100px;
bottom: 0;
right: 0;
left: 0;
display: flex;
justify-content: center;
align-self: center;
align-items: center;
flex-direction: column;
`;
export const ItemWrapper = styled(Link)`
height: 50px;
display: flex;
padding-top: 10px;
text-decoration: none;
width:30%;
`;
export const Item = styled.button`
background: #fffce6;
transition: all 0.2s linear;
width: 100%;
height: 45px;
font-size: 14px;
color: rgb(255, 87, 26);
letter-spacing: 1px;
font-weight: bold;
letter-spacing: 1px;
border: 1.5px solid rgb(255, 87, 26);
outline: none;
display: block;
border-radius: 5px;
cursor: pointer;
&:hover{
    background: none;
    border: 1.5px solid rgb(255, 87, 26);
    color: rgb(255, 87, 26);
}
`;