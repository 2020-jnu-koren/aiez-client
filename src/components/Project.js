import React from "react";
import "./Project.css";
import { Link } from "react-router-dom";

class Project extends React.Component {
  render() {
    return (
      <body>
        <header className="header">
          <div className="header__center">
            <div className="header__title">홈 화면 / 프로젝트</div>
          </div>
        </header>
        <main>
          <div className="project-bar">
            <div className="project-bar__column">
              <div className="project-bar__title">날짜</div>
              <div className="project-bar__title">프로젝트 이름</div>
            </div>
            <div className="project-bar__column new-project-btn__column">
              <Link className="new-project-btn" to="/project/new_project">
                새 프로젝트 생성
              </Link>
            </div>
          </div>
          <div className="project-lists">
            <div className="project-list">
              <div className="project-list_info">
                <div className="project_date">2020-09-31</div>
                <div className="project_name">banana_project1</div>
              </div>
              <div className="project-btns">
                <div className="project-train-btn project-btn">학습시키기</div>
                <div className="project-test-btn project-btn">테스트</div>
              </div>
            </div>
          </div>
          {/* <div className="project-lists2">
            <div className="no_project">프로젝트가 존재하지 않습니다.</div>
          </div> */}
        </main>
      </body>
    );
  }
}

export default Project;
