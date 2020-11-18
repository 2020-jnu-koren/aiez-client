import React from "react";
import "./New_project.css";
import { Link } from "react-router-dom";
import upload from "./img/upload.jpg";
import labeling from "./img/labeling.jpg";
import lastone from "./img/lastone.jpg";
import { getProjectById, postProject } from "../services/project";

class New_project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createProjectId: ""
    };
  }

  componentDidMount() {
    this.createProject();
  }

  async createProject() {
    const getProjectResult = await getProjectById();
    const projectCount = getProjectResult.data.length;
    console.log("result : ", getProjectResult.data);
    console.log("projectCount : ", projectCount);
    const postProjectResult = await postProject({
      title: projectCount + 1 + "_project"
    });
    const createProjectId = postProjectResult.data._id;
    this.setState({ createProjectId });
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
          <div className="Btns">
            <div className="BtnNNumber">
              <div className="Btn_number">1</div>
              <Link
                to={{
                  pathname: "/project/new_project/upload_data",
                  state: { projectId: this.state.createProjectId }
                }}
              >
                <div className="Btn">
                  <div className="Btn_img Btn_item">
                    <img className="Btn_img" src={upload} alt="img" />
                  </div>
                  <div className="Btn_info Btn_item">이미지를 업로드하세요</div>
                </div>
              </Link>
            </div>
            <div className="BtnNNumber">
              <div className="Btn_number">2</div>
              <Link to="/project/new_project/prepare_data">
                <div className="Btn">
                  <div className="Btn_img Btn_item">
                    <img className="Btn_img" src={labeling} alt="img" />
                  </div>
                  <div className="Btn_info Btn_item">
                    데이터셋을 라벨링하세요
                  </div>
                </div>
              </Link>
            </div>
            <div className="BtnNNumber">
              <div className="Btn_number">3</div>
              <Link to="/project/new_project/train_data">
                <div className="Btn">
                  <div className="Btn_img Btn_item">
                    <img className="Btn_img" src={lastone} alt="img" />
                  </div>
                  <div className="Btn_info Btn_item">학습시키세요!</div>
                </div>
              </Link>
            </div>
          </div>
        </main>
      </body>
    );
  }
}

export default New_project;
