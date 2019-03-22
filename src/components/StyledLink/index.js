import React from "react";
import {Wrapper, ItemWrapper, Item} from "./styles";
const StyledLink = () => {
    return(
        <Wrapper>
            <ItemWrapper to="/gameboard">
            <Item>New Game</Item>
            </ItemWrapper>
            <ItemWrapper to="/settings">
            <Item>Settings</Item>
            </ItemWrapper>
            <ItemWrapper to="/rules">
            <Item>Rules</Item>
            </ItemWrapper>
        </Wrapper>
    )
}
export default StyledLink;