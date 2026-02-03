import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience  from "./components/Experience "
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {
  return (
    <>
    <div className="app">  
      <Navbar />
      <Home />
      <About />
       <Experience />
         <Projects />
      <Contact /></div>

     <footer style={{textAlign:"center", color:"gray"}}>©️copyright 2025.All rights reserved</footer>  
    </>
  );
}

export default App;
