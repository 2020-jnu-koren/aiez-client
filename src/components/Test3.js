import React from "react";
import "./Test.css";
import "./Labeling.css";
import "./Popup_class.css";
import downArrow from "./img/downArrow.svg";
import area_selection from "./img/area_selection.svg";
import cursor from "./img/cursor.svg";
import drag from "./img/drag.svg";
import { Link } from "react-router-dom";
import Test2 from "./Test2.js";
import classNames from "classnames";
import Dropzone from "react-dropzone";
import ReactCrop from "react-image-crop";
import "./cutom-image-crop.css";
import { image64toCanvasRef } from "./ResuableUtils";

const imageMaxSize = 10000000; //bytes
const acceptedFileTypes =
  "image/x-png, image/png, image/jpg, image/jpeg, image/gif";
const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {
  return item.trim();
});

class Popup_Class extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <div className="popup_inner__center">
            <div className="popup_class__title">Create Class</div>
            <div className="popup_class__main">
              <div className="popup_class__name">
                <div className="popup_class__name_que">Class Name :</div>
                <div className="popup_class__name_ex">title1</div>
              </div>
              <div className="popup_class__description">
                <div className="popup_class__description_que">
                  Description :
                </div>
                <div className="popup_class__description_ex"></div>
              </div>
              <div className="popup_class__key">
                <div className="popup_class__key_que">Hot Key :</div>
                <div className="popup_class__key_ex">a</div>
              </div>
              <div className="popup_class__color">
                <div className="popup_class__color_que">Color :</div>
                <div className="popup_class__color_ex">
                  <div className="popup_class__color_cir"></div>
                  <div className="popup_class__color_txt">FF0000</div>
                </div>
              </div>
              <div className="popup_class_description"></div>
            </div>
            <div className="class_create__close">
              <button
                id="class_create__close_btn"
                onClick={this.props.closePopup}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.imagePreviewCanvasRef = React.createRef();
    this.state = {
      showPoput: false,
      imgSrc: null,
      crop: {
        aspect: 1 / 1,
      },
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
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
  handleImageLoaded = (image) => {
    //console.log(image)
  };
  handleOnCropChange = (crop) => {
    this.setState({ crop: crop });
  };
  handleOnCropComplete = (crop, pixelCrop) => {
    console.log(crop, pixelCrop);
  };
  render() {
    const { imgSrc } = this.state;
    return (
      <body>
        <header className="header">
          <div className="header__center">
            <div className="header__title">Test</div>
          </div>
        </header>
        <main>
          <div className="labeling">
            <div className="labeling_frame">
              <div className="labeling_frame__tools">
                <div className="tools_center">
                  <img className="labeling_tool__drag" src={drag} alt="img" />
                  <img
                    className="labeling_tool__area"
                    src={area_selection}
                    alt="img"
                  />
                  <img
                    className="labeling_tool__cursor"
                    src={cursor}
                    alt="img"
                  />
                </div>
              </div>
              <div className="labeling_frame__main">
                <div className="labeling_img__title">
                  <img
                    className="labeling_img__pre"
                    src={downArrow}
                    alt="img"
                  />
                  <div className="labeling_img__name">Image Name</div>
                  <img
                    className="labeling_img__next"
                    src={downArrow}
                    alt="img"
                  />
                </div>
                <div className="labeling_img__main">
                  <div>
                    {imgSrc !== null ? (
                      <div>
                        <ReactCrop
                          src={imgSrc}
                          crop={this.state.crop}
                          onImageLoaded={this.handleOnCropChange}
                          onComplete={this.handleOnCropComplete}
                          onChange={this.handleOnCropChange}
                        />
                        <br />
                        <p>Preview Canvas Crop</p>
                        <canvas ref={this.imagePreviewCanvas}></canvas>
                      </div>
                    ) : (
                      <Dropzone
                        onDrop={this.handleOnDrop}
                        accept={acceptedFileTypes}
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
                                  Try dropping some files here, or click to
                                  select files to upload.
                                </p>
                              )}
                            </div>
                          );
                        }}
                      </Dropzone>
                    )}
                  </div>
                </div>
              </div>
              <div className="labeling_data__summary">
                <div className="labeling_dataset__title">Dataset Name</div>
                <div className="labeling_dataset__main">
                  <div className="labeling_dataset__ex">
                    <div className="labeling_dataset__img"></div>
                    <div className="labeling_dataset__writing">
                      <div className="labeling_dataset__name">image name</div>
                      <div className="labeling_dataset__description">
                        Description
                      </div>
                    </div>
                  </div>
                </div>
                <div className="labeling_class__bar">
                  <div className="class_bar__color">Color</div>
                  <div className="class_bar__name">Class Name</div>
                  <div className="class_bar__key">Hot Key</div>
                </div>
                <div className="class_list">
                  <div className="class_list__ex">
                    <div className="class_list__color"></div>
                    <div className="class_list__name">title1</div>
                    <div className="class_list__key">a</div>
                  </div>
                </div>
                <div className="class_create">
                  <button
                    id="class_create__btn"
                    onClick={this.togglePopup.bind(this)}
                  >
                    Create Class
                  </button>
                  {this.state.showPopup ? (
                    <Popup_Class closePopup={this.togglePopup.bind(this)} />
                  ) : null}
                </div>
              </div>
            </div>
            <Link
              className="labeling_save"
              to="/project/new_project/train_data/setting"
            >
              <div className="labeling_save_center">
                <div className="labeling_save__btn">Save</div>
              </div>
            </Link>
          </div>
        </main>
        <div className="container">
          <div></div>
        </div>
        <Test2 />
      </body>
    );
  }
}

export default Test;
