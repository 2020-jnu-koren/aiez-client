import React from "react";
import ReactHover, { Trigger, Hover } from 'react-hover'
import "./Setting.css";
import ParameterForm from "./ParameterForm.js";
import SplitButton from "./SplitButton.js";
import HoverComponent from './HoverComponent.js'
import TriggerComponent from './TriggerComponent.js'
import { Link } from "react-router-dom";


const optionsCursorTrueWithMargin = {
  followCursor: true,
  shiftX: 20,
  shiftY: 0,
}

class Setting extends React.Component {
  handleCreate = (data) => {
    localStorage.setItem("epoch", data.epoch);
    localStorage.setItem("batch_size", data.batch_size);
    localStorage.setItem("iteration", data.iteration);
  };
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
              <div className="Setting_big_item">Training Tool</div>
              <div className="Setting_big_item">Parameter Setting</div>
            </div>
            <div className="Setting_column">
              <div className="Training_Tool">
                <SplitButton />
              </div>
              <div className="Parameter_Setting">
                <ul className="Setting_lists">
                  <li className="Setting_list">
                    <div className="Setting_item">Epoch</div>
                    <div className="Setting_item__help">
                      <ReactHover options={optionsCursorTrueWithMargin}>
                        <Trigger type="trigger">
                          <TriggerComponent />
                        </Trigger>
                        <Hover type="hover">
                          <HoverComponent />
                        </Hover>
                      </ReactHover>
                    </div>
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
