import React from "react";
import "./Setting.css";
import ParameterForm from "./ParameterForm.js";
import SplitButton from "./SplitButton.js";
import ReactHover, { Trigger, Hover } from 'react-hover'
import './component.css'

const optionsCursorTrueWithMargin = {
  followCursor: true,
  shiftX: 20,
  shiftY: 0,
}

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
                    <div className="Setting_item">Iteration</div>
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
