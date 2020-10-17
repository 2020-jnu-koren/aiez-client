import React from "react";
import axios from "axios";
import "./Test.css";
import { Link } from "react-router-dom";

class Test extends React.Component {
  state = {
    isLoading: true,
    users: [],
  };
  getUsers = async () => {
    const {
      data: {
        data: { users },
      },
    } = await axios({
      method: "get",
      url: "http://bit.ly/2mTM3nY",
    });
  };

  render() {
    return (
      <body>
        <header className="header">
          <div className="header__center">
            <div className="header__title">Test</div>
          </div>
        </header>
        <main>
          <div></div>
        </main>
      </body>
    );
  }
}

export default Test;
