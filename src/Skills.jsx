import HTML from "./assets/HTML.png"
import Css from "./assets/CSS.jpg"
import Js from "./assets/JavaScript.png"
import React from "./assets/React.jpg"
import Nodejs from "./assets/Nodejs.png"
import Python from "./assets/Python.png"
import Sql from "./assets/Sql.jpg"
import Mysql from "./assets/Mysql.png"
import Github from "./assets/Github.png"
import Vscode from "./assets/Vscode.jpg"

import "./Skills.css";
function Skills(){
    return(
        <div id="skills">
           <h1>Skills</h1>
            <div id="skills-container">
                <div id="skill">
                    <img src={HTML} alt="HTML" />
                    <h3>HTML</h3>
                </div>
                <div id="skill">
                    <img src={Css} alt="HTML" />
                    <h3>CSS</h3>
                </div>
                <div id="skill">
                    <img src={Js} alt="HTML" />
                    <h3>JAVASCRIPT</h3>
                </div>
                <div id="skill">
                    <img src={React} alt="HTML" />
                    <h3>REACT</h3>
                </div>
                <div id="skill">
                    <img src={Nodejs} alt="HTML" />
                    <h3>NODEJS</h3>
                </div>
                <div id="skill">
                    <img src={Python} alt="HTML" />
                    <h3>PYTHON</h3>
                </div>
                <div id="skill">
                    <img src={Sql} alt="HTML" />
                    <h3>SQL</h3>
                </div>
                <div id="skill">
                    <img src={Mysql} alt="HTML" />
                    <h3>MYSQL</h3>
                </div>
                <div id="skill">
                    <img src={Github} alt="HTML" />
                    <h3>GITHUB</h3>
                </div>
                <div id="skill">
                    <img src={Vscode} alt="HTML" />
                    <h3>VSCODE</h3>
                </div>
           </div>
        </div>  
    )
}

export default Skills;