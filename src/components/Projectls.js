import React from 'react';
import "./Project.css";

class Projectls extends React.Component {
render() {
return (
    <div className="project-list">
    <div className="project-list__column">
        <div className="project-list__data">{this.props.Date}</div>
        <div className="project-list__data">{this.props.Name}</div>
    </div>
    <div className="project-list__column">
      <div className="project-list__btns">
        <div className="project-train-btn">Train</div>
        <div className="project-test-btn">Test</div>
      </div>
    </div>
  </div>
)
}
}

export default Projectls;


