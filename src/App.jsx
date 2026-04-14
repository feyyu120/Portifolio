import { useState, useEffect } from 'react';
import profile from "./assets/profile3.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import { 
  FaGithub, FaInstagram, FaTelegramPlane, FaEnvelope, 
  FaLaptopCode, FaServer, FaCode, FaJava, FaDatabase
} from 'react-icons/fa';
import { 
  SiReact, SiNodedotjs, SiExpress, SiPython, SiCplusplus, SiHtml5, SiCss 
} from 'react-icons/si';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Active section observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formspreeEndpoint = "https://formspree.io/f/mnjokobn";

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-lg border-b border-emerald-500/30">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8 py-6 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl md:text-3xl font-bold tracking-tighter text-emerald-400">Feysel Yassin</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-x-10 text-base font-medium">
            <button onClick={() => scrollToSection('home')} className={`pb-1 border-b-2 transition-all duration-200 ${activeSection === 'home' ? 'border-emerald-400 text-emerald-400' : 'border-transparent hover:text-emerald-400'}`}>Home</button>
            <button onClick={() => scrollToSection('skills')} className={`pb-1 border-b-2 transition-all duration-200 ${activeSection === 'skills' ? 'border-emerald-400 text-emerald-400' : 'border-transparent hover:text-emerald-400'}`}>Skills</button>
            <button onClick={() => scrollToSection('projects')} className={`pb-1 border-b-2 transition-all duration-200 ${activeSection === 'projects' ? 'border-emerald-400 text-emerald-400' : 'border-transparent hover:text-emerald-400'}`}>Projects</button>
            <button onClick={() => scrollToSection('contact')} className={`pb-1 border-b-2 transition-all duration-200 ${activeSection === 'contact' ? 'border-emerald-400 text-emerald-400' : 'border-transparent hover:text-emerald-400'}`}>Contact</button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-4xl text-emerald-400">
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-emerald-500/30 py-6 px-8 flex flex-col gap-6 text-lg">
            <button onClick={() => scrollToSection('home')} className="text-left hover:text-emerald-400">Home</button>
            <button onClick={() => scrollToSection('skills')} className="text-left hover:text-emerald-400">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="text-left hover:text-emerald-400">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-left hover:text-emerald-400">Contact</button>
          </div>
        )}
      </nav>

           {/* HERO */}
      <section id="home" className="min-h-screen pt-28 pb-16 flex items-center bg-gradient-to-br from-black to-zinc-950">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Text Content */}
            <div className="space-y-8 text-center md:text-left">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-[-3px] text-white">
                Full-Stack <span className="text-emerald-400 block">Developer</span>
              </h1>

              <div className="max-w-lg mx-auto md:mx-0">
                <p className="text-2xl md:text-3xl text-emerald-300 leading-tight">
                  <TypeAnimation
                    sequence={[
                      "Building digital experiences...",
                      1500,
                      "Merging creativity with technology...",
                      1500,
                      "Creating modern web & mobile apps...",
                      1500,
                    ]}
                    speed={50}
                    repeat={Infinity}
                  />
                </p>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="mt-6 text-lg md:text-xl text-zinc-400"
                >
                  Specializing in modern web development and mobile app development.
                </motion.p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="group flex items-center gap-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-xl md:text-2xl px-10 py-6 rounded-3xl transition-all hover:scale-105 w-full sm:w-auto"
                >
                  Let's Connect
                  <span className="text-4xl group-active:rotate-45 transition-transform">→</span>
                </button>

                <div className="inline-flex items-center gap-3 text-sm uppercase tracking-widest bg-zinc-900 px-6 py-3 rounded-3xl border border-emerald-400/30">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  OPEN TO FREELANCE / COLLABS
                </div>
              </div>
            </div>

            {/* Profile Image - Fixed Size on PC + Good on Mobile */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[330px] lg:max-w-[410px]">
                <div className="absolute -inset-8 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full blur-3xl opacity-30"></div>
                <img
                  src={profile}
                  alt="Feysel Yassin"
                  className="w-full h-auto aspect-square object-cover rounded-full border-[6px] border-emerald-400 shadow-2xl shadow-emerald-500/50 relative z-10"
                />
                <div className="absolute inset-0 border-[6px] border-emerald-400/40 rounded-full -rotate-12 scale-110 pointer-events-none"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 md:py-24 bg-zinc-950">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <span className="px-5 py-2 bg-emerald-900/50 text-emerald-400 text-sm font-mono tracking-[3px] rounded-full">TECHNICAL EXPERTISE</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6">What I Build With</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend Card */}
            <div className="bg-zinc-900 border border-emerald-500/30 hover:border-emerald-400 rounded-3xl p-8 md:p-10 group transition-all hover:-translate-y-3">
              <div className="flex justify-center mb-10 text-emerald-400"><FaLaptopCode size={100} /></div>
              <h3 className="text-center text-3xl md:text-4xl font-semibold mb-3">Frontend Development</h3>
              <p className="text-center text-emerald-300 text-sm mb-8">Beautiful and responsive user interfaces</p>
              <div className="flex flex-wrap justify-center gap-3">
                <div className="px-6 py-3 bg-black rounded-2xl flex items-center gap-2"><SiReact /> React</div>
                <div className="px-6 py-3 bg-black rounded-2xl flex items-center gap-2"><SiReact /> React Native</div>
                <div className="px-6 py-3 bg-black rounded-2xl flex items-center gap-2"><SiHtml5 /> HTML</div>
                <div className="px-6 py-3 bg-black rounded-2xl flex items-center gap-2"><SiCss /> CSS</div>
              </div>
            </div>

            {/* Backend Card */}
            <div className="bg-zinc-900 border border-emerald-500/30 hover:border-emerald-400 rounded-3xl p-8 md:p-10 group transition-all hover:-translate-y-3">
              <div className="flex justify-center mb-10 text-emerald-400"><FaServer size={100} /></div>
              <h3 className="text-center text-3xl md:text-4xl font-semibold mb-3">Backend Development</h3>
              <p className="text-center text-emerald-300 text-sm mb-8">Scalable server &amp; API systems</p>
              <div className="flex flex-wrap justify-center gap-3">
                <div className="px-6 py-3 bg-black rounded-2xl flex items-center gap-2"><SiNodedotjs /> Node.js</div>
                <div className="px-6 py-3 bg-black rounded-2xl flex items-center gap-2"><SiExpress /> Express.js</div>
                <div className="px-6 py-3 bg-black rounded-2xl flex items-center gap-2"><FaDatabase /> MongoDB</div>
              </div>
            </div>

            {/* Problem Solving Card */}
            <div className="bg-zinc-900 border border-emerald-500/30 hover:border-emerald-400 rounded-3xl p-8 md:p-10 group transition-all hover:-translate-y-3">
              <div className="flex justify-center mb-10 text-emerald-400"><FaCode size={100} /></div>
              <h3 className="text-center text-3xl md:text-4xl font-semibold mb-3">Problem Solving</h3>
              <p className="text-center text-emerald-300 text-sm mb-8">Algorithms &amp; Competitive Programming</p>
              <div className="flex flex-wrap justify-center gap-3">
                <div className="px-6 py-3 bg-black rounded-2xl flex items-center gap-2"><SiPython /> Python</div>
                <div className="px-6 py-3 bg-black rounded-2xl flex items-center gap-2"><SiCplusplus /> C++</div>
                <div className="px-6 py-3 bg-black rounded-2xl flex items-center gap-2"><FaJava /> Java</div>
              </div>
              <div className="mt-10 text-center">
                <a href="https://codeforces.com/profile/feyyu234" target="_blank" className="text-emerald-400 hover:text-emerald-300">View on Codeforces →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 md:py-24 bg-black">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <span className="px-5 py-2 bg-emerald-900/50 text-emerald-400 text-sm font-mono tracking-[3px] rounded-full">FEATURED WORK</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6">Projects I Built</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project Cards remain the same but with better mobile padding */}
            <div className="group bg-zinc-900 rounded-3xl overflow-hidden border border-transparent hover:border-emerald-400 transition-all">
              <div className="h-64 bg-gradient-to-br from-emerald-950 to-black flex items-center justify-center">
                <FaLaptopCode size={100} className="text-emerald-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-semibold mb-3">Lost &amp; Found Platform</h3>
                <p className="text-zinc-400 mb-8 line-clamp-3">Help students find lost items and report found items in real-time.</p>
                <div className="flex gap-2 flex-wrap mb-8">
                  <span className="px-6 py-3 bg-black rounded-2xl flex items-center gap-2"><SiReact /> React Native</span>
                  <span className="px-6 py-3 bg-black rounded-2xl flex items-center gap-2"><SiNodedotjs /> Node.js</span>
                  <span className="px-6 py-3 bg-black rounded-2xl flex items-center gap-2"><SiExpress /> Express.js</span>
                </div>
                <a href="https://github.com/feyyu120/ASTU_Student" target="_blank" className="block w-full py-5 text-center bg-zinc-800 hover:bg-emerald-500 hover:text-black font-semibold rounded-2xl transition-all">View GitHub Repo →</a>
              </div>
            </div>

            {/* Repeat for other two projects (same structure) */}
            <div className="group bg-zinc-900 rounded-3xl overflow-hidden border border-transparent hover:border-emerald-400 transition-all">
              <div className="h-64 bg-gradient-to-br from-cyan-950 to-black flex items-center justify-center">
                <FaTelegramPlane size={100} className="text-emerald-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-semibold mb-3">AI Chatbot</h3>
                <p className="text-zinc-400 mb-8 line-clamp-3">RAG AI Intelligent conversational assistant built with React + Node.</p>
                <div className="flex gap-2 flex-wrap mb-8">
                  <span className="px-6 py-3 bg-black rounded-2xl flex items-center gap-2"><SiReact /> React</span>
                  <span className="px-6 py-3 bg-black rounded-2xl flex items-center gap-2"><SiNodedotjs /> Node.js</span>
                  <span className="px-6 py-3 bg-black rounded-2xl flex items-center gap-2"><SiExpress /> Express.js</span>
                </div>
                <a href="https://github.com/feyyu120/ChatBot" target="_blank" className="block w-full py-5 text-center bg-zinc-800 hover:bg-emerald-500 hover:text-black font-semibold rounded-2xl transition-all">View GitHub Repo →</a>
              </div>
            </div>

            <div className="group bg-zinc-900 rounded-3xl overflow-hidden border border-transparent hover:border-emerald-400 transition-all">
              <div className="h-64 bg-gradient-to-br from-amber-950 to-black flex items-center justify-center">
                <FaLaptopCode size={100} className="text-emerald-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-semibold mb-3">E-Commerce App</h3>
                <p className="text-zinc-400 mb-8 line-clamp-3">Full-featured online store with cart, payments, and mobile support.</p>
                <div className="flex gap-2 flex-wrap mb-8">
                  <span className="px-6 py-3 bg-black rounded-2xl flex items-center gap-2"><SiReact /> React</span>
                  <span className="px-6 py-3 bg-black rounded-2xl flex items-center gap-2"><SiReact /> React Native</span>
                  <span className="px-6 py-3 bg-black rounded-2xl flex items-center gap-2"><SiNodedotjs /> Node.js</span>
                  <span className="px-6 py-3 bg-black rounded-2xl flex items-center gap-2"><SiExpress /> Express.js</span>
                </div>
                <a href="https://github.com/feyyu120/Abdu_Student_Delivery-E-commerce-" target="_blank" className="block w-full py-5 text-center bg-zinc-800 hover:bg-emerald-500 hover:text-black font-semibold rounded-2xl transition-all">View GitHub Repo →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 md:py-24 bg-zinc-950">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="text-center md:text-left">
              <h2 className="text-5xl md:text-6xl font-bold leading-none">Ready to create<br />something <span className="text-emerald-400">epic?</span></h2>
              <p className="mt-8 text-xl md:text-2xl text-zinc-400">Reach out — I reply fast.</p>

              {/* Social Cards - Better centered on mobile */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a href="https://github.com/feyyu120" target="_blank" className="flex items-center gap-6 bg-zinc-900 hover:bg-emerald-900/30 px-6 md:px-8 py-8 rounded-3xl transition-all group">
                  <FaGithub className="text-5xl group-hover:text-emerald-400 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-xl">GitHub</div>
                    <div className="text-emerald-400">@feyyu120</div>
                  </div>
                </a>

                <a href="https://instagram.com/feyselyassink" target="_blank" className="flex items-center gap-6 bg-zinc-900 hover:bg-emerald-900/30 px-6 md:px-8 py-8 rounded-3xl transition-all group">
                  <FaInstagram className="text-5xl group-hover:text-emerald-400 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-xl">Instagram</div>
                    <div className="text-emerald-400">@feyselyassink</div>
                  </div>
                </a>

                <a href="https://t.me/feyyu2" target="_blank" className="flex items-center gap-6 bg-zinc-900 hover:bg-emerald-900/30 px-6 md:px-8 py-8 rounded-3xl transition-all group">
                  <FaTelegramPlane className="text-5xl group-hover:text-emerald-400 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-xl">Telegram</div>
                    <div className="text-emerald-400">@feyyu2</div>
                  </div>
                </a>

                <a href="mailto:feyselfeyyu@email.com" className="flex items-center gap-6 bg-zinc-900 hover:bg-emerald-900/30 px-6 md:px-8 py-8 rounded-3xl transition-all group">
                  <FaEnvelope className="text-5xl group-hover:text-emerald-400 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-xl">Email Me</div>
                    <div className="text-emerald-400">feyselfeyyu@email.com</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-zinc-900 rounded-3xl p-8 md:p-10 border border-emerald-400/20">
              <h3 className="text-3xl font-semibold mb-8 text-emerald-400">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-black border border-zinc-700 focus:border-emerald-400 rounded-2xl px-6 py-4 text-white placeholder-zinc-500 focus:outline-none"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  className="w-full bg-black border border-zinc-700 focus:border-emerald-400 rounded-2xl px-6 py-4 text-white placeholder-zinc-500 focus:outline-none"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message / Comments"
                  rows="6"
                  required
                  className="w-full bg-black border border-zinc-700 focus:border-emerald-400 rounded-3xl px-6 py-4 text-white placeholder-zinc-500 focus:outline-none resize-y"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-700 text-black font-semibold text-xl py-6 rounded-3xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <span>→</span>}
                </button>
              </form>

              {submitStatus === 'success' && (
                <p className="mt-6 text-center text-emerald-400 font-medium">✅ Message sent successfully! I'll reply soon.</p>
              )}
              {submitStatus === 'error' && (
                <p className="mt-6 text-center text-red-400">❌ Failed to send. Please try again or contact me on Telegram.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-8 border-t border-emerald-500/10">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm">
          <div>© 2026 Feysel Yassin • All rights reserved</div>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="https://github.com/feyyu120" target="_blank" className="hover:text-emerald-400">GitHub</a>
            <a href="https://www.instagram.com/feyselyassink" target="_blank" className="hover:text-emerald-400">Instagram</a>
            <a href="https://t.me/feyyu2" target="_blank" className="hover:text-emerald-400">Telegram</a>
          </div>
          <div>Made with 🔥 by Feysel Yassin</div>
        </div>
      </footer>
    </div>
  );
}

export default App;