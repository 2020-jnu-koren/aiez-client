import React from "react";
import "./Project.css";
import { format } from "date-fns";
class Projectls extends React.Component {
  render() {
    return (
      <div className="project-lists">
        <div className="project-list">
          <div className="project-list_info">
            <div className="project_date">
              {format(new Date(this.props.Date), "yyyy.MM.dd")}
            </div>
            <div className="project_name">{this.props.Name}</div>
          </div>
          <div className="project-btns">
            <div className="project-train-btn project-btn">Train</div>
            <div className="project-test-btn project-btn">Test</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projectls;
