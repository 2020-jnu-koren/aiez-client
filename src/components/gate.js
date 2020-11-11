import React from "react";
import classNames from "classnames";
import Popup_2 from "./Popup_2.js";
import "./Train.css";

class gate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }
  render() {
    return (
      <div className="upload_save">
        <button id="ending_btn" onClick={this.togglePopup.bind(this)}>
          저장하기
        </button>
        {this.state.showPopup ? (
          <Popup_2 closePopup={this.togglePopup.bind(this)} />
        ) : null}
      </div>
    );
  }
}

export default gate;
