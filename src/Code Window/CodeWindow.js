import React, { useEffect } from 'react'
import './CodeWindow.css'

import { useState } from 'react';
import AnimatedText from '../Elements/Animated Text/AnimatedText';

function CodeWindow() {

    const [activeIndex, setActiveIndex] = useState(0);
    const titleArray = ['JavaScript', 'UI/UX Designs', 'Angular', 'React'];


    function handleTitleClick(index) {
        setActiveIndex(index);
    }

    const numbers = [];

    for (let i = 1; i <= 20; i++) {
        numbers.push(i);
    }

    const [count, setCount] = useState(1);

    useEffect(() => {
        if (count <= 10) {
            const timer = setTimeout(() => {
                setCount(count + 1);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [count]);

    const js = {
        title: { name: '// Javascript Projects', color: "gray" },
        project_1: { name: 'New year Count down', color: "red" },
        project_2: { name: 'Image Slider Preview', color: "orange" },
        project_3: { name: 'New year Count down', color: "gray" },
        project_4: { name: 'Image Slider Preview', color: "blue" },
        project_5: { name: 'New year Count down', color: "gray" },
        project_6: { name: 'New year Count down', color: "blue" },
        project_7: { name: 'Image Slider Preview', color: "gray" },
        project_8: { name: 'New year Count down', color: "gray" },
        project_9: { name: 'Image Slider Preview', color: "blue" }
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
                <div className="window-content">
                    <div className="side-numbers">
                        {numbers.map((number) => (
                            <p>{number}</p>
                        ))}
                    </div>
                    <div className="animated-text">
                        {/* {[...Array(10)].map((_, index) => {
                            if (index < count) {
                                return <AnimatedText text={js[0]} />;
                            } else {
                                return null;
                            }
                        })} */}
                        {Object.keys(js).map((key, index) => {
                            if (index < count) {
                                return <AnimatedText key={index} text={js[key]} />;
                            } else {
                                return null;
                            }
                        })}
                    </div>
                    {/* <div className="title-text">JavaScript</div> */}
                </div>
            </div>
        </div>
    )
}

export default CodeWindow