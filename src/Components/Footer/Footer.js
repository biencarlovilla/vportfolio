import React from "react";
// import portfolio from "../../utils/portfolio.png";
// import { Typography } from "@material-ui/core";
import "./style.css";

const Footer = () => {
  return (
    <React.Fragment>
        <footer>
            <div class="container">
                <div class="row">
                    <p>© 2021 - Biencarlo Villa's Portfolio</p>
                </div>
                <div class="row"> 
                    <div class="logo">
                        <a href="https://github.com/biencarlovilla"><i class="github icon large"></i></a>
                    
                        <a href="https://www.linkedin.com/in/biencarlo-villa/"><i class="linkedin icon large"></i></a>

                        <a href="https://www.instagram.com/biencarlovilla/"><i class="instagram icon large"></i></a>

                        <a href="https://codepen.io/vBiencarlo"><i class="codepen icon large"></i></a>

                    </div>
                </div>
            </div>
        </footer>
    </React.Fragment>
  );
};

export default Footer;