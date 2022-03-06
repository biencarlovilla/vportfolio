import React from "react";
// import portfolio from "../../utils/portfolio.png";
// import { Typography } from "@material-ui/core";
// import Fade from 'react-reveal/Fade';
import "./style.css";

const Contact = () => {
  return (
    <React.Fragment>
     <section id="contact">
        <div class="container"> 
          {/* <Fade> */}
            <div>
            <h1><i class="chess icon"></i>Contact</h1>
            <div class="block"></div>
            </div>
          {/* </Fade> */}

         
            <div class="row">    
            {/* <Fade delay={600}> */}
              <div class="six columns">
              
                  <div class="align">
                  
                      <a href="mailto:biencarlovilla@gmail.com"><input class="button-primary" type="submit" value="Let's Connect!" /></a>
                      <br />
                      <br />
                      <i class="user icon "></i>Biencarlo Villa
                      <br />
                      <i class="map marker alternate icon"></i>Bay Area, CA
                      <br />
                      <i class="envelope icon"></i>biencarlovilla@gmail.com
                      <br />
                      <i class="mobile alternate icon"></i>(650)-201-6337
                      <br />
                      <br />
                      <a href="https://github.com/biencarlovilla"><i class="github icon large"></i></a>
              
                      <a href="https://www.linkedin.com/in/biencarlo-villa/"><i class="linkedin icon large"></i></a>

                      <a href="https://www.instagram.com/biencarlovilla/"><i class="instagram icon large"></i></a>

                      <a href="https://codepen.io/vBiencarlo"><i class="codepen icon large"></i></a>
                  </div> 
                  
              </div>
              {/* </Fade> */}
            </div>
           
          
        </div>
     </section>
    </React.Fragment>
  );
};

export default Contact;