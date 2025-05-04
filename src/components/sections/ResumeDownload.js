import React from 'react';

function ResumeDownload() {
  return (
    <section id="resume-download">
      <h2>Resume</h2>
      <a
        href="/resume_3 years_MERN_stack_vivek.pdf"
        download="Vivek_Full_Stack_Resume.pdf"
        className="download-button"
      >
        Download My Resume
      </a>
    </section>
  );
}

export default ResumeDownload;