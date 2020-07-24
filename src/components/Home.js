import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <main className="home_content">
        <div className="intro">
          <div className="intro_info intro_item">
            AIEZ is a perfect website for deep learning! <br></br>
            Awesome! Beautiful! Amazing! Try this right now!
          </div>
          <div className="intro_image intro_item">
            This will be filled with an awesome image!
          </div>
        </div>
        <Link className="goToProject" to="/project/new_project">
          NOW GET STARTED!
        </Link>
      </main>
    );
  }
}

export default Home;
