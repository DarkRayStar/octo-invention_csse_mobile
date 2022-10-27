import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sample from "./passenger-components/sample.component";
import SampleTwo from "./passenger-components/sample.component.two";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Sample />} />
      <Route path="/one" element={<Sample />} />
      <Route path="/two" element={<SampleTwo />} />
    </Routes>
  </Router>
);

export default App;