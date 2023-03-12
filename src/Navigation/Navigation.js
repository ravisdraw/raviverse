import React, { useEffect, useState } from 'react'
import './Navigation.css'
import { Divide as Hamburger } from 'hamburger-react'
import { Link } from 'react-scroll';


function Navigation() {

    const [showSidebar, setShowSidebar] = useState(false);
    const hamStyle = {
        display: showSidebar ? 'grid' : 'none',
    };

    const navItems = ['Projects', 'Skills', 'Experience', 'Hire Me', 'Profile'];
    const navMobItems = ['Hire Me', 'About Me']

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
            <Link to="Navigation" smooth={true}>
                {isVisible && <button className="scroll-to-top-btn" >Up</button>}
            </Link>
            <div className="brand">
                <div className="logo"></div>
                <label>RaviVerse</label>
            </div>
            {navItems.map((item, index) =>
                <Link to={item} smooth={true} key={index}>
                    <div className="nav-item-box" >
                        <div className="nav-items">{item}</div>
                        <div className="underline"></div>
                    </div>
                </Link>
            )
            }

            <div className="hamburger" onClick={() => setShowSidebar(!showSidebar)} >
                <Hamburger size={28} />
            </div>
            <div className="ham-menu" style={hamStyle}>
                <div className="ham-menu-container">
                    {navMobItems.map((item, index) =>
                        <Link to={item} smooth={true} key={index}>
                            <div className="ham-items" >{item}</div>
                        </Link>
                    )
                    }
                </div>
            </div>

        </header>
    );
}

export default Navigation