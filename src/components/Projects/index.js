import React from 'react'
import inexplicitus from "../../assets/images/1640111534606InexplicitusTimesLogo1.png"
import codingquiz from "../../assets/images/coding-quiz-challenge4.png"
import employeetracker from "../../assets/images/employeetracker-project2.jpg"
import project1 from "../../assets/images/Hawaii-Project1.jpg"
import passwordgenerator from "../../assets/images/Password-generator-Challenge3.jpg"
import phodography from "../../assets/images/Phodography.JPG"

function Projects() {

    return (
        <section>
            <h1>PROJECTS</h1>
            <div>
            <img
             src={inexplicitus}
             style={{width: "30%"}}
             alt=''
             ></img>
            </div>
            <div>
            <img
             src={employeetracker}
             style={{width: "30%"}}
             alt=''
             ></img>
            </div>
            <div>
            <img
             src={phodography}
             style={{width: "30%"}}
             alt=''
             ></img>
            </div>
            <div>
            <img
             src={project1}
             style={{width: "30%"}}
             alt=''
             ></img>
            </div>
            <div>
            <img
             src={codingquiz}
             style={{width: "30%"}}
             alt=''
             ></img>
            </div>
            <div>
            <img
             src={passwordgenerator}
             style={{width: "30%"}}
             alt=''
             ></img>
            </div>
            
        </section>
    )
}

export default Projects
