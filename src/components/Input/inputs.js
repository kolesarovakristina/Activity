import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Wrapper,
  InputWrapper,
  IconWrapper,
  ButtonWrapper,
  Button,
  ColorWrapper,
  StyledInputWrapper
} from "./styles";
import Input from "./inputPattern";
import Color from "../Colors";

const colors = [
  { id: "blue", value: "rgb(0, 0, 255)" },
  { id: "yellow", value: "rgb(255, 255, 102)" },
  { id: "green", value: "rgb(0, 230, 0)" },
  { id: " red", value: "rgb(255, 0, 0)" }
];

class Inputs extends React.Component {
  state = {
    users: [{ name: "" }],
    color: null
  };

  addClick = () => {
    this.setState(prevState => ({
      users: [...prevState.users, { name: "" }]
    }));
  };

  createUI = () => {
    return this.state.users.map((el, i) => (
      <InputWrapper key={i}>
        <Input
          placeholder="Team Name"
          name="name"
          value={el.teamName}
          onChange={this.handleChange.bind(this, i)}
        />
        <IconWrapper onClick={this.addClick}>
          <FontAwesomeIcon
            style={{
              color: "rgb(255, 87, 26)"
            }}
            icon="plus"
          />
        </IconWrapper>
      </InputWrapper>
    ));
  };

  handleChange(i, e) {
    const { name, value } = e.target;
    let users = [...this.state.users];
    users[i] = { ...users[i], [name]: value };
    this.setState({ users });
  }

  removeClick = i => {
    let users = [...this.state.users];
    users.splice(i, 1);
    this.setState({ users });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("team", this.state.users);
  };
  setColor = color => {
    this.setState(
      {
        color
      },
      () => console.log("color", this.state.color)
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Wrapper>
          <StyledInputWrapper>{this.createUI()}</StyledInputWrapper>
          <ColorWrapper>
            {colors.map(({ id, value }) => (
              <Color
                key={id}
                value={value}
                id={id}
                onClick={() => this.setColor({ id, value })}
              />
            ))}
          </ColorWrapper>
        </Wrapper>
        <ButtonWrapper>
          <Button type="submit" value="Submit">
            Submit
          </Button>
        </ButtonWrapper>
      </form>
    );
  }
}
export default Inputs;
