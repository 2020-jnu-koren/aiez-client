import React from "react";
import "./Train_data.css";
import { Link } from "react-router-dom";

class Train_data extends React.Component {
  render() {
    return (
      <div className="App">
        <body>
          <header className="header">
            <div className="header__center">
              <div className="header__title">
                홈 화면 / 프로젝트 / 새 프로젝트 / 데이터셋 학습
              </div>
            </div>
          </header>
          <main>
            <div className="my_label">라벨링된 자료</div>
            <div className="label_list">
              <Link
                className="label_list_ex"
                to="/project/new_project/train_data/setting"
              >
                <div className="label_list__num">500</div>
                <div className="label_list__title">dataset1</div>
              </Link>
            </div>
          </main>
        </body>
      </div>
    );
  }
}

export default Train_data;
