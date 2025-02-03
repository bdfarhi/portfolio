import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import About from "./containers/About";
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from "./containers/Contact";
import Work from "./containers/Work";
import Portfolio from "./containers/Portfolio";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/portfolio/about' element={<About/>}></Route>
          <Route path='/portfolio/contact' element={<Contact/>}></Route>
          <Route path='/portfolio/work' element={<Work />}></Route>
          <Route path='/portfolio/projects' element={<Portfolio/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
