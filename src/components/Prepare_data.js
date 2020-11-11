import React from "react";
import "./Prepare_data.css";
import { Link } from "react-router-dom";
import banana1 from "./img/labeling_img/banana1.jpg";

class Prepare_data extends React.Component {
  render() {
    return (
      <div className="App">
        <body>
          <header className="header">
            <div className="header__center">
              <div className="header__title">
                홈 화면 / 프로젝트 / 새 프로젝트 / 데이터셋
              </div>
            </div>
          </header>
          <main>
            <div className="my_library">데이터셋</div>
            <div className="library_list">
              <div className="library_list_box">
                <Link
                  className="library_list_ex"
                  to="/project/new_project/labeling"
                >
                  <img src={banana1} id="library_list__size"></img>
                  <div className="library_ex__title">
                    <div className="library_list__title">banana</div>
                    <div className="library_list__size">10</div>
                  </div>
                </Link>
              </div>
            </div>
          </main>
        </body>
      </div>
    );
  }
}

export default Prepare_data;
