import React from "react";
import "./Popup_Upload.css";
import { Link } from "react-router-dom";

class Popup_Upload extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <div className="popup_upload_center">
            <div className="popup_upload__title">Create Dataset</div>
            <div className="popup_upload__main">
              <div className="popup_upload__name">
                <div className="popup_upload__name_que">Dataset Title :</div>
                <input className="popup_upload__name_ex" />
              </div>
            </div>
            <div className="dataset_create__btns">
              <div className="dataset_create__ok">
                <Link
                  className="dataset_create__ok_btn"
                  to="/project/new_project/prepare_data"
                >
                  OK
                </Link>
              </div>
              <div className="dataset_create__cancel">
                <button
                  id="dataset_create__cancel_btn"
                  onClick={this.props.closePopup}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup_Upload;
