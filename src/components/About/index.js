import React from 'react';
import profilepic from '../../assets/images/PictureConnerRhodes.jpg'

function About() {
  return (
    <section>
      <h1 id="about">About me</h1>
      <img src={profilepic} alt='' style={{width: "25%"}}></img>
      <p>
                Hello! My name is Conner Rhodes I currently work for Edward Jones while going to the UNCC Coding Bootcamp.
                I am striving to buff my technical skills to land a job in the technology sphere. I recently graduated from North
                Carolina State Unvierstiy with a degree in Buisiness IT. 

                Below I have provided links to my previous work and projects as well as information to contact me. 
            </p>
    </section>
  );
}

export default About;