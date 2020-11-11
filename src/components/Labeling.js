import React from "react";
import "./Labeling.css";
import downArrow from "./img/downArrow.svg";
import area_selection from "./img/area_selection.svg";
import cursor from "./img/cursor.svg";
import drag from "./img/drag.svg";
import { Link } from "react-router-dom";
import { Annotator } from "image-labeler-react";
import Popup_Class from "./Popup_Class.js";
import InteractiveList from "./Dataset_list.js";
import banana1 from "./img/labeling_img/banana1.jpg";

class Labeling extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  render() {
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
              <div className="labeling_frame__tools">
                <div className="tools_center">
                  <img className="labeling_tool__drag" src={drag} alt="img" />
                  <img
                    className="labeling_tool__area"
                    src={area_selection}
                    alt="img"
                  />
                  <img
                    className="labeling_tool__cursor"
                    src={cursor}
                    alt="img"
                  />
                </div>
              </div>
              <div className="labeling_frame__main">
                <div className="labeling_img__title">
                  <img
                    className="labeling_img__pre"
                    src={downArrow}
                    alt="img"
                  />
                  <div className="labeling_img__name">banana1.jpg</div>
                  <img
                    className="labeling_img__next"
                    src={downArrow}
                    alt="img"
                  />
                </div>
                <div className="labeling_img__main">
                  <Annotator
                    height={600}
                    width={600}
                    imageUrl={banana1}
                    asyncUpload={async (labeledData) => {
                      // upload labeled data
                    }}
                    types={["A", "B", "C"]}
                    defaultType={"A"}
                  />
                </div>
              </div>
              <div className="labeling_data__summary">
                <div className="labeling_dataset__title">데이터셋 이름</div>
                <div className="labeling_dataset__main">
                  <InteractiveList />
                </div>
                <div className="labeling_class__bar">
                  <div className="class_bar__color">색</div>
                  <div className="class_bar__name">클래스 이름</div>
                  <div className="class_bar__key">단축키</div>
                </div>
                <div className="class_list">
                  <div className="class_list__ex">
                    <div className="class_list__color"></div>
                    <div className="class_list__name">title1</div>
                    <div className="class_list__key">a</div>
                  </div>
                </div>
                <div className="class_create">
                  <button
                    id="class_create__btn"
                    onClick={this.togglePopup.bind(this)}
                  >
                    클래스 생성
                  </button>
                  {this.state.showPopup ? (
                    <Popup_Class closePopup={this.togglePopup.bind(this)} />
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
                  저장하기
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
