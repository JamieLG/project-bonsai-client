import React from "react";
import { Link } from "@reach/router";

class Login extends React.Component {
  state = {
    loggedIn: false,
    username: "",
    // password: "",
    userList: null
  };

  render() {
    const { username /*password*/ } = this.state;
    return (
      <section className="login">
        <h1>Login</h1>
        {this.state.loggedIn === false && (
          <form onSubmit={this.handleSubmit}>
            <input
              className="login-name-input"
              type="text"
              placeholder="enter username"
              value={username}
              name="username"
              onChange={this.handleInput}
            ></input>
            {/* <input
              className="login-password-input"
              type="password"
              placeholder="enter password"
              value={password}
              name="password"
              onChange={this.handleInput}
            ></input> */}
            <button>log in</button>
          </form>
        )}
        {this.state.loggedIn === true && (
          <>
            <p>Login Authorised...</p>
            <Link to="/lobby">
              <button>Join Lobby</button>
            </Link>
          </>
        )}
      </section>
    );
    /* / Lobby link - on submit emits a 'player login' message, which the server will
       listen out for and send a response. When the login is authorised or
       unauthorised the server emits back the response. The user is then
       linked to the Lobby page, depending on the server response.*/
  }

  handleInput = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const { username } = this.state;
    console.log("submitform");
    event.preventDefault();

    this.props.socket.emit("playerLogin", username);
    // send emit saying new player. receive list of current players in lobby from server. Set state with players in lobby.
    //playersInLobby(players)
    this.setState({ username: "", password: "" });
  };

  componentDidMount() {
    this.props.socket.on("loginAuthorised", authorized => {
      this.setState({ loggedIn: authorized });
    });
    this.props.socket.on("currentLobbyGuests", userList => {
      this.props.setUserList(userList);
    });
  }
}

// new user button, rendering a create account component?

export default Login;
