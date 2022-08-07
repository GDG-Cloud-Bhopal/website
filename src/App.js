import React, { Component, useState } from "react";
import "./App.css";
import "./nav.css";
import logo from "./img/cloudbhopal.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import CodeofConduct from "./Components/CodeofConduct";
import Faq from "./Components/Faq";
import Home from "./Components/Home";
import Speakers from "./Components/Speakers";
import Partners from "./Components/Partners"
import Footer from "./Components/Footer"

function App() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <BrowserRouter BrowserRouter>
      <div className="App">

        <nav className="main-nav">
          <div className="logo">
          <img src={logo} alt="" />
          </div>

          {/* 2nd menu part  */}
          <div
            className={
              showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
            }>
            <ul>
              <li>
              <Link className="link" exact to="#flex" smooth>Home</Link>
              </li>
              <li>
              <Link className="link" to="#Speakers" smooth>Speakers</Link>
              </li>
              <li>
              <Link className="link" to="#Faq" smooth>Faq</Link>
              </li>
              
            </ul>
          </div>

          <div className="social-media">
            {/* hamburget menu start  */}
            <div className="hamburger-menu">
              <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 " x-show="!showMenu" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </a>
            </div>
          </div>
        </nav>


        {/* Content */}
        <div className="content">
          <Home />
          <Speakers />
          <CodeofConduct />
          <Faq />
          <Partners />
          <Footer />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
