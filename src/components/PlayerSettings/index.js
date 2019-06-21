import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router-dom";
import {
  Wrapper,
  InputWrapper,
  IconWrapper,
  ButtonWrapper,
  Button,
  ColorWrapper,
  ErrorWrapper
} from "../Input/styles";
import Input from "../Input/inputPattern";
import Color from "../Colors";

const colors = [
  { id: "blue", value: "rgb(0, 0, 255)" },
  { id: "yellow", value: "rgb(255, 255, 102)" },
  { id: "green", value: "rgb(0, 230, 0)" },
  { id: "red", value: "rgb(255, 0, 0)" }
];

class PlayerSettings extends React.Component {
  state = {
    users: [{ name: "", color: colors[0].id }],
    count: 1,
    error: null,
    isLoading: false
  };
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.status !== prevProps.status) {
      switch (this.props.status) {
        case "loading":
          this.setState({
            isLoading: true
          });
          break;
        case "success":
          alert("Players have been successfully created");
          this.props.history.push("/activity");
          break;
        case "failed":
          this.setState({
            error: "Something went wrong",
            isLoading: false
          });
          break;
        default:
          console.warn("The unknown status");
      }
      console.log("pl", this.props.status);
    }
  }

  addClick = () => {
    this.setState(prevState => ({
      users: [...prevState.users, { name: "" }]
    }));
  };
  removeClick = i => {
    let users = [...this.state.users];
    users.splice(i, 1);
    this.setState({ users });
  };
  incrementCounter = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCounter = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  createUI = () => {
    const { count, users } = this.state;
    return users.map((item, i) => (
      <Wrapper key={i}>
        <InputWrapper>
          <Input
            placeholder="Team Name"
            name="name"
            value={item.name}
            onChange={this.handleChange.bind(this, i)}
            minLength={4}
            maxLength={12}
            pattern="^(?!\s*$).+"
          />
        </InputWrapper>
        {count <= 1 ? (
          <div />
        ) : (
          <IconWrapper onClick={this.removeClick}>
            <FontAwesomeIcon
              onClick={this.decrementCounter}
              style={{
                color: "rgb(255, 87, 26)",
                margin: "auto",
                padding: "5px"
              }}
              icon="minus"
            />
          </IconWrapper>
        )}

        <ColorWrapper>
          {colors.map(({ id, value }) => (
            <Color
              key={id}
              id={id}
              value={value}
              onClick={() => this.setColor(i, id)}
            />
          ))}
        </ColorWrapper>
      </Wrapper>
    ));
  };

  handleChange(i, e) {
    const { name, value } = e.target;
    let users = [...this.state.users];
    users[i] = { ...users[i], [name]: value };
    this.setState({ users });
  }
  handleSubmit = event => {
    event.preventDefault();
    const { createGameAction } = this.props;
    const { users } = this.state;

    const areValuesUnique = array => {
      let isValid = true;
      for (let user of array) {
        isValid =
          array.filter(
            arrVal => arrVal.color === user.color || arrVal.name === user.name
          ).length === 1;
        if (!isValid) {
          break;
        }
      }
      return isValid;
    };
    if (areValuesUnique(users)) {
      createGameAction(users);
      this.setState({ error: null });
      console.log("users", users);
    } else {
      this.setState({
        error: "Team name and color have to be unique"
      });
    }
  };
  setColor = (pos, colorId) => {
    const users = [...this.state.users];
    users[pos].color = colorId;
    this.setState({
      users
    });
  };
  changeColor = () => {};
  render() {
    const { count, error } = this.state;
    if (this.props.loading) {
      return <div>Loading</div>;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        {this.createUI()}
        {count === 4 ? (
          <div />
        ) : (
          <IconWrapper onClick={this.addClick}>
            <FontAwesomeIcon
              onClick={this.incrementCounter}
              style={{
                color: "rgb(255, 87, 26)",
                margin: "auto",
                padding: "5px"
              }}
              icon="plus"
            />
          </IconWrapper>
        )}
        <ErrorWrapper>{error}</ErrorWrapper>
        <ButtonWrapper>
          <Button type="submit" value="Submit">
            Submit
          </Button>
        </ButtonWrapper>
      </form>
    );
  }
}
PlayerSettings.propTypes = {
  createGameAction: PropTypes.func.isRequired
};
export default withRouter(PlayerSettings);
