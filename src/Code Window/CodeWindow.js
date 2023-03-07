import React from 'react'
import './CodeWindow.css'

import { useState } from 'react';

function CodeWindow() {

    const [activeIndex, setActiveIndex] = useState(0);
    const titleArray = ['UI/UX Designing', 'Frontend Development', 'Backend Development', 'Database', 'Automation Testing'];


    function handleTitleClick(index) {
        setActiveIndex(index);
    }

    return (
        <div className='copilot-wrapper'>
            <div className="window-container">
                <div className="window-titles">
                    {
                        titleArray.map((value, index) =>
                            <div
                                className={`window-title ${activeIndex === index ? 'active' : ''}`}
                                key={index}
                                onClick={() => handleTitleClick(index)}
                            >{value}</div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default CodeWindow