import React from "react";
import { Wrapper, ItemWrapper } from "../../containers/Homepage/styles";
import ContentWrapper from "./styles";
import Logo from "../Logo";
import PlayerSettingsContainer from "../../containers/PlayerSettingsContainer";

class SetupGame extends React.Component {
  render() {
    return (
      <Wrapper>
        <ItemWrapper>
          <Logo />
          <ContentWrapper>
            <PlayerSettingsContainer />
          </ContentWrapper>
        </ItemWrapper>
      </Wrapper>
    );
  }
}
export default SetupGame;
