import React from 'react'
import VScode from '../Elements/VS code/VScode'
// import CodeWindow from '../Code Window/CodeWindow'
// import DimondLine from '../Elements/Dimond Line/DimondLine'
import './Projects.css'

function Projects() {
    return (
        <div className="project-wrapper">
            {/* <CodeWindow />
            <div className="project-heading">
                <h1 className="project-title">From Concept to Creation: My Projects</h1>
                <h3 className="project-para">I'd be happy to provide more details about my projects and the skills I've developed through them. In the meantime, please take a look at my portfolio for all my experience.</h3>
            </div>
            <div className="line-wrapper">
                <DimondLine />
            </div> */}
            <VScode />
        </div>
    )
}

export default Projects