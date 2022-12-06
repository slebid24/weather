import Wrapper from "../wrapper/Wrapper";
import React from "react";
// import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wrapper isEmptyLink={true} />} />
        <Route path="/:geodata" element={<Wrapper isEmptyLink={false} />} />
      </Routes>
    </Router>
  );
};

export default App;
