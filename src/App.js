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
import Navigation from "./components/Navigation";

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
    </HashRouter>
  );
}

export default App;
