import React, { Component } from "react";
import "./App.css";
import logo from "./img/favicon.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import CodeofConduct from "./Components/CodeofConduct";
import Faq from "./Components/Faq";
import Home from "./Components/Home";
import Speakers from "./Components/Speakers";
import Partners from "./Components/Partners"

function App() {
  return (
    <BrowserRouter BrowserRouter>
      <div className="App">

        {/* navbar */}
        {/* <nav className="flex">
          <div className="flex maxwidth navbar">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="flex navComp">
            <div className="linkbox">
              <Link className="link" exact to="#Home" smooth>Home</Link>
            </div>
            <div className="linkbox">
              <Link className="link" to="#Speakers" smooth>Speakers</Link>
            </div>
            <div className="linkbox">
              <Link className="link" to="#Faq" smooth>Faq</Link>
            </div>
          </div>
          </div>
        </nav> */}

        {/* Content */}
        <div className="content">
          <Home/>
          <Speakers/>
          <CodeofConduct/>
          {/* <Faq/> */}
          <Partners/>
        
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
