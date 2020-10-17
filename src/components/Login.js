import React from "react";
import axios from "axios";
import "./Login.css";
import { Link } from "react-router-dom";

class Login extends React.Component {
  state = {
    isLoading: true,
    user: [],
    id:"",
    password:"",
  };
  getUsers = async () => {
    const {
      data: {
        users
      },
    } = await axios.get("http://116.89.189.12/users/signin");
    this.setState({ users, isLoading: false });
  };
  async componentDidMount() {
    this.getUsers();
  }
  render() {
    const { isLoading, users } = this.state;
    return (
      <body>
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
              <input className="login_input__id" value={this.state.id} name="id"></input>
              <input className="login_input__pass" value={this.state.password} name="password"></input>
            </div>
          </div>
          <Link className="login_confirm__btn" to="/">
            Confirm
          </Link>
        </main>
      </body>
    );
  }
}

export default Login;
