import React from 'react';
import './Header.css'; // Ensure you have styles for the new elements
import image from './../assets/photo.jpg'
function Header() {
    return (
        <header>
            <div>
                <div className="header-top">
                    <img
                        src={image}
                        alt="Your Name"
                        className="profile-image"
                    />
                    <div className="header-title">
                        <h1 className='name'>VIVEK KUMAR VERMA</h1>
                        <h2 className='designation'>Project Engineer ( Wipro Technologies )<p className='role'>[ Full Stack Web Developer]</p></h2>
                    </div>
                </div>
            </div>
            <div className="header-nav">
                <ul className="nav-list">
                    <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
                    <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
                    <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
                    <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                    <li className="nav-item"><a className="nav-link" href="#certifications">Certifications</a></li>
                    <li className="nav-item"><a className="nav-link" href="#contacts">Contacts</a></li>
                    <li className="nav-item"><a className="nav-link" href="#resume-download">Resume</a></li>
                </ul>
            
            </div>
        </header>
    );
}

export default Header;