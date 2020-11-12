import React from "react";
import "./Project.css";
import { Link } from "react-router-dom";
import Dropzone from "react-dropzone";
import classNames from "classnames";

const imageMaxSize = 10000000; //bytes
const acceptedFileTypes =
  "image/x-png, image/png, image/jpg, image/jpeg, image/gif";
const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {
  return item.trim();
});

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: null,
    };
  }
  verifyFile = (files) => {
    if (files && files.length > 0) {
      const currentFile = files[0];
      const currentFileType = currentFile.type;
      const currentFileSize = currentFile.size;
      if (currentFileSize > imageMaxSize) {
        alert(
          "이 파일은 허용되지 않습니다." +
          imageMaxSize +
          "bytes이하의 파일을 업로드해주세요."
        );
        return false;
      }
      if (!acceptedFileTypesArray.includes(currentFileType)) {
        alert("이미지 파일만 업로드 가능합니다.");
        return false;
      }
      return true;
    }
  };
  handleOnDrop = (files, rejectedFiles) => {
    if (rejectedFiles && rejectedFiles.length > 0) {
      this.verifyFile(rejectedFiles);
    }
    if (files && files.length > 0) {
      const isVerified = this.verifyFile(files);
      if (isVerified) {
        //imageBase64Data
        const currentFile = files[0];
        const MyFileItemReader = new FileReader();
        MyFileItemReader.addEventListener(
          "load",
          () => {
            console.log(MyFileItemReader.result);
            this.setState({
              imgSrc: MyFileItemReader.result,
            });
          },
          false
        );
        MyFileItemReader.readAsDataURL(currentFile);
      }
    }
  };

  render() {
    const { imgSrc } = this.state;
    return (
      <body>
        <header className="header">
          <div className="header__center">
            <div className="header__title">홈 화면 / 프로젝트</div>
          </div>
        </header>
        <main>
          <div className="project-bar">
            <div className="project-bar__column">
              <div className="project-bar__title">날짜</div>
              <div className="project-bar__title">프로젝트 이름</div>
            </div>
            <div className="project-bar__column new-project-btn__column">
              <Link className="new-project-btn" to="/project/new_project">
                새 프로젝트 생성
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
                <div className="project-train-btn project-btn">학습시키기</div>
                <div className="project-test-btn project-btn">테스트</div>
                {imgSrc !== null ? (
                  <div>
                    <Dropzone
                      onDrop={this.handleOnDrop}
                      accept={acceptedFileTypes}
                      className="drop_zone"
                    >
                      {({ getRootProps, getInputProps, isDragActive }) => {
                        return (
                          <div
                            {...getRootProps()}
                            className={classNames("project-download-btn", {
                              "dropzone--isActive": isDragActive,
                            })}
                          >
                            <input {...getInputProps()} />
                            {isDragActive ? (
                              <p>Drop files here...</p>
                            ) : (
                                <div>
                                  다운로드
                                </div>
                              )
                            }
                          </div>
                        );
                      }}
                    </Dropzone>
                  </div>
                ) : (
                    <div>
                      <Dropzone
                        onDrop={this.handleOnDrop}
                        accept={acceptedFileTypes}
                        className="drop_zone"
                      >
                        {({ getRootProps, getInputProps, isDragActive }) => {
                          return (
                            <div
                              {...getRootProps()}
                              className={classNames("project-download-btn", {
                                "dropzone--isActive": isDragActive,
                              })}
                            >
                              <input {...getInputProps()} />
                              {isDragActive ? (
                                <p>Drop files here...</p>
                              ) : (
                                  <div>
                                    다운로드
                                  </div>
                                )
                              }
                            </div>
                          );
                        }}
                      </Dropzone>
                    </div>
                  )}
              </div>
            </div>
          </div>
          {/* <div className="project-lists2">
            <div className="no_project">프로젝트가 존재하지 않습니다.</div>
          </div> */}
        </main>
      </body >
    );
  }
}

export default Project;
