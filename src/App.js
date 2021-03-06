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
import Train from "./components/Train";
import Test from "./components/Test";
import Login from "./components/Login";
import Test_Upload_data from "./components/Test_Upload_data";
import Testing from "./components/Testing";

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
        path="/project/test_project/upload_data"
        component={Test_Upload_data}
      />
      <Route
        path="/project/test_project/testing"
        exact={true}
        component={Testing}
      />
      <Route
        path="/project/new_project/train_data/setting"
        component={Setting}
      />
      <Route path="/project/new_project/train" component={Train} />
      <Route path="/project/test" component={Test} />
      <Route path="/login" component={Login} />
    </HashRouter>
  );
}

export default App;
