import React from "react";
import "./Train.css";
import LinearProgressWithLabel from "./progress.js";

class Train extends React.Component {
  init = () => {
    //LocalStorage 데이터 취득 방법 3가지
    var val = localStorage.getItem("Test");
    //취득 데이터 출력
    document.querySelector("#result").innerHTML = val;
  };

  render() {
    return (
      <div>
        <header className="header">
          <div className="header__center">
            <div className="header__title">
              Home / Project / New project / Setting / Train
            </div>
          </div>
        </header>
        <main className="Training_main">
          <div className="Training">
            <div className="Train_on">학습 중 입니다. 잠시만 기다려주세요.</div>
            <div>
              <LinearProgressWithLabel value={10} />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Train;
