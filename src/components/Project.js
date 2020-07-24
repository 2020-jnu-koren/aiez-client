import React from "react";
import "./Project.css";
import { Link } from "react-router-dom";

class Project extends React.Component {
  render() {
    return (
      <div className="App">
        <body>
          <header className="header">
            <div className="header__center">
              <div className="header__title">Home > Project</div>
            </div>
          </header>
          <main>
            <div className="project-bar">
              <div className="project-bar__column">
                <div className="project-bar__title">Date</div>
                <div className="project-bar__title">Name</div>
                <div className="project-bar__title">Architecture</div>
                <div className="project-bar__title">Storage</div>
              </div>
              <div className="project-bar__column">
                <Link className="new-project-btn" to="/project/new_project">
                  New Project
                </Link>
              </div>
            </div>
            <div className="project-list">
              <div className="project-list__column">
                <div className="project-list__data">data 받아오면 진행</div>
                <div className="project-list__data"></div>
                <div className="project-list__data"></div>
                <div className="project-list__data"></div>
              </div>
              <div className="project-list__column">
                <div className="project-list__btns">
                  <div className="project-train-btn">Train</div>
                  <div className="project-test-btn">Test</div>
                </div>
              </div>
            </div>
          </main>
        </body>
      </div>
    );
  }
}

export default Project;
