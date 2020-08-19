import React from "react";
import "./Popup_class.css";

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

export default Popup_Class;
