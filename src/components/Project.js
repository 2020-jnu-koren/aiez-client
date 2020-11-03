import React from "react";
import "./Project.css";
import { Link } from "react-router-dom";
import Projectls from "./Projectls";

class Project extends React.Component {
  state = {
    projects: ""
  }
  componentDidMount(){
    this.callApi()
    .then(result => this.setState({projects:result}))
    .catch(error => console.log('error', error));
  }

  callApi = async () =>{
    var myHeaders = new Headers();
    myHeaders.append("Access-Control-Allow-Headers", "Content-Type");
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Access-Control-Allow-Methods", "OPTIONS,POST,GET");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Token 13bc8256196bcf1d297e80b136855ba7d0ec46a6");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("credentials", "include");
   

    var raw = "";

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(raw),
      redirect: 'follow'
    };
    const response = await fetch("http://116.89.189.12/projects", requestOptions);
    const body = await response.json();
    console.log(body);
    return body;
   
    
  }

  render() {
    return (
      <div>
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
            <div className="project-bar__column new-project-btn__column">
              <Link className="new-project-btn" to="/project/new_project">
                New Project
              </Link>
            </div>
          </div>
          <div className="project-list">
    <div className="project-list__column">
        <div className="project-list__data">{this.props.Date}</div>
        <div className="project-list__data">{this.props.Name}</div>
        <div className="project-list__data">{this.props.Architecture}</div>
        <div className="project-list__data">{this.props.Storage}</div>
    </div>
    <div className="project-list__column">
      <div className="project-list__btns">
        <div className="project-train-btn">Train</div>
        <div className="project-test-btn">Test</div>
      </div>
    </div>
  </div>
          {this.state.projects ? this.state.projects.map(p=>{
            return <Projectls key={p.id} Date={p.Date} Name={p.Name} Architecture={p.Architecture} Storage={p.Storage}/>
          }):""}
        </main>
      </div>
    );
  }
}

export default Project;
