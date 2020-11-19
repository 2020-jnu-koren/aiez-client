import React, { Component } from "react";
import { RESTURL } from "../services/common";

import "./ParameterForm.css";

// import Counter from "./Counter.js";

class ParameterForm extends Component {
  state = {
    epoch: 30,
    batch_size: 50,
    iteration: 100 //default값
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value)
    }); //치는거 바뀔떄마다 데이터 변경
  };
  handleSubmit = e => {
    e.preventDefault(); //페이지 리로딩 방지
    this.props.onCreate(this.state); //props로 받은 onCreate 호출
    window.location.href = RESTURL + "/aiez#/project/new_project/train";
  };

  handleIncrease = e => {
    e.preventDefault(); //페이지 리로딩 방지
    // const {a}= e.target.name;
    const { epoch, batch_size, iteration } = this.state;
    if (e.target.name === "epoch") {
      this.setState({
        epoch: epoch + 1
      });
    } else if (e.target.name === "batch_size") {
      this.setState({
        batch_size: batch_size + 1
      });
    } else {
      this.setState({
        iteration: iteration + 1
      });
    }
  };

  handleDecrease = e => {
    e.preventDefault(); //페이지 리로딩 방지
    // const {a}= e.target.name;
    const { epoch, batch_size, iteration } = this.state;
    if (e.target.name === "epoch") {
      this.setState({
        epoch: epoch - 1
      });
    } else if (e.target.name === "batch_size") {
      this.setState({
        batch_size: batch_size - 1
      });
    } else {
      this.setState({
        iteration: iteration - 1
      });
    }
  };

  render() {
    return (
      <div>
        <form className="Setting_inputs">
          <div className="Setting_input_btn">
            <input
              value={this.state.epoch}
              onChange={this.handleChange}
              // onChange={this.handleChange}
              name="epoch"
              className="Setting_input"
            />
            <div>
              <button
                onClick={this.handleIncrease}
                name="epoch"
                className="input_setting_btn"
              >
                +
              </button>
              <button
                onClick={this.handleDecrease}
                name="epoch"
                className="input_setting_btn"
              >
                -
              </button>
            </div>
          </div>
          <div className="Setting_input_btn">
            <input
              value={this.state.batch_size}
              onChange={this.handleChange}
              // onChange={this.handleChange}
              name="batch_size"
              className="Setting_input"
            />
            <div>
              <button
                onClick={this.handleIncrease}
                name="batch_size"
                className="input_setting_btn"
              >
                +
              </button>
              <button
                onClick={this.handleDecrease}
                name="batch_size"
                className="input_setting_btn"
              >
                -
              </button>
            </div>
          </div>
          <div className="Setting_input_btn">
            <input
              value={this.state.iteration}
              onChange={this.handleChange}
              // onChange={this.handleChange}
              name="iteration"
              className="Setting_input"
            />
            <div>
              <button
                onClick={this.handleIncrease}
                name="iteration"
                className="input_setting_btn"
              >
                +
              </button>
              <button
                onClick={this.handleDecrease}
                name="itereation"
                className="input_setting_btn"
              >
                -
              </button>
            </div>
          </div>
          <button onClick={this.handleSubmit} className="labeling_save_btn">
            학습시작
          </button>
        </form>
      </div>
    );
  }
}

export default ParameterForm;
