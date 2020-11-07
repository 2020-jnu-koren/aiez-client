import React from "react";
import "./Project.css";
import { Link } from "react-router-dom";
import Projectls from "./Projectls";
import axios from "axios";

class Project extends React.Component {
  state = {
    projects: ""
  }
  componentDidMount(){
    this.callApi()
    
  }

  callApi = async () =>{
    axios({
      method: "get",
      url: "http://116.89.189.12/projects",
      headers:{
        "Accept": "application/json",
        "Authorization": "Token 13bc8256196bcf1d297e80b136855ba7d0ec46a6",
        "Content-Type": "application/json",
        "credentials":"include"
      },
      data: {
        "id" : "5f3d0cf77ff28a003e81f43f"
      }
    }).then(res => console.log(res.data)); 

  }
  render() {
    return (
      <body>
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
          <div className="project-lists">
            <div className="project-list">
              <div className="project-list_info">
                <div className="project_date">2020-09-31</div>
                <div className="project_name">banana_project1</div>
              </div>
              <div className="project-btns">
                <div className="project-train-btn project-btn">Train</div>
                <div className="project-test-btn project-btn">Test</div>
              </div>
            </div>
          </div>
          {/* <div className="project-lists2">
            <div className="no_project">프로젝트가 존재하지 않습니다.</div>
          </div> */}
          {this.state.projects ? this.state.projects.map(p=>{
            return <Projectls key={p.id} Date={p.Date} Name={p.Name} />
          }):""}
        </main>
      </body>
    );
  }
}

export default Project;
