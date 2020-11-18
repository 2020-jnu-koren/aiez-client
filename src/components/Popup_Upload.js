import React from "react";
import "./Popup_Upload.css";
import { postProject } from "../services/project";

class Popup_Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  async createProject(title) {
    const postProjectResult = await postProject({ title });
    this.props.concatProject(postProjectResult.data);
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <div className="popup_upload_center">
            <div className="popup_upload__title">프로젝트 생성하기</div>
            <div className="popup_upload__main">
              <div className="popup_upload__name">
                <div className="popup_upload__name_que">프로젝트 이름 :</div>
                <input
                  className="popup_upload__name_ex"
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="dataset_create__btns">
              <div className="dataset_create__ok">
                <button
                  onClick={() => {
                    this.createProject(this.state.title);
                    this.props.closePopup(true);
                  }}
                  className="dataset_create__ok_btn"
                >
                  확인
                </button>
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

export default Popup_Upload;
