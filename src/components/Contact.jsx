import { BsTelegram } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";


export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
       <div className="media"> 
     
        <a href="mailto:feyselfeyyu@gmail.com"  target="_blank"
          rel="noopener noreferrer" style={{textDecoration:"none" ,fontSize:20}}>
         <TfiEmail className="icon" />
        </a>
    
        <a
          href="https://github.com/feyyu120"  target="_blank"
          rel="noopener noreferrer"
        style={{textDecoration:"none",fontSize:20}}
        >
         <FaGithub className="icon"/>
        </a>

          <a
          href="https://t.me/feyyu2"   target="_blank"
          rel="noopener noreferrer"
        style={{textDecoration:"none",fontSize:20}}
        >
       <BsTelegram className="icon"/>
        </a>
      </div>
    </section>
  );
}
