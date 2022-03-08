import React from "react";
import "./style.css";

const Skills = () => {
    return (
      <React.Fragment>
        <section id="skills" style={{paddingTop:"100px"}}>
            <div class="container">
               
                    <div>
                        <h3><i class="chess queen icon"></i>Skills</h3>
                        <div class="block"></div>
                    </div>

            <div id="tools" style={{paddingTop:"35px", textAlign:"center"}}>
        <div >
        <h1>
        <i class="js square icon " style={{color:"black", paddingRight:"80px"}}/>
        <i class="react icon " style={{color:"black", paddingRight:"80px"}}/>
        <i class="node icon " style={{color:"black", paddingRight:"90px"}}/>
        <i class="html5 icon " style={{color:"black", paddingRight:"80px"}}/>
        <i class="css3 icon " style={{color:"black", paddingRight:"80px"}}/>
        <i class="database icon " style={{color:"black", paddingRight:"80px"}}/>
        <i class="cpanel icon " style={{color:"black", paddingRight:"80px"}}/>
        <i class="stripe icon " style={{color:"black", paddingRight:"80px"}}/>
        </h1>
        </div>
      </div>

            </div>
        </section>
        </React.Fragment>
    );
  };
  
  export default Skills;