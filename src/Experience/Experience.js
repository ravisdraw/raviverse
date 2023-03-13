import React from 'react'
import './Experience.css'

function Experience() {
    return (
        <div className="experience-wrapper">
            <div className="experience-contents">
                <div className="experience-main-title">
                    <h1>Work Experience</h1>
                    <h3>Over the course of my 2.5 years at TCS, I had the opportunity to grow both personally and professionally, acquiring the tools and skills necessary to tackle any challenge with confidence and ease</h3>
                </div>
                <div className="experience-main-content">
                    <ul className="gradient-list">
                        <li>Possess strong analytical skills, excellent communication, and organizational skills, and can work both independently and collaboratively as part of a team.</li>
                        <li>Proficient in Angular with 2.5 years of experience in analysis, UI/UX design, testing, documentation, and development of applications.</li>
                        <li>Skilled in team collaboration, which enables effective group work and leadership.</li>
                    </ul>
                </div>
            </div>
            <div className="experience-sub-contents">
                <div className="experience-sub-list">
                    <h1>”</h1>
                    <h2>I'm proud to have been awarded Star of the Month at TCS for my work on redesigning an existing application, which resulted in improved user experience and increased efficiency.</h2>
                </div>
                <div className="experience-sub-list">
                    <h1>”</h1>
                    <h2>I was honored to receive an on the spot award at TCS for my contributions to organizing company activities, conducting KT sessions, and raising security awareness among my colleagues.</h2>
                </div>
                <div className="experience-sub-list">
                    <h1>”</h1>
                    <h2>I was thrilled to receive appreciation for my work at TCS, including organizing a successful sports event with colleagues and creating engaging video presentations for client visits and townhall meetings.</h2>
                </div>
            </div>
        </div>
    )
}

export default Experience