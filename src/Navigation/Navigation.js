import React, { useEffect, useState } from 'react'
import './Navigation.css'
import { Divide as Hamburger } from 'hamburger-react'
import { Link } from 'react-scroll';


function Navigation() {

    const [showSidebar, setShowSidebar] = useState(false);
    const hamStyle = {
        display: showSidebar ? 'grid' : 'none',
    };

    const navItems = ['Projects', 'Certification', 'Skills', 'Experiance', 'Hire Me', 'Profile'];

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // const scrollToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     });
    // };

    return (
        <header>
            <Link to="nav" smooth={true}>
                {isVisible &&
                    <button className="scroll-to-top-btn" >
                        Up
                    </button>
                }
            </Link>
            <div className="brand">
                <div className="logo"></div>
                <label>RaviVerse</label>
            </div>
            {navItems.map((item, index) =>
                <Link to={item} smooth={true}>
                    <div className="nav-item-box">
                        <div className="nav-items" key={index}>{item}</div>
                        <div className="underline"></div>
                    </div>
                </Link>
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