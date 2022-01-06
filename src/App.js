import './App.css';
import About from './components/About';
import Header from './components/Header'
import Projects from './components/Projects';
import { useState } from 'react';
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
  return (
    <div>
      <Header
        headerlinks = {headerlinks}
        setCurrentLink = {setCurrentLink}
        currentLink = {currentLink}/>
      <main>
        <About/>
        <Projects/>
      </main>
    </div>
  );
}

export default App;
