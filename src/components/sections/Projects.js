import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        <li>
          <strong>Map Viewer</strong>
          <p>
            A React-based application that displays an interactive map of a selected country. 
            Users can search for a country, view its geographical boundaries, and explore additional 
            details such as cities, landmarks, and population data. The application integrates 
            third-party APIs like OpenStreetMap and Leaflet for map rendering and data visualization.
          </p>
          <p>
            <a 
              href="https://vivek9616.github.io/mapviewer/" 
              rel="wrong url reference"
              className="project-link"
            >
              View Project
            </a>
          </p>
        </li>
        
        <li>
          <strong>Course Preview</strong>
          <p>
            A React-based application that provides a categorized list of Data Structures and Algorithms (DSA) topics. 
            Users can explore topics, view explanations, and access related coding problems. The application is designed 
            to help learners systematically navigate through DSA concepts and improve their problem-solving skills.
          </p>
          <p>
            <a 
              href="https://vivek9616.github.io/dsa_topics_frontend/" 
              rel="wrong url reference"
              className="project-link"
            >
              View Project
            </a>
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Projects;