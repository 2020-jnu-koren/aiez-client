import React from "react";
import "./Upload_data.css";
import { Link } from "react-router-dom";

class Upload_data extends React.Component {
  render() {
    return (
      <div className="App">
        <body>
          <header className="header">
            <div className="header__center">
              <div className="header__title">
                Home > Project > New project > Upload Data
              </div>
            </div>
          </header>
          <main>
            <div className="upload_data__title">Upload Data</div>
            <div className="upload_data__description">
              이미지 파일을 드래그 하거나 선택하여 업로드 해주세요.
            </div>
            <div className="upload_data__box"></div>
          </main>
        </body>
      </div>
    );
  }
}

export default Upload_data;
