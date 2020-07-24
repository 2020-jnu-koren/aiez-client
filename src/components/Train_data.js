import React from "react";
import "./Train_data.css";
import downArrow from "./img/downArrow.svg";
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
        <Link
          className="goToSetting"
          to="/project/new_project/train_data/setting"
        >
          일단 여기 패스~~
        </Link>
        <img className="Btn_icon" src={downArrow} alt="img" />
      </body>
    );
  }
}

export default Train_data;
