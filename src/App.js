import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import New_project from "./components/New_project";
import More_models from "./components/More_models";
import Upload_data from "./components/Upload_data";
import Prepare_data from "./components/Prepare_data";
import Train_data from "./components/Train_data";
import Labeling from "./components/Labeling";
import Setting from "./components/Setting";
import Navigation from "./components/Navigation";
import Train_result from "./components/Train_result";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/project" exact={true} component={Project} />
      <Route path="/project/new_project" exact={true} component={New_project} />
      <Route path="/more_models" component={More_models} />
      <Route path="/project/new_project/upload_data" component={Upload_data} />
      <Route
        path="/project/new_project/prepare_data"
        component={Prepare_data}
      />
      <Route
        path="/project/new_project/train_data"
        exact={true}
        component={Train_data}
      />
      <Route
        path="/project/new_project/labeling"
        exact={true}
        component={Labeling}
      />
      <Route
        path="/project/new_project/train_data/setting"
        component={Setting}
      />
      <Route
        path="/project/new_project/train_result"
        component={Train_result}
      />
    </HashRouter>
  );
}

export default App;
