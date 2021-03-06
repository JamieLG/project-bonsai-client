import styled, { css } from "styled-components";
import theme from "./themes";

export const StyledButton = styled.button`
  z-index: 2;
  margin: 3px 0;
  background-color: ${theme.a};
  color: white;
  padding: 15px 25px;
  border: none;
  border-radius: 0px;
  font-family: "Press Start 2P", cursive;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.2s ease;
  position: relative;
  &:active {
    box-shadow: inset 5px 5px 0px 0px rgba(0, 0, 0, 0.3);
  }

  box-shadow: inset -5px -5px 0px 0px rgba(0, 0, 0, 0.3);

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: content-box;
    top: -5px;
    left: 0;
    border-top: 5px black solid;
    border-bottom: 5px black solid;
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: content-box;
    top: 0;
    left: -5px;
    border-left: 5px black solid;
    border-right: 5px black solid;
  }

  ${props =>
    props.audio &&
    css`
      width: 70px;
      height: 60px;
      padding: 0 0;
      margin: 5px 5px;
      position: absolute;
      right: 10px;
      top: 5px;
    `}

  ${props =>
    props.joinGame &&
    css`
      height: 7em;
      margin-top: auto;
      margin-left: 3px;
      margin-right: 3px;
      margin-bottom: 3px;
      justify-self: flex-end;
      font-size: 14px;
      background-color: ${props =>
        props.readytojoingame === true ? theme.a : theme.b};
    `}

    ${props =>
      props.correctAnswer &&
      css`
        background-color: ${!props.colour
          ? theme.c
          : props.colour === "correct"
          ? theme.f
          : theme.a};
        color: black;
      `}

    
      
`;

export const LoginForm = styled.form`
  flex-grow: 0;
  z-index: 1;
  margin: auto;

  input {
    padding: 10px 20px;
    margin: 0 20px;
    border: solid black 3px;
    position: relative;
    font-size: 16px;
  }
`;

export const ChatForm = styled.form`
  width: 95%;
  justify-self: flex-end;
  display: flex;
  input {
    padding: 10px 20px;
    margin: 0 10px;
    border: solid black 3px;
    font-size: 16px;
    flex-grow: 1;
  }
  button {
    background-color: ${theme.a};
  }
`;

export const HealthBarFill = styled.div`
  background: ${theme.a};
  height: 6.8vh;
  border-radius: 6px;
  margin-right: 10px;
  margin-left: 10px;
  transition: width 0.5s ease;
  width: ${props => props.healthPercentage}%;

  div {
    background: rgba(255, 255, 255, 0.3);
    top: 5px;
    margin-top: 3px;
    margin-right: 3%;
    margin-left: 3%;
    height: 30%;
    width: 90%;
    border-radius: 3px;
  }
`;

export const HealthBarContainer = styled.div`
  position: relative;
  background-image: url("./assets/box.png");
  height: 10vh;
  width: 25vw;
  background-size: 100% 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: center;
`;
