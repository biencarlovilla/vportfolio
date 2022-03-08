import React from "react";
import portrait from "../../Assets/portrait.png";
import Pdf from "../../Assets/villa-resume-draper.pdf";
// import Fade from 'react-reveal/Fade';
import "./style.css";

const About = () => {
    return (
      <React.Fragment>
        <section id="about">
            <div class="container">

                <div style={{paddingTop: "100px"}}>
                    <h3><i class="chess king icon"></i>About</h3>
                    <div class="block"></div>
                </div>
              
                <div class="row" id="aboutrow">

                    <div class="four columns">
                        <img src={portrait} alt="profile_portrait" height="350" width="285"/>
                    </div>
                     
                    <div class="eight columns">
                        <p>
                        <h2>Hi, I'm Biencarlo!</h2>
                        <br />
                            As an aspiring professional in the tech field, my ultimate goal is to be part of a respectable 
                            company where I can utilize my skills and grow professionally while progressing in my career path.
                            Having experience as a database administrator intern at Paypal, I was exposed to an effective working
                            environment and building strong relationship with the team. After that, I wanted to further my education 
                            by enrolling to UC Berkeley coding bootcamp focusing as a full flex web developer. 
                        </p>
                                
                        <p>
                            I'm confident I can apply the numerous skills I have acquired and be of great value. 
                        </p>

                        <a href={Pdf} target = "_blank" rel="noreferrer"><input class="button-primary" type="submit" value="Check out my resume!" /></a>
                    </div>
                </div>
                
            </div>
        </section>
      </React.Fragment>
    );
  };
  
  export default About;