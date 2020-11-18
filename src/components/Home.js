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
            <div className="sub_info">컨테이너 기반 클라우드 AI 웹 플랫폼</div>
          </div>
          <img className="intro_background" src={background} alt="img"></img>
        </div>
        <Link className="login_btn" to="/login">
          시작하기
        </Link>
      </main>
    );
  }
}

export default Home;
