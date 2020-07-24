import React from "react";
import "./New_project.css";
import { Link } from "react-router-dom";

class New_project extends React.Component {
  render() {
    return (
      <body>
        <header className="header">
          <div className="header__center">
            <div className="header__title">Home > Project</div>
          </div>
        </header>
        <main>
          <div className="Btns">
            <Link className="Btn" to="/project/new_project/upload_data">
              <div className="Btn_img Btn_item">
                <div>img</div>
                {/*             
              <img src={"https://www.flaticon.com/authors/freepik"}></img> */}
              </div>
              <div className="Btn_eng Btn_item">Upload Data</div>
              <div className="Btn-kor Btn_item">데이터를 업로드 하세요.</div>
            </Link>
            <Link className="Btn" to="/project/new_project/prepare_data">
              <div className="Btn_img Btn_item">image</div>
              <div className="Btn_eng Btn_item">Prepare Dataset</div>
              <div className="Btn-kor Btn_item">데이터셋을 라벨링 하세요.</div>
            </Link>
            <div className="Btn">
              <div className="Btn_img Btn_item">image</div>
              <div className="Btn_eng Btn_item">Train Neural Network</div>
              <div className="Btn-kor Btn_item">학습시키세요.</div>
            </div>
          </div>
        </main>
      </body>
    );
  }
}

export default New_project;
