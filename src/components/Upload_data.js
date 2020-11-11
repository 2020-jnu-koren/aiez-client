import React from "react";
import classNames from "classnames";
import Dropzone from "react-dropzone";
import "./Upload_data.css";
import InteractiveList from "./Uploaded_data_list.js";
import Popup_Upload from "./Popup_Upload.js";

const imageMaxSize = 10000000; //bytes
const acceptedFileTypes =
  "image/x-png, image/png, image/jpg, image/jpeg, image/gif";
const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {
  return item.trim();
});

class Upload_data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: null,
      showPopup: false,
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
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  render() {
    const { imgSrc } = this.state;
    return (
      <div className="App">
        <body>
          <header className="header">
            <div className="header__center">
              <div className="header__title">
                홈 화면 / 프로젝트 / 새 프로젝트 / 데이터 업로드
              </div>
            </div>
          </header>
          <main className="upload_data_main">
            <div className="upload_data__title">데이터 업로드</div>
            <div>
              <div>
                {imgSrc !== null ? (
                  <div>
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
                              className={classNames("dropzone", {
                                "dropzone--isActive": isDragActive,
                              })}
                            >
                              <input {...getInputProps()} />
                              {isDragActive ? (
                                <p>Drop files here...</p>
                              ) : (
                                  <p>
                                    파일을 드래그 하거나, 클릭하여 파일을
                                    선택하세요.
                                  </p>
                                )}
                            </div>
                          );
                        }}
                      </Dropzone>
                    </div>
                    <div className="uploaded_date_list">
                      <InteractiveList />
                      <div className="upload_save">
                        <button
                          id="upload_save__btn"
                          onClick={this.togglePopup.bind(this)}
                        >
                          저장하기
                        </button>
                        {this.state.showPopup ? (
                          <Popup_Upload
                            closePopup={this.togglePopup.bind(this)}
                          />
                        ) : null}
                      </div>
                    </div>
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
                              className={classNames("dropzone", {
                                "dropzone--isActive": isDragActive,
                              })}
                            >
                              <input {...getInputProps()} />
                              {isDragActive ? (
                                <p>Drop files here...</p>
                              ) : (
                                  <p>
                                    파일을 드래그 하거나, 클릭하여 파일을
                                    선택하세요.
                                  </p>
                                )}
                            </div>
                          );
                        }}
                      </Dropzone>
                    </div>
                  )}
              </div>
            </div>
          </main>
        </body>
      </div>
    );
  }
}

export default Upload_data;
