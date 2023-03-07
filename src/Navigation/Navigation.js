import React, { useState, useEffect } from 'react'
import './Navigation.css'
import { Divide as Hamburger } from 'hamburger-react'

function Navigation() {

    const [showSidebar, setShowSidebar] = useState(false);
    const hamStyle = {
        display: showSidebar ? 'grid' : 'none',
    };

    const navItems = ['Projects', 'Certification', 'Skills', 'Experiance', 'Hire Me', 'Profile'];

    return (
        <header>
            <div className="brand">
                <div className="logo"></div>
                <label>RaviVerse</label>
            </div>
            {navItems.map((item, index) =>
                <div className="nav-item-box">
                    <div className="nav-items" key={index}>{item}</div>
                    <div className="underline"></div>
                </div>
            )
            }

            {/* <div className="nav-items">Projects</div>
            <div className="underline"></div>
            <div className="nav-items">Certifications</div>
            <div className="nav-items">Skills</div>
            <div className="nav-items">Experiance</div>
            <div className="nav-items">Hire Me</div>
            <div className="nav-items">Profile</div> */}

            <div className="hamburger" onClick={() => setShowSidebar(!showSidebar)} >
                <Hamburger size={28} />
            </div>
            <div className="ham-menu" style={hamStyle}>
                <div className="ham-menu-container">
                    <div className="ham-items">Projects</div>
                    <div className="ham-items">Certifications</div>
                    <div className="ham-items">Skills</div>
                    <div className="ham-items">Experiance</div>
                    <div className="ham-items">Hire Me</div>
                    <div className="ham-items">Profile</div>
                </div>
            </div>

        </header>
    );
}

export default Navigation