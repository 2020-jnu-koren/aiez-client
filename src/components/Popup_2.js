import React from "react";
import "./Popup_2.css";
import { Link } from "react-router-dom";

class Popup_2 extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <div className="popup_upload_center">
            <div className="popup_upload__title">프로젝트 생성</div>
            <div className="popup_upload__main">
              <div className="popup_upload__name">
                <div className="popup_upload__name_que">프로젝트 제목 :</div>
                <input className="popup_upload__name_ex" />
              </div>
            </div>
            <div className="dataset_create__btns">
              <div className="dataset_create__ok">
                <Link className="dataset_create__ok_btn" to="/project">
                  확인
                </Link>
              </div>
              <div className="dataset_create__cancel">
                <button
                  id="dataset_create__cancel_btn"
                  onClick={this.props.closePopup}
                >
                  취소
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup_2;
