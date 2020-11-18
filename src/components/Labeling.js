import React from "react";
import "./Labeling.css";
import downArrow from "./img/downArrow.svg";
import { Link } from "react-router-dom";
import { Annotator } from "image-labeler-react";
import Popup_Class from "./Popup_Class.js";
import InteractiveList from "./Dataset_list.js";
import { RESTURL } from "../services/common";

class Labeling extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      classList: [],
      uploadImageList: [],
      index: 0
    };
  }

  componentDidMount() {
    const getClassList = localStorage.getItem("classList");
    console.log("getClassList : ", getClassList);
    if (getClassList) {
      this.setState({ classList: JSON.parse(getClassList) });
    }
    if (this.props.location.state?.uploadImageList) {
      this.setState({
        uploadImageList: this.props.location.state.uploadImageList
      });
    }
    console.log(
      "this.props.location.state : ",
      this.props.location.state?.uploadImageList
    );
  }

  setStateClassList = classList => {
    this.setState({ classList });
    localStorage.setItem("classList", JSON.stringify(classList));
  };

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  setIndex = index => {
    this.setState({ index });
  };

  _renderClassList = item => {
    return (
      <div className="class_list__ex">
        <div
          className="class_list__color"
          style={{ backgroundColor: item.color }}
        />
        <div className="class_list__name">{item.customClassName}</div>
        <div className="class_list__key">{item.hotkey}</div>
      </div>
    );
  };

  render() {
    const { classList, uploadImageList, index } = this.state;
    console.log(
      "classList.map(item => item.customClassName) : ",
      classList.map(item => item.customClassName)
    );
    return (
      <body>
        <header className="header">
          <div className="header__center">
            <div className="header__title">라벨링</div>
          </div>
        </header>
        <main>
          <div className="labeling">
            <div className="labeling_frame">
              <div className="labeling_frame__main">
                <div className="labeling_img__title">
                  <button
                    onClick={() => {
                      this.setState(prevState => ({
                        index: Math.max(prevState.index - 1, 0)
                      }));
                    }}
                  >
                    <img
                      className="labeling_img__pre"
                      src={downArrow}
                      alt="img"
                    />
                  </button>
                  <div className="labeling_img__name">
                    {uploadImageList[index]?.path.replace("upload/images/", "")}
                  </div>
                  <button
                    onClick={() => {
                      this.setState(prevState => ({
                        index: Math.min(
                          prevState.index + 1,
                          uploadImageList.length - 1
                        )
                      }));
                    }}
                  >
                    <img
                      className="labeling_img__next"
                      src={downArrow}
                      alt="img"
                    />
                  </button>
                </div>
                <div className="labeling_img__main">
                  <Annotator
                    height={600}
                    width={600}
                    imageUrl={RESTURL + "/" + uploadImageList[index]?.path}
                    asyncUpload={async labeledData => {
                      // upload labeled data
                    }}
                    types={classList.map(item => item.customClassName)}
                    defaultType={
                      this.state.classList.length === 0
                        ? ""
                        : this.state.classList[0].customClassName
                    }
                  />
                </div>
              </div>
              <div className="labeling_data__summary">
                <div className="labeling_dataset__title">데이터셋</div>
                <div className="labeling_dataset__main">
                  <InteractiveList
                    uploadImageList={uploadImageList}
                    setIndex={this.setIndex}
                  />
                </div>
                <div className="labeling_class__bar">
                  <div className="class_bar__color">색깔</div>
                  <div className="class_bar__name">클래스 이름</div>
                  <div className="class_bar__key">단축키</div>
                </div>
                <div className="class_list">
                  {this.state.classList.map(item =>
                    this._renderClassList(item)
                  )}
                </div>
                <div className="class_create">
                  <button
                    id="class_create__btn"
                    onClick={this.togglePopup.bind(this)}
                  >
                    클래스 만들기
                  </button>
                  {this.state.showPopup ? (
                    <Popup_Class
                      closePopup={this.togglePopup.bind(this)}
                      classList={this.state.classList}
                      setStateClassList={this.setStateClassList}
                    />
                  ) : null}
                </div>
              </div>
            </div>
            <div className="labeling_save">
              <div className="labeling_save_center">
                <Link
                  className="labeling_save__btn"
                  to="/project/new_project/train_data/setting"
                >
                  학습하기
                </Link>
              </div>
            </div>
          </div>
        </main>
      </body>
    );
  }
}

export default Labeling;
