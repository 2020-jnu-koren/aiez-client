import React from "react";
import "./Prepare_data.css";
import { Link } from "react-router-dom";

class Prepare_data extends React.Component {
  render() {
    return (
      <div className="App">
        <body>
          <header className="header">
            <div className="header__center">
              <div className="header__title">
                Home > Project > New project > Prepare Dataset
              </div>
            </div>
          </header>
          <main>
            <div className="my_library">My Library</div>
            <div className="library_list">
              <Link
                className="library_list_ex"
                to="/project/new_project/labeling"
              >
                <div className="library_list__num">500</div>
                <div className="library_list__title">dataset1</div>
              </Link>
            </div>
          </main>
        </body>
      </div>
    );
  }
}

export default Prepare_data;
