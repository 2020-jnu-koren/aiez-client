import React from "react";
import "./Project.css";
import { Link } from "react-router-dom";
import Projectls from "./Projectls";
import { getProjectById } from "../services/project";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: null
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

  async getProject() {}

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
              <Link className="new-project-btn" to="/project/new_project">
                New Project
              </Link>
            </div>
          </div>
          {this.state.projects
            ? this.state.projects.map(p => {
                return (
                  <Projectls key={p._id} Date={p.createdAt} Name={p.title} />
                );
              })
            : ""}
        </main>
      </div>
    );
  }
}

export default Project;