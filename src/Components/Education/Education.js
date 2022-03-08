import React from "react";
import ucb from "../../Assets/ucb.png";
import yearup from "../../Assets/yearup.png";
import skyline from "../../Assets/skyline.png";
import "./style.css";

const Education = () => {
  return (
    <React.Fragment>
      <section id="education" style={{paddingTop:"100px"}}>
        <div class="container">

          <div>
            <h3>
             <i class="chess rook icon"></i>Education
            </h3>
              <div class="block"></div>
          </div>

          <div class="row" style={{textAlign:"center"}}>

          <div class="four columns">
          <img id="ucb" src={ucb} alt="ucb_img" height="200" width="325"/> 
          <p style={{paddingTop:"50px"}}>UCB - Full Flex Web Developer</p>
          </div>
          

          <div class="four columns" >
          <img id="yearup" src={yearup} alt="ucb_img" height="200" width="325"/>
          <p style={{paddingTop:"50px"}}>YearUp - Quality Assurance</p>
          </div>

          <div id="skylines" class="four columns" >
          <img id="skyline" src={skyline} alt="ucb_img" height="200" width="325"/>
          <p style={{paddingTop:"50px"}}>Skyline College</p>
          </div>

          </div>


        </div>
      </section>
    </React.Fragment>
    );
  };
  
  export default Education;