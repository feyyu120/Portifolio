import photo from '../assets/photo1.jpg'

export default function About() {
  return (
    <section id="about" className="section">
      <h2 style={{marginBottom:20}}>About Me</h2>
      <img src={photo} alt="my pic" className='img' />
      <p style={{fontStyle:"oblique"}}>
        I'm Feysel currently I'm second year student at ASTU pursuing degree in Software engineering.
        I'm a passionate developer learning and building modern Mobile and web applications
        using React,React Native ,Express / Node.js and  MongoDB.

        I'm also problem solver(solving competitive programming on Codforeces and join weekly contest)using python and C++ programming
      </p>
     
    </section>
  );
}
