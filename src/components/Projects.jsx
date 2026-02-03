export default function Projects() {
  return (
    <section id="projects" className="section" style={{backgroundColor:"rgb(158, 158, 150)"}}>
      <h2>Projects</h2>

      <div className="projects">
        <a
          href="https://github.com/feyyu120/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <h3>Portfolio Website</h3>
          <p>Modern React portfolio</p>
        </a>

        <a
          href="https://github.com/feyyu120/React-Project"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <h3>GPA Calculator</h3>
          <p>Using React</p>
        </a>

        <a
          href="https://github.com/feyyu120/React-Native-App"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <h3>React Native To-Do App</h3>
          <p>No backend</p>
        </a>

         <a
          href="https://github.com/feyyu120/CSE-ASTU-Dev-BootCamp"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <h3>Bootcamp development projects</h3>
          <p>using MERN</p>
        </a>
        
        <a
          href="https://github.com/feyyu120/NCC_MSJ"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <h3>Different problem solving(CP)</h3>
          <p>using pyhton and c++ </p>
        </a>
      </div>
    </section>
  );
}
