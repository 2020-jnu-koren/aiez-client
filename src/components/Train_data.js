import React from "react";
import "./Train_data.css";
import "./Popup_class.css";
import downArrow from "./img/downArrow.svg";
import area_selection from "./img/area_selection.svg";
import cursor from "./img/cursor.svg";
import drag from "./img/drag.svg";
import { Link } from "react-router-dom";

class Popup_Class extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <div className="popup_inner__center">
            <div className="popup_class__title">Create Class</div>
            <div className="popup_class__main">
              <div className="popup_class__name">
                <div className="popup_class__name_que">Class Name :</div>
                <div className="popup_class__name_ex">title1</div>
              </div>
              <div className="popup_class__description">
                <div className="popup_class__description_que">
                  Description :
                </div>
                <div className="popup_class__description_ex"></div>
              </div>
              <div className="popup_class__key">
                <div className="popup_class__key_que">Hot Key :</div>
                <div className="popup_class__key_ex">a</div>
              </div>
              <div className="popup_class__color">
                <div className="popup_class__color_que">Color :</div>
                <div className="popup_class__color_ex">
                  <div className="popup_class__color_cir"></div>
                  <div className="popup_class__color_txt">FF0000</div>
                </div>
              </div>
              <div className="popup_class_description"></div>
            </div>
            <div className="class_create__close">
              <button
                id="class_create__close_btn"
                onClick={this.props.closePopup}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Train_data extends React.Component {
  constructor() {
    super();
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
      <body>
        <header className="header">
          <div className="header__center">
            <div className="header__title">
              Home > Project > New project > Prepare Dataset
            </div>
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
                  <div className="labeling_img__name">Image Name</div>
                  <img
                    className="labeling_img__next"
                    src={downArrow}
                    alt="img"
                  />
                </div>
                <div className="labeling_img__main"></div>
              </div>
              <div className="labeling_data__summary">
                <div className="labeling_dataset__title">Dataset Name</div>
                <div className="labeling_dataset__main">
                  <div className="labeling_dataset__ex">
                    <div className="labeling_dataset__img"></div>
                    <div className="labeling_dataset__writing">
                      <div className="labeling_dataset__name">image name</div>
                      <div className="labeling_dataset__description">
                        Description
                      </div>
                    </div>
                  </div>
                </div>
                <div className="labeling_class__bar">
                  <div className="class_bar__color">Color</div>
                  <div className="class_bar__name">Class Name</div>
                  <div className="class_bar__key">Hot Key</div>
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
                    Create Class
                  </button>
                  {this.state.showPopup ? (
                    <Popup_Class closePopup={this.togglePopup.bind(this)} />
                  ) : null}
                </div>
              </div>
            </div>
            <Link
              className="labeling_save"
              to="/project/new_project/train_data/setting"
            >
              <div className="labeling_save_center">
                <div className="labeling_save__btn">Save</div>
              </div>
            </Link>
          </div>
        </main>
      </body>
    );
  }
}

export default Train_data;
