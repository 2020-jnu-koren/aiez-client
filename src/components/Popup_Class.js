import React, { useEffect } from "react";
import "./Popup_class.css";
import InputColor from "react-input-color";

function Color_Setting({ changeColor }) {
  const [color, setColor] = React.useState("");

  useEffect(() => {
    changeColor(color.hex);
  }, [color]);

  return (
    <div>
      <InputColor
        className="class_color__input"
        initialValue="#ff0000"
        onChange={setColor}
        placement="right"
      />
    </div>
  );
}

class Popup_Class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customClassName: "",
      hotkey: "",
      description: "",
      color: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    }); //치는거 바뀔떄마다 데이터 변경
  };

  changeColor = color => {
    this.setState({ color });
  };

  render() {
    const { closePopup, setStateClassList, classList } = this.props;
    const { customClassName, hotkey, description, color } = this.state;
    return (
      <div className="popup">
        <div className="popup_inner">
          <div className="popup_inner__center">
            <div className="popup_class__title">클래스 만들기</div>
            <div className="popup_class__main">
              <div className="popup_class__name">
                <div className="popup_class__name_que">클래스 이름 :</div>
                <input
                  name="customClassName"
                  className="popup_class__description_ex"
                  onChange={this.handleChange}
                />
              </div>
              <div className="popup_class__description">
                <div className="popup_class__description_que">설명 :</div>
                <input
                  name="description"
                  className="popup_class__description_ex"
                />
              </div>
              <div className="popup_class__key">
                <div className="popup_class__key_que">단축키 :</div>
                <input
                  name="hotkey"
                  className="popup_class__key_ex"
                  onChange={this.handleChange}
                />
              </div>
              <div className="popup_class__color">
                <div className="popup_class__color_que">색깔 :</div>
                <div className="popup_class__color_ex">
                  <div className="popup_class__color_cir">
                    <Color_Setting changeColor={this.changeColor} />
                  </div>
                  <span style={{ fontSize: 16, fontStyle: "bold" }}>
                    {this.state.color}
                  </span>
                </div>
              </div>
              <div className="popup_class_description"></div>
            </div>
            <div className="class_create__close">
              <button
                id="class_create__close_btn"
                onClick={() => {
                  closePopup();
                  setStateClassList(
                    classList.concat([
                      {
                        customClassName,
                        hotkey,
                        description,
                        color
                      }
                    ])
                  );
                }}
              >
                저장하기
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup_Class;
