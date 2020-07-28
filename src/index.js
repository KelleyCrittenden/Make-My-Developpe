import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Developpe from "./components/Developpe";
import './index.css';


ReactDOM.render(
  <Router>

    <Developpe />,

  </Router>,
  document.getElementById("root")
  );

