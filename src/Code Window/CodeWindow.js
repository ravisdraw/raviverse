import React, { useEffect } from 'react'
import './CodeWindow.css'

import { useState } from 'react';
import AnimatedText from '../Elements/Animated Text/AnimatedText';

function CodeWindow() {

    const [activeIndex, setActiveIndex] = useState(0);
    const titleArray = ['Projects', 'Project Details', 'Source Code'];

    const js = {
        title: { text: 'I invite you to explore the projects I have completed' },
        comment: { text: '// Please change tabs to view more details' },
        line_1: { text: 'I have worked on various projects using latest technologies' },
        important_1: { text: 'I have also worked on UI/UX designing' },
        important_2: { text: 'Like JavaScript, React JS, Angular, Python' },
        line_4: { text: 'The source code is also available for review' },
        line_5: { text: 'This will give you a better understanding of my technical skills' },
        line_6: { text: 'I have expertise in various programming languages and design tools' }
    }


    const data = js;


    function handleTitleClick(index) {
        setActiveIndex(index);
        if (index !== 0) {
            document.getElementById('animate').style.display = 'none';
            document.getElementById('tab').style.display = 'flex';
        }
        if (index === 0) {
            document.getElementById('tab').style.display = 'none';
            document.getElementById('animate').style.display = 'flex';
        }
    }

    const numbers = [];

    for (let i = 1; i <= 20; i++) {
        numbers.push(i);
    }

    const [count, setCount] = useState(1);

    useEffect(() => {
        if (count <= 8) {
            const timer = setTimeout(() => {
                setCount(count + 1);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [count]);


    const projectList = [
        "New Year Countdown",
        "Digital Clock",
        "Analog Clock",
        "Stopwatch",
        "CSS Generator",
        "Password Generator",
        "Photo Gallery",
        "Image Slider",
        "Sticky Notes",
        "Image Search",
    ];

    const [activeProject, setActiveProject] = useState('');

    const handleProjectClick = (data) => {
        setActiveProject(data);
        console.log(data);
    };



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
                <div className="window-content">
                    <div className="side-numbers">
                        {numbers.map((number, index) => (
                            <p key={index}>{number}</p>
                        ))}
                    </div>

                    <div className="animated-text" id='animate'>
                        {Object.entries(data).map((item, index) => {
                            if (index < count) {
                                return <AnimatedText key={index} text={item} />;
                            } else {
                                return null;
                            }
                        })}
                    </div>

                    <div className="animated-text tab" id='tab'>
                        {
                            projectList.map((item, index) =>
                                <p
                                    key={index}
                                    className={index === activeProject ? 'activeProject' : ''}
                                    onClick={() => handleProjectClick(item)}
                                >{item}</p>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CodeWindow