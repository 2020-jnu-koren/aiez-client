import React from "react";
import "./Setting.css";
import ParameterForm from "./ParameterForm.js";
import SplitButton from "./SplitButton.js";

class Setting extends React.Component {
  handleCreate = data => {
    localStorage.setItem("epoch", data.epoch);
    localStorage.setItem("batch_size", data.batch_size);
    localStorage.setItem("iteration", data.iteration);
  };
  componentDidMount() {
    console.log(this.props.location.state);
  }
  render() {
    return (
      <body>
        <header className="header">
          <div className="header__center">
            <div className="header__title">
              Home / Project / New project / Setting
            </div>
          </div>
        </header>
        <main className="Setting_main">
          <div className="WhatToDo">
            <div className="WTD_Kor">
              원하는 트레이닝 툴과 변수 값을 설정해주세요.
            </div>
          </div>
          <section className="Setting_select">
            <div className="Setting_column">
              <div className="Setting_big_item">학습 모델 선택</div>
              <div className="Setting_big_item">파라미터 설정</div>
            </div>
            <div className="Setting_column">
              <div className="Training_Tool">
                <SplitButton />
              </div>
              <div className="Parameter_Setting">
                <ul className="Setting_lists">
                  <li className="Setting_list">
                    <div className="Setting_item">Epoch</div>
                  </li>
                  <li className="Setting_list">
                    <div className="Setting_item">Batch Size</div>
                  </li>
                  <li className="Setting_list">
                    <div className="Setting_item">Iteration</div>
                  </li>
                </ul>
                <div>
                  <ParameterForm onCreate={this.handleCreate} />
                </div>
              </div>
            </div>
          </section>
        </main>
      </body>
    );
  }
}

export default Setting;
