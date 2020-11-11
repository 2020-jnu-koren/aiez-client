import React from "react";
import ReactHover, { Trigger, Hover } from 'react-hover'
import "./Setting.css";
import ParameterForm from "./ParameterForm.js";
import SplitButton from "./SplitButton.js";
import { Link } from "react-router-dom";
import './component.css'


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
              홈 화면 / 프로젝트 / 새 프로젝트 / 설정
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
              <div className="Setting_big_item">학습 도구</div>
              <div className="Setting_big_item">변수 설정</div>
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
                          <div className="trigger">
                            <div>?</div>
                          </div>
                        </Trigger>
                        <Hover type="hover">
                          <div className={'hover'}>
                            <blockquote className={'quote'}>
                              데이터 학습 횟수로, 높을수록 데이터를 학습하는 횟수가 높아진다.
                            </blockquote>
                          </div>
                        </Hover>
                      </ReactHover>
                    </div>
                  </li>
                  <li className="Setting_list">
                    <div className="Setting_item">Batch Size</div>
                    <ReactHover options={optionsCursorTrueWithMargin}>
                      <Trigger type="trigger">
                        <div className="trigger">
                          <div>?</div>
                        </div>
                      </Trigger>
                      <Hover type="hover">
                        <div className={'hover'}>
                          <blockquote className={'quote'}>
                            도움말2
                          </blockquote>
                        </div>
                      </Hover>
                    </ReactHover>
                  </li>
                  <li className="Setting_list">
                    <div className="Setting_item">Iteration</div>
                    <ReactHover options={optionsCursorTrueWithMargin}>
                      <Trigger type="trigger">
                        <div className="trigger">
                          <div>?</div>
                        </div>
                      </Trigger>
                      <Hover type="hover">
                        <div className={'hover'}>
                          <blockquote className={'quote'}>
                            도움말3
                          </blockquote>
                        </div>
                      </Hover>
                    </ReactHover>
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
