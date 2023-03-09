import React from 'react'
import './Card.css'

function Card(props) {
    const data = Object.values(props)[0];
    const cardData = data[0];
    return (
        <div className="card-wrapper">
            <div className="card-body">
                <img src={cardData.img} alt="" />
                <div className="project-desc">
                    <p>{cardData.title}-{cardData.desc}</p>
                </div>
                <div className="card-buttons">
                    <button className="view-project"> <a href={cardData.viewUrl} target={'_blank'} rel="noreferrer">View Project</a></button>
                    <button className="source-code" ><a href={cardData.sourceCode} target={'_blank'} rel="noreferrer">Source Code</a></button>
                </div>
            </div>
        </div>
    )
}

export default Card