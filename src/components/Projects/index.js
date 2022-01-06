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
             <a href='https://inexplicitus.com'> 
            <img
             src={inexplicitus}
             style={{width: "30%"}}
             alt=''
             ></img></a>  
             <a href='https://github.com/crhodes111/Inexplicitus-2'>Github Repo</a>
             
            </div>
            <div>
            <a href='https://github.com/Nativeblanks/project2'>
            <img
             src={employeetracker}
             style={{width: "30%"}}
             alt=''
             ></img></a>
             <a href='https://stormy-plateau-51721.herokuapp.com/'>Github Repo</a>
            </div>
            <div>
            <a href='http://phodographync.com/'>
            <img
             src={phodography}
             style={{width: "30%"}}
             alt=''
             ></img></a>
             <a href='https://github.com/crhodes111/Phodography-Public'>Github Repo</a>
            </div>
            <div>
            <a href='https://crhodes111.github.io/Project1/'>
            <img
             src={project1}
             style={{width: "30%"}}
             alt=''
             ></img></a>
             <a href='https://github.com/crhodes111/Project1'>Github Repo</a>
            </div>
            <div>
            <a href='https://crhodes111.github.io/Challenge4/'>
            <img
             src={codingquiz}
             style={{width: "30%"}}
             alt=''
             ></img></a>
             <a href='https://github.com/crhodes111/Challenge4'>Github Repo</a>
            </div>
            <div>
            <a href='https://crhodes111.github.io/Challenge-3/'>
            <img
             src={passwordgenerator}
             style={{width: "30%"}}
             alt=''
             ></img></a>
             <a href='https://github.com/crhodes111/Challenge-3'>Github Repo</a>
            </div>
            
        </section>
    )
}

export default Projects
