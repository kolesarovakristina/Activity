import React from "react";
import Inputs from "../Input/inputs";
import { Wrapper, ItemWrapper } from "../../containers/Homepage/styles";
import ContentWrapper from "./styles";
import Logo from "../Logo";

class PlayerSetting extends React.Component {
  render() {
    return (
      <Wrapper>
        <ItemWrapper>
          <Logo />
          <ContentWrapper>
            <Inputs />
          </ContentWrapper>
        </ItemWrapper>
      </Wrapper>
    );
  }
}
export default PlayerSetting;
