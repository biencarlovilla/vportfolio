import React from "react";
import "./style.css";

const Main = () => {
  return (
    <React.Fragment>
     <header id="header">
    <div class="main_nav">
      <div class="container">
        <div class="mobile-toggle"> <span></span> <span></span> <span></span> </div>
        <nav>
          <ul>
            <li><a class="smoothscroll" href="#header">Home</a></li>
            <li><a class="smoothscroll" href="#about">About</a></li>
            <li><a class="smoothscroll" href="#portfolio">Portfolio</a></li>
            <li><a class="smoothscroll" href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="title">
      <h1 class="animate__animated animate__fadeIn">Biencarlo Villa</h1>

      <h2 class="animate__animated animate__fadeIn animate__delay-1s"> Full Stack Flex Web Developer</h2>

      <div class="smallsep heading animate__animated animate__fadeIn animate__delay-1s"></div>
      
      
      <i class="chess knight icon animate__animated animate__fadeIn animate__delay-4s"></i>

      <i class="chess pawn icon animate__animated animate__fadeIn animate__delay-3s"></i>

      <i class="chess queen icon animate__animated animate__fadeIn animate__delay-5s"></i>

      <i class="chess king icon animate__animated animate__fadeIn animate__delay-2s"></i>

      <i class="chess bishop icon animate__animated animate__fadeIn animate__delay-4s"></i>

      <i class="chess rook icon animate__animated animate__fadeIn animate__delay-3s"></i>
  

      <a class="smoothscroll" href="#about">
      <div class="mouse">
        <div class="wheel"></div>
      </div>
      </a> 
    </div>

    <a class="smoothscroll" href="#about">
    <div class="scroll-down"></div>
    </a> </header>
    </React.Fragment>
  );
};

export default Main;