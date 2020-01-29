import React from "react";
import { Wrapper } from "../../containers/Homepage/styles";
import { ContentWrapper, Title } from "./styles";
import Logo from "../Logo";
import PlayerSettingsContainer from "../../containers/PlayerSettingsContainer";

class SetupGame extends React.Component {
  render() {
    return (
      <Wrapper>
        <Logo />
        <ContentWrapper>
          <Title>Select Team name and Color</Title>
          <PlayerSettingsContainer />
        </ContentWrapper>
      </Wrapper>
    );
  }
}
export default SetupGame;
