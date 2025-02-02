import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import About from "./containers/About";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from "./containers/Contact";
import Work from "./containers/Work";
import Portfolio from "./containers/Portfolio";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/work' element={<Work />}></Route>
          <Route path='/portfolio' element={<Portfolio/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
