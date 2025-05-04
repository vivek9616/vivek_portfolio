import React from 'react';
import './Resume.css';
import About from './sections/About';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Contacts from './sections/Contacts';
import ResumeDownload from './sections/ResumeDownload';
import Skills from './sections/Skills';

function Resume() {
  return (
    <main>
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Certifications />
      <Contacts />
      <ResumeDownload />
    </main>
  );
}

export default Resume;