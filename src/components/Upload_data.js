import React from "react";
import classNames from "classnames";
import Dropzone from "react-dropzone";
import "./Upload_data.css";
import InteractiveList from "./Uploaded_data_list.js";
import { getImage, postImage } from "../services/image";
import { getProject } from "../services/project";
import { Link } from "react-router-dom";

const imageMaxSize = 10000000; //bytes
const acceptedFileTypes =
  "image/x-png, image/png, image/jpg, image/jpeg, image/gif";
const acceptedFileTypesArray = acceptedFileTypes.split(",").map(item => {
  return item.trim();
});

class Upload_data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadImageList: [],
      showPopup: false
    };
  }

  componentDidMount() {
    console.log("this.props.location : ", this.props.location);
    this._getProject(this.props.location.state.projectId);
  }

  _getProject = async projectId => {
    const result = await getProject(projectId);
    const imageList = [];
    result.data.images.forEach(async (imageId, index) => {
      const imageResult = await getImage(imageId);
      imageList.push(imageResult.data);
      if (index === result.data.images.length - 1) {
        this.setState({
          uploadImageList: this.state.uploadImageList.concat(imageList)
        });
      }
    });
  };

  verifyFile = files => {
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
  handleOnDrop = async (files, rejectedFiles) => {
    if (rejectedFiles && rejectedFiles.length > 0) {
      this.verifyFile(rejectedFiles);
    }
    if (files && files.length > 0) {
      const isVerified = this.verifyFile(files);
      if (isVerified) {
        console.log("[upload_data] files : ", files);
        //imageBase64Data
        const data = new FormData();
        data.append("projectId", this.props.location.state.projectId);
        for (let i = 0; i < files.length; i += 1) {
          data.append("img", files[i]);
        }
        const result = await postImage(data);
        console.log("[upload_data] result : ", result);
        this.setState({
          uploadImageList: this.state.uploadImageList.concat(result.data)
        });
      }
    }
  };

  render() {
    const { imgSrc, uploadImageList } = this.state;
    console.log("uploadImageList : ", uploadImageList);
    return (
      <div className="App">
        <body>
          <header className="header">
            <div className="header__center">
              <div className="header__title">
                Home / Project / New project/ Upload / Data
              </div>
            </div>
          </header>
          <main className="upload_data_main">
            <div className="upload_data__title">Upload Data</div>
            <div>
              <div>
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
                              "dropzone--isActive": isDragActive
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
                    {uploadImageList.length !== 0 && (
                      <InteractiveList
                        uploadImageList={this.state.uploadImageList}
                      />
                    )}
                    <div className="upload_save">
                      <Link
                        id="upload_save__btn"
                        to={{
                          pathname: "/project/new_project/labeling",
                          state: { uploadImageList: this.state.uploadImageList }
                        }}
                      >
                        라벨링
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </body>
      </div>
    );
  }
}

export default Upload_data;
