import React from "react";
import InputColor from "react-input-color";

class Test extends React.Component {
  reder() {
    const [color, setColor] = React.useState({});

    return (
      <div>
        <InputColor
          initialValue="#5e72e4"
          onChange={setColor}
          placement="right"
        />
        <div
          style={{
            width: 50,
            height: 50,
            marginTop: 20,
            backgroundColor: color.rgba,
          }}
        />
      </div>
    );
  }
}

export default Test;
