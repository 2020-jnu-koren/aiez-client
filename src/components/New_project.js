import React from "react";
import "./New_project.css";
import { Link } from "react-router-dom";
import computingCloud from "./img/computingCloud.png";

class New_project extends React.Component {
  render() {
    return (
      <body>
        <header className="header">
          <div className="header__center">
            <div className="header__title">Home Project</div>
          </div>
        </header>
        <main>
          <div className="Btns">
            <div className="BtnNNumber">
              <div className="Btn_number">1</div>
              <Link className="Btn" to="/project/new_project/upload_data">
                <div className="Btn_img Btn_item">
                  <img className="Btn_icon" src={computingCloud} alt="img" />
                </div>
                <div className="Btn_eng Btn_item">Upload Data</div>
                <div className="Btn-kor Btn_item">데이터를 업로드 하세요.</div>
              </Link>
            </div>
            <div className="BtnNNumber">
              <div className="Btn_number">2</div>
              <Link className="Btn" to="/project/new_project/prepare_data">
                <div className="Btn_img Btn_item">image</div>
                <div className="Btn_eng Btn_item">Prepare Dataset</div>
                <div className="Btn-kor Btn_item">
                  데이터셋을 라벨링 하세요.
                </div>
              </Link>
            </div>
            <div className="BtnNNumber">
              <div className="Btn_number">3</div>
              <Link className="Btn" to="/project/new_project/train_data">
                <div className="Btn_img Btn_item">img</div>
                <div className="Btn_eng Btn_item">Train Neural Network</div>
                <div className="Btn-kor Btn_item">학습시키세요.</div>
              </Link>
            </div>
          </div>
        </main>
      </body>
    );
  }
}

export default New_project;
