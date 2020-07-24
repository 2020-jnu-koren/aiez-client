import React, { Component } from "react";

class Setting_parameter extends Component {
  state = {
    name: '',
    phone: ''
  };
  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <form>
        <input
          placeholder="Epoch"
          value={this.state.epoch}
          onChange={this.handleChange}//input의 텍스트 값 바뀔때마다 발생하는 이벤트
          name="Epoch"
        />
       <input
          placeholder="Batch Size"
          value={this.state.batch_size}
          onChange={this.handleChange}//input의 텍스트 값 바뀔때마다 발생하는 이벤트
          name="Batch_Size"
        />
        <div>{this.state.epoch} {this.state.batch_size}</div>
      </form>
    );
  }
}

expoert default Setting_parameter;
