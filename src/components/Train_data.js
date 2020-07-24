import React from "react";
import "./Train_data.css";
import downArrow from "./img/downArrow.svg";
import area_selection from "./img/area_selection.svg";
import cursor from "./img/cursor.svg";
import drag from "./img/drag.svg";
import { Link } from "react-router-dom";

class Train_data extends React.Component {
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
          <div className="labeling_frame">
            <div className="labeling_frame__tools">
              <div className="tools_center">
                <img className="labeling_tool__drag" src={drag} alt="img" />
                <img
                  className="labeling_tool__area"
                  src={area_selection}
                  alt="img"
                />
                <img className="labeling_tool__cursor" src={cursor} alt="img" />
              </div>
            </div>

            <div className="labeling_frame__main">
              <div className="labeling_img__title">
                <img className="labeling_img__pre" src={downArrow} alt="img" />
                <div className="labeling_img__name">Image Name</div>
                <img className="labeling_img__next" src={downArrow} alt="img" />
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
                <div className="class_create__btn">Create Class</div>
              </div>
            </div>
          </div>
          <div className="labeling_save">
            <div className="labeling_save_center">
              <div className="labeling_save__btn">Save</div>
            </div>
          </div>
        </main>
      </body>
    );
  }
}

export default Train_data;
