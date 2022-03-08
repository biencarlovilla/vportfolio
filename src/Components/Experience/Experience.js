import React from "react";
import bcwebstudioslogo from "../../Assets/bcws.png";
import roberthalf from "../../Assets/roberthalf.png";
import paypal from "../../Assets/paypal.png";
import "./style.css";

const Experience = () => {
    return (
      <React.Fragment>
        <section id="experience" style={{paddingTop:"100px"}}>
            <div class="container">
               
                    <div>
                        <h3><i class="chess bishop icon"></i>Experience</h3>
                        <div class="block"></div>
                    </div>

          <div class="row" style={{textAlign:"center"}}>

          <div class="four columns">
          <img id="bcws" src={bcwebstudioslogo} alt="ucb_img" height="250" width="325"/>
          <p>BCWebStudios - Web Developer</p>
          </div>

          <div class="four columns">
          <img id="rh" src={roberthalf} alt="ucb_img" height="250" width="325"/>
          <p>Robert Half - Data Entry Analyst</p>
          </div>

          <div class="four columns">
          <img id="pp" src={paypal} alt="ucb_img" height="250" width="325"/>
          <p>PayPal - Data Administrator</p>
          </div>

          </div>



            </div>
        </section>
        </React.Fragment>
    );
  };
  
  export default Experience;