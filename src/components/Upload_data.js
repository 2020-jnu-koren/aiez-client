import React from "react";
import classNames from "classnames";
import Dropzone from "react-dropzone";
import ReactCrop from "react-image-crop";
import "./Upload_data.css";

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
      <div className="App">
        <body>
          <header className="header">
            <div className="header__center">
              <div className="header__title">
                Home Project New project Upload Data
              </div>
            </div>
          </header>
          <main>
            <div className="upload_data__title">Upload Data</div>
            <div>
              <div>
                {imgSrc !== null ? (
                  <div>
                    <img src={imgSrc} art="hihi" />
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
                              Try dropping some files here, or click to select
                              files to upload.
                            </p>
                          )}
                        </div>
                      );
                    }}
                  </Dropzone>
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
