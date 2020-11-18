import React from "react";
import "./Labeling.css";
import downArrow from "./img/downArrow.svg";
import { Link } from "react-router-dom";
import InteractiveList from "./TestDataset_list";
import ReactLoading from "react-loading";
import { RESTURL } from "../services/common";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";

class Testing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model: null,
      showPopup: false,
      uploadImageList: [],
      index: 0
    };
  }
  componentDidMount() {
    if (this.props.location.state?.uploadImageList) {
      this.setState({
        uploadImageList: this.props.location.state.uploadImageList
      });
    }
    cocoSsd.load().then(model => {
      console.log("model : ", model);
      this.setState({
        model: model
      });
    });
  }
  onImageChange = e => {
    const c = document.getElementById("canvas");
    const ctx = c.getContext("2d");
    this.cropToCanvas(e.target, c, ctx);
    this.state.model.detect(c).then(predictions => {
      console.log("predictions : ", predictions);
      // Font options.
      const font = "16px sans-serif";
      ctx.font = font;
      ctx.textBaseline = "top";

      predictions.forEach(prediction => {
        const x = prediction.bbox[0];
        const y = prediction.bbox[1];
        const width = prediction.bbox[2];
        const height = prediction.bbox[3];
        // Draw the bounding box.
        ctx.strokeStyle = "#00FFFF";
        ctx.lineWidth = 4;
        ctx.strokeRect(x, y, width, height);
        // Draw the label background.
        ctx.fillStyle = "#00FFFF";
        const textWidth = ctx.measureText(prediction.class).width;
        const textHeight = parseInt(font, 10); // base 10
        ctx.fillRect(x, y, textWidth + 4, textHeight + 4);
      });

      predictions.forEach(prediction => {
        const x = prediction.bbox[0];
        const y = prediction.bbox[1];
        // Draw the text last to ensure it's on top.
        ctx.fillStyle = "#000000";
        ctx.fillText(prediction.class, x, y);
      });
    });
  };

  cropToCanvas = (image, canvas, ctx) => {
    const naturalWidth = image.naturalWidth;
    const naturalHeight = image.naturalHeight;

    canvas.width = image.width;
    canvas.height = image.height;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    if (naturalWidth > naturalHeight) {
      ctx.drawImage(
        image,
        (naturalWidth - naturalHeight) / 2,
        0,
        naturalHeight,
        naturalHeight,
        0,
        0,
        ctx.canvas.width,
        ctx.canvas.height
      );
    } else {
      ctx.drawImage(
        image,
        0,
        (naturalHeight - naturalWidth) / 2,
        naturalWidth,
        naturalWidth,
        0,
        0,
        ctx.canvas.width,
        ctx.canvas.height
      );
    }
  };

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  setIndex = index => {
    this.setState({ index });
  };

  render() {
    const { uploadImageList, index } = this.state;

    return (
      <body>
        <header className="header">
          <div className="header__center">
            <div className="header__title">라벨링</div>
          </div>
        </header>
        <main>
          <div className="labeling">
            <div className="labeling_frame">
              <div className="labeling_frame__main">
                <div className="labeling_img__title">
                  <button
                    onClick={() => {
                      this.setState(prevState => ({
                        index: Math.max(prevState.index - 1, 0)
                      }));
                    }}
                  >
                    <img
                      ref={this.img}
                      className="labeling_img__pre"
                      src={downArrow}
                      alt="img"
                    />
                  </button>
                  <div className="labeling_img__name">
                    {uploadImageList[index]?.path.replace("upload/images/", "")}
                  </div>
                  <button
                    onClick={() => {
                      this.setState(prevState => ({
                        index: Math.min(
                          prevState.index + 1,
                          uploadImageList.length - 1
                        )
                      }));
                    }}
                  >
                    <img
                      className="labeling_img__next"
                      src={downArrow}
                      alt="img"
                    />
                  </button>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  {this.state.model === null ? (
                    <ReactLoading
                      type={"spin"}
                      color={"#aec6cf"}
                      height={600}
                      width={600}
                    />
                  ) : (
                    <>
                      <img
                        style={{ width: "50%", height: "50%" }}
                        src={RESTURL + "/" + uploadImageList[index]?.path}
                        onLoad={this.onImageChange}
                        crossorigin="anonymous"
                      />
                      <canvas id="canvas" />
                    </>
                  )}
                </div>
              </div>
              <div className="testing_data__summary">
                <div
                  style={{
                    display: "flex",
                    height: "100%"
                  }}
                >
                  <InteractiveList
                    uploadImageList={uploadImageList}
                    setIndex={this.setIndex}
                  />
                </div>
              </div>
            </div>
            <div className="labeling_save">
              <div className="labeling_save_center">
                <Link
                  className="labeling_save__btn"
                  to="/project/new_project/train_data/setting"
                >
                  학습하기
                </Link>
              </div>
            </div>
          </div>
        </main>
      </body>
    );
  }
}

export default Testing;
