import React from 'react'
import { useState } from 'react';

function Header(props) {

//Using use state to keep track of header links clicked
const {
    headerlinks = [],
    setCurrentLink,
    currentLink
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
