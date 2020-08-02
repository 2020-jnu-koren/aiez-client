import React from "react";
import "./Train_result.css";
import { Link } from "react-router-dom";

class Train_result extends React.Component {
  init = () => {
    //LocalStorage 데이터 취득 방법 3가지
    var val = localStorage.getItem("Test");
    //취득 데이터 출력
    document.querySelector("#result").innerHTML = val;
  };

  render() {
    return (
      <body>
        <header className="header">
          <div className="header__center">
            <div className="header__title">Home > Project</div>
          </div>
        </header>
        <main>
          <div className="result_sub">
            <div className="result_date">Date :</div>
            <div className="result_input">Input :</div>
          </div>
          <div className="result_classes"></div>
        </main>
        <input value={localStorage.getItem("epoch")}></input>
      </body>
    );
  }
}

export default Train_result;
