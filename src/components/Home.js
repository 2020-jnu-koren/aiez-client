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
            <div className="main_info">KOREN과 함께하면 어렵지 않아요!</div>
            <div className="sub_info">학생 대상 컨테이너 기반 클라우드 AI플랫폼</div>
          </div>
          <img className="intro_background" src={background} alt="img"></img>
        </div>
        <Link className="goToProject" to="/project/new_project">
          시작하기
        </Link>
        {/* <Link className="login_btn" to="/login">
          LogIn
        </Link> */}
      </main>
    );
  }
}

export default Home;
