import './App.css';
import About from './components/About';
import Header from './components/Header'
import Projects from './components/Projects';
import { useState } from 'react';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
function App() {
  const [headerlinks] = useState([
    {
        name: "About Me"
    },
    {
        name: "Projects"
    },
    {
        name: "Contact"
    },
    {
        name: "Resume"
    }
]);

const [currentLink, setCurrentLink] = useState(headerlinks[0]);
const [contactSelected, setContactSelected] = useState(false);
const [projectsSelected, setProjectsSelected] = useState(false);
const [aboutSelected, setAboutSelected] = useState(true);
const [resumeSelected, setResumeSelected] = useState(false);
  return (
    <div>
      <Header
        headerlinks = {headerlinks}
        setCurrentLink = {setCurrentLink}
        currentLink = {currentLink}
        setResumeSelected = {setResumeSelected}
        setContactSelected = {setContactSelected}
        setProjectsSelected = {setProjectsSelected}
        setAboutSelected = {setAboutSelected}
        contactSelected = {contactSelected}
        aboutSelected = {aboutSelected}
        resumeSelected = {resumeSelected}
        projectsSelected = {projectsSelected}/>
      <main>
      {contactSelected && <ContactForm/>}
      {projectsSelected && <Projects/>}
      {aboutSelected && <About/>}
      {resumeSelected && <Resume/>}
      </main>
    </div>
  );
}

export default App;
