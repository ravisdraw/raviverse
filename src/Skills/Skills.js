import React from 'react'
import './Skills.css'
import DiamondLine from '../Elements/Diamond Line/Diamond'

function Skills() {
    return (
        <div className="skill-wrapper">
            <div className="skills-heading">
                <h1>Mastering the Craft: My Top Skills</h1>
                <h3>Web developer with a focus on user experience and usability, utilizing the latest technologies and best practices to create intuitive interfaces</h3>
            </div>
            <div className="skills-content">
                <div className="skills-content-list">
                    <div className="skills-titles">
                        <h1>UI/UX Designing Tools</h1>
                    </div>
                    <div className="diamond-separator">
                        <DiamondLine />
                    </div>
                    <div className="skills-apps">
                        <div className="skills-app-list">
                            <div className="skills-app-icons">
                                <img src={require('../Assets/adobe.png')} alt="logo" />
                            </div>
                            <div className="skills-app-name"><p>Illustrator</p></div>
                        </div>
                        <div className="skills-app-list">
                            <div className="skills-app-icons">
                                <img src={require('../Assets/figma.png')} alt="logo" />
                            </div>
                            <div className="skills-app-name"><p>Figma</p></div>
                        </div>
                        <div className="skills-app-list">
                            <div className="skills-app-icons">
                                <img src={require('../Assets/webflow.png')} alt="logo" />
                            </div>
                            <div className="skills-app-name"><p>Webflow</p></div>
                        </div>
                    </div>
                </div>

                <div className="skills-content-list">
                    <div className="skills-apps">
                        <div className="skills-app-list">
                            <div className="skills-app-icons">
                                <img src={require('../Assets/angular.png')} alt="logo" />
                            </div>
                            <div className="skills-app-name"><p>Angular</p></div>
                        </div>
                        <div className="skills-app-list">
                            <div className="skills-app-icons">
                                <img src={require('../Assets/react.png')} alt="logo" />
                            </div>
                            <div className="skills-app-name"><p>React</p></div>
                        </div>
                    </div>
                    <div className="diamond-separator">
                        <DiamondLine />
                    </div>
                    <div className="skills-titles">
                        <h1>Frontend Frameworks</h1>
                    </div>
                </div>

                <div className="skills-content-list">
                    <div className="skills-titles">
                        <h1>Backend Technologies</h1>
                    </div>
                    <div className="diamond-separator">
                        <DiamondLine />
                    </div>
                    <div className="skills-apps">
                        <div className="skills-app-list">
                            <div className="skills-app-icons">
                                <img src={require('../Assets/supabase.png')} alt="logo" />
                            </div>
                            <div className="skills-app-name"><p>Supabase</p></div>
                        </div>
                        <div className="skills-app-list">
                            <div className="skills-app-icons">
                                <img src={require('../Assets/postgreSQL.png')} alt="logo" />
                            </div>
                            <div className="skills-app-name"><p>PostgreSQL</p></div>
                        </div>
                        <div className="skills-app-list">
                            <div className="skills-app-icons">
                                <img src={require('../Assets/selenium.png')} alt="logo" />
                            </div>
                            <div className="skills-app-name"><p>Automation</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills