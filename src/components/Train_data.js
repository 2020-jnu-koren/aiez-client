import React from "react";
import "./Train_data.css";
import { Link } from "react-router-dom";

class Train_data extends React.Component {
  render() {
    return (
      <div className="App">
        <body>
          <header className="header">
            <div className="header__center">
              <div className="header__title">
                Home / Project / New project / Train Dataset
              </div>
            </div>
          </header>
          <main>
            <div className="my_label">Labeling Library</div>
            <div className="label_list">
              <Link
                className="label_list_ex"
                to="/project/new_project/train_data/setting"
              >
                <div className="label_list__num">500</div>
                <div className="label_list__title">dataset1</div>
              </Link>
            </div>
          </main>
        </body>
      </div>
    );
  }
}

export default Train_data;
