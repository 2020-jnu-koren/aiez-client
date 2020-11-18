import React from "react";
import "./Project.css";
import { format } from "date-fns";
import { Link } from "react-router-dom";

class Projectls extends React.Component {
  render() {
    console.log("[projectls] this.props : ", this.props);

    return (
      <div className="project-list">
        <div className="project-list_info">
          <div className="project_date">
            {format(new Date(this.props.Date), "yyyy.MM.dd")}
          </div>
          <div className="project_name">{this.props.Name}</div>
        </div>
        <div className="project-btns">
          <div className="project-train-btn project-btn">
            <Link
              to={{
                pathname: "/project/new_project/upload_data",
                state: { projectId: this.props.id }
              }}
            >
              학습하기
            </Link>
          </div>
          <div className="project-test-btn project-btn">테스트</div>
        </div>
      </div>
    );
  }
}

export default Projectls;
