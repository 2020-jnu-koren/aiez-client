import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import background from "./img/background.jpg";

class Home extends React.Component {
  render() {
    return (
      <main className="home_content">
        <div className="intro">
          <div className="intro_info">
            <div className="main_info">NET 챌린지 화이팅!!</div>
            <div className="sub_info">
              여러분 모두 힘내세요~ 코로나 싫어~! KOREN과 함께하는 ~ 집에 갈래!
            </div>
          </div>
          <img className="intro_background" src={background} alt="img"></img>
        </div>
        <Link className="goToProject" to="/project/new_project">
          NOW GET STARTED!
        </Link>
      </main>
    );
  }
}

export default Home;
