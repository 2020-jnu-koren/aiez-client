import React from "react";
import "./Labeling.css";
import downArrow from "./img/downArrow.svg";
import { Link } from "react-router-dom";
import { Annotator } from "image-labeler-react";
import Popup_Class from "./Popup_Class.js";
import InteractiveList from "./Dataset_list.js";
import * as ml5 from "ml5";
import { RESTURL } from "../services/common";

class Labeling extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model: null,
      showPopup: false,
      classList: [],
      uploadImageList: [],
      index: 0
    };
  }

  componentDidMount() {
    const getClassList = localStorage.getItem("classList");
    if (getClassList) {
      this.setState({ classList: JSON.parse(getClassList) });
    }
    if (this.props.location.state?.uploadImageList) {
      this.setState({
        uploadImageList: this.props.location.state.uploadImageList
      });
    }
    this.initFeatureExtractor();
  }

  initFeatureExtractor = async () => {
    const featureExtractor = await ml5.featureExtractor("MobileNet", {
      version: 1,
      epochs: 50
    });
    const classifier = await featureExtractor.classification();
    this.setState({ model: classifier });
    console.log("featureExtractor : ", featureExtractor);
    console.log("classifier : ", classifier);
  };

  setStateClassList = classList => {
    this.setState({ classList });
    localStorage.setItem("classList", JSON.stringify(classList));
  };

  // When the model is loaded
  modelLoaded() {
    console.log("Model Loaded!");
  }

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
                      console.log("labeledData : ", labeledData);
                      const image = new Image(
                        labeledData.width,
                        labeledData.height
                      );
                      image.src = labeledData.image;
                      image.crossOrigin = "anonymous";
                      this.state.model.addImage(
                        image,
                        labeledData.boxes[0].annotation
                      );
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
                  to={{
                    pathname: "/project/new_project/train_data/setting",
                    state: { model: this.state.model }
                  }}
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
