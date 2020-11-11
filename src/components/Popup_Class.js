import React from "react";
import "./Popup_class.css";
import InputColor from "react-input-color";

function Color_Setting(color_state) {
  const [color, setColor] = React.useState({});
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
  state = {
    color_state: "FF0000",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value),
    }); //치는거 바뀔떄마다 데이터 변경
  };
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <div className="popup_inner__center">
            <div className="popup_class__title">클래스 생성하기</div>
            <div className="popup_class__main">
              <div className="popup_class__name">
                <div className="popup_class__name_que">클래스 이름 :</div>
                <div className="popup_class__name_ex">title1</div>
              </div>
              <div className="popup_class__description">
                <div className="popup_class__description_que">
                  설명 :
                </div>
                <input className="popup_class__description_ex" />
              </div>
              <div className="popup_class__key">
                <div className="popup_class__key_que">단축키 :</div>
                <input value="a" className="popup_class__key_ex" />
              </div>
              <div className="popup_class__color">
                <div className="popup_class__color_que">색 :</div>
                <div className="popup_class__color_ex">
                  <div className="popup_class__color_cir">
                    <Color_Setting />
                  </div>
                  <input
                    value={this.state.color_state}
                    type="text"
                    className="popup_class__color_txt"
                  />
                </div>
              </div>
              <div className="popup_class_description"></div>
            </div>
            <div className="class_create__close">
              <button
                id="class_create__close_btn"
                onClick={this.props.closePopup}
              >
                저장
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup_Class;
