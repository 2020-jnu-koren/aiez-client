import React from "react";
import axios from "axios";
import "./Login.css";
import { postLogin } from "../services/auth";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      password: ""
    };
  }

  handleIdChange = e => {
    this.setState({ id: e.target.value });
  };
  handlePwChamge = e => {
    this.setState({ password: e.target.value });
  };
  signin = async () => {
    try {
      const result = await postLogin();
      console.log("result.data : ", result.data);
    } catch (e) {
      console.log("e : ", e);
    }
  };
  render() {
    const { isLoading, users } = this.state;
    return (
      <div>
        <header className="header">
          <div className="header__center">
            <div className="header__title">LogIn</div>
          </div>
        </header>
        <main>
          <div className="login_main">
            <div className="login_que">
              <div className="login_que__id">ID</div>
              <div className="login_que__pass">Password</div>
            </div>
            <div className="login_input">
              <input
                className="login_input__id"
                onChange={this.handleIdChange}
                name="id"
                type="email"
              ></input>
              <input
                className="login_input__pass"
                onChange={this.handlePwChamge}
                name="password"
                type="password"
              ></input>
            </div>
          </div>
          <button
            className="login_confirm__btn"
            onClick={this.signin}
            type="button"
          >
            Login
          </button>
        </main>
      </div>
    );
  }
}

export default Login;
