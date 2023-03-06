import React from 'react'
import './Navigation.css'

function Navigation() {
    return (
        <header>
            <div className="nav-items brand">
                <div className="logo"></div>
                <label>RaviVerse</label>
            </div>
            <div className="nav-items">Projects</div>
            <div className="nav-items">Certifications</div>
            <div className="nav-items">Skills</div>
            <div className="nav-items">Experiance</div>
            <div className="nav-items">Hire Me</div>
            <div className="nav-items">Profile</div>
        </header>
    )
}

export default Navigation