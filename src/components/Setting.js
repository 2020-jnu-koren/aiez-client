import React from "react";
import "./Setting.css";
import { Link } from "react-router-dom";

class Setting extends React.Component {
  render() {
    return (
      <body>
        <header className="header">
          <div className="header__center">
            <div className="header__title">
              Home > Project > New project > Setting
            </div>
          </div>
        </header>
        <main className="Setting_main">
          <div className="WhatToDo">
            <div className="WTD_Eng">Set training tool and parameters.</div>
            <div className="WTD_Kor">
              원하는 트레이닝 툴과 변수 값을 설정해주세요.
            </div>
          </div>
          <section className="Setting_select">
            <div className="Setting_column">
              <div className="Setting_big_item">Training Tool</div>
              <div className="Setting_big_item">Parameter Setting</div>
            </div>
            <div className="Setting_column">
              <div className="Training_Tool">내리면서 고르는거</div>
              <div className="Parameter_Setting">
                <ul ClassName="Setting_lists">
                  <li className="Setting_list">
                    <div className="Setting_item">Epoch</div>
                    <div className="Setting_input">input창</div>
                  </li>
                  <li className="Setting_list">
                    <div className="Setting_item">Batch Size</div>
                    <div className="Setting_input">input창</div>
                  </li>
                  <li className="Setting_list">
                    <div className="Setting_item">Iteration</div>
                    <div className="Setting_input">input창</div>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="Setting_select_1">
              <div className="Setting_item_Big">Training Tool</div>
              <div>내리면서 고르는거</div>
            </div>
            <div className="Setting_select_2">
              <div className="Setting_item_Big">Parmeter Setting</div>
              <ul classNKame="Setting_items">
                <li className="Setting_list">
                  <div className="Setting_item">Epoch :</div>
                  <div>input창</div>
                </li>
                <li className="Setting_list">
                  <div className="Setting_item">Batch Size :</div>
                  <div>input창</div>
                </li>
                <li className="Setting_list">
                  <div className="Setting_item">Iteration :</div>
                  <div>input창</div>
                </li>
              </ul>
            </div> */}
          </section>
        </main>
        <Link className="labeling_save" to="/project/new_project/train_result">
          <div className="labeling_save_center">
            <div className="labeling_save__btn">Save</div>
          </div>
        </Link>
      </body>
    );
  }
}

export default Setting;
