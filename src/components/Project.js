import React from "react";
import "./Project.css";
import Projectls from "./Projectls";
import { getProjectById } from "../services/project";
import Popup_Upload from "./Popup_Upload";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: null,
      showPopup: false
    };
  }

  componentDidMount() {
    this.getMe();
  }
  async getMe() {
    const result = await getProjectById();
    console.log("result : ", result);
    this.setState({ projects: result.data });
  }

  concatProject = project => {
    this.setState({ projects: this.state.projects.concat(project) });
  };

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div>
        <header className="header">
          <div className="header__center">
            <div className="header__title">Home / Project</div>
          </div>
        </header>
        <main>
          <div className="project-bar">
            <div className="project-bar__column">
              <div className="project-bar__title">Date</div>
              <div className="project-bar__title">Name</div>
            </div>
            <div className="project-bar__column new-project-btn__column">
              <button
                onClick={() => {
                  this.setState({ showPopup: true });
                }}
                className="new-project-btn"
              >
                New Project
              </button>
            </div>
          </div>
          <div className="project-lists">
            {this.state.projects
              ? this.state.projects.map(p => {
                  console.log("p : ", p);
                  return (
                    <Projectls
                      key={p._id}
                      Date={p.createdAt}
                      Name={p.title}
                      id={p._id}
                    />
                  );
                })
              : ""}
          </div>
          {this.state.showPopup ? (
            <Popup_Upload
              closePopup={this.togglePopup.bind(this)}
              concatProject={this.concatProject}
            />
          ) : null}
        </main>
      </div>
    );
  }
}

export default Project;
