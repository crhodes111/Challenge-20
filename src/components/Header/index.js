import React from 'react'
import { useState } from 'react';

function Header(props) {

//Using use state to keep track of header links clicked
const {
    headerlinks = [],
    setCurrentLink,
    currentLink,
    setResumeSelected,
    setContactSelected,
    setProjectsSelected, 
    setAboutSelected,
    contactSelected,
    aboutSelected,
    resumeSelected, 
    projectsSelected,
} = props


   
    return (
<header>
  <h2>
        Conner Rhodes Portfolio
  </h2>
  <nav>
    <ul className="flex-row">
      
   {headerlinks.map((link) => (
       <li
       className={`mx-1 ${
           currentLink.name === link.name && 'linkActive'}`
       }
       key={link.name}
       >
           <span onClick={()=> {
               setCurrentLink(link)
               if (currentLink.name === 'About Me'){
                setContactSelected(false)
                setProjectsSelected(false)
                setResumeSelected(false)
                setAboutSelected(true)

               }
               if (currentLink.name === 'Contact'){
                setContactSelected(true)
                setProjectsSelected(false)
                setResumeSelected(false)
                setAboutSelected(false)

               }
               if (currentLink.name === 'Projects'){
                setContactSelected(false)
                setProjectsSelected(true)
                setResumeSelected(false)
                setAboutSelected(false)

               }
               if (currentLink.name === 'Resume'){
                setContactSelected(false)
                setProjectsSelected(false)
                setResumeSelected(true)
                setAboutSelected(false)

               }

           }}>{link.name}
           </span>
       </li>
   ))}
    </ul>
  </nav>
</header>
    )
}

export default Header
