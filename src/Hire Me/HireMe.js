import React from 'react'
import ContactMe from '../Elements/Contact Me/ContactMe'
import HireMeModal from '../Elements/HireMe Modal/HireMeModal'
import './HireMe.css'

function HireMe() {
    return (
        <div className="hireMe-wrapper">
            <div className="hireMe-title">
                <h1>Hire Me - Next Level Guaranteed!</h1>
                <h3>With my skills and experience, I can make a valuable contribution to our team and help take our company to new heights. I am passionate about staying up-to-date with industry trends and technologies to continually improve and innovate.</h3>
            </div>
            <div className="hireMe-contents">
                <div className="hireMe-left-container">
                    <HireMeModal />
                </div>
                <div className="hireMe-right-container">
                    <ContactMe />
                </div>
            </div>
        </div>
    )
}

export default HireMe