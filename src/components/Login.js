import React from "react";
import axios from "axios";
import "./Login.css";
import { Link } from "react-router-dom";

class Login extends React.Component {
  state = {
    isLoading: true,
    user: [],
  };
  getUsers = async () => {
    const {
      data: {
        data: { users },
      },
    } = await axios.get("http://116.89.189.12/users/signin");
    this.setState({
      users,
      isLoading: false,
    });
  };
  async componentDidMount() {
    this.getUsers();
  }
  render() {
    const { isLoading, users } = this.state;
    return (
      <div>
        <body>
          <header className="header">
            <div className="header__center">
              <div className="header__title"> Home Project </div>
            </div>
          </header>
          <main> </main>
        </body>
      </div>
    );
  }
}

export default Login;
