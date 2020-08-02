import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ParameterForm.css";

class ParameterForm extends Component {
  state = {
    epoch: 30,
    batch_size: 50,
    iteration: 100, //default값
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    }); //치는거 바뀔떄마다 데이터 변경
  };
  handleSubmit = (e) => {
    e.preventDefault(); //페이지 리로딩 방지
    this.props.onCreate(this.state); //props로 받은 onCreate 호출
    window.location.href =
      "http://localhost:3000/aiez#/project/new_project/train_result";
    // this.setState({
    //   epoch: "",
    //   batch_size: "",
    //   iteration: "",
    // }); //삳태값 초기화
  };

  render() {
    return (
      <div>
        <form className="Setting_inputs">
          <input
            value={this.state.epoch}
            onChange={this.handleChange}
            // onChange={this.handleChange}
            name="epoch"
            className="Setting_input"
          />
          <input
            value={this.state.batch_size}
            onChange={this.handleChange}
            // onChange={this.handleChange}
            name="batch_size"
            className="Setting_input"
          />
          <input
            value={this.state.iteration}
            onChange={this.handleChange}
            // onChange={this.handleChange}
            name="iteration"
            className="Setting_input"
          />

          <button onClick={this.handleSubmit} className="labeling_save_btn">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default ParameterForm;
