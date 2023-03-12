import React, { useEffect } from 'react'
import './CodeWindow.css'

import { useState } from 'react';
import AnimatedText from '../Elements/Animated Text/AnimatedText';
import Card from '../Elements/Card/Card';

function AnimationRender() {
    const [count, setCount] = useState(1);

    useEffect(() => {
        if (count <= 8) {
            const timer = setTimeout(() => {
                setCount(count + 1);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [count]);

    return count;
}

function CodeWindow() {

    const [activeIndex, setActiveIndex] = useState(0);
    const titleArray = ['Projects', 'Javascript', 'UI/UX', 'Certifications'];

    const projectCategory = [
        [
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
        ],
        [
            "Sign In / Sign Up",
            "Credit Card",
            "Landing Page",
            "Calculator",
            "App icon",
            "User Profile",
            "Settings UI",
            "404 Error",
            "Music Player",
            "Social Share",
            "Flash Message",
            "E-commerce"
        ]

    ]


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


    // function handleTitleClick(index) {
    //     setActiveIndex(index);
    //     if (index !== 0) {
    //         document.getElementById('animate').style.display = 'none';
    //         document.getElementById('tab').style.display = 'flex';
    //         setSelectedCategory(projectCategory[index])
    //         // console.log(selectedCategory);
    //     }
    //     if (index === 0) {
    //         document.getElementById('tab').style.display = 'none';
    //         document.getElementById('animate').style.display = 'flex';
    //         setSelectedTitle('');
    //         setIsActiveLine(false);
    //     }
    // }

    const numbers = [];

    for (let i = 1; i <= 20; i++) {
        numbers.push(i);
    }



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

    const uiList = [
        "Sign In / Sign Up",
        "Credit Card",
        "Landing Page",
        "Calculator",
        "App icon",
        "User Profile",
        "Settings UI",
        "404 Error",
        "Music Player",
        "Social Share",
        "Flash Message",
        "E-commerce"
    ]

    // const demoObject = [
    //     {
    //         id: 1,
    //         title: 'New Year Countdown',
    //         img: 'https://i.imgur.com/Y0qKfmS.png',
    //         desc: "DOM selection: Select the HTML elements for displaying the countdown timer.",
    //         viewUrl: 'https://ravisdraw.github.io/js-projects/01%20NewYear%20CountDown/index.html',
    //         sourceCode: 'https://gist.github.com/ravisdraw/38ec38671c7f138a9d28578029d4f271'
    //     },
    //     {
    //         id: 2,
    //         title: 'Digital Clock',
    //         img: 'https://i.imgur.com/vScDs74.png',
    //         desc: "Selects clock elements in HTML with class names '.h', '.m', '.s'",
    //         viewUrl: 'https://ravisdraw.github.io/js-projects/02%20Digital%20Clock/index.html',
    //         sourceCode: 'https://gist.github.com/ravisdraw/bc2662a09b04939a4f5192f868a30acc'
    //     },
    //     {
    //         id: 3,
    //         title: 'Analog Clock',
    //         img: 'https://i.imgur.com/jYF20ip.png',
    //         desc: "Calculates the degree of rotation for each hand based on the time.",
    //         viewUrl: 'https://ravisdraw.github.io/js-projects/03%20Analog%20Clock/index.html',
    //         sourceCode: 'https://gist.github.com/ravisdraw/ab9a8c790a741683a9e479dee242e2bd'
    //     }
    // ]

    const projectsData = [
        {
            id: 'JavaScript',
            content: [
                {
                    id: 1,
                    title: 'New Year Countdown',
                    img: 'https://i.imgur.com/Y0qKfmS.png',
                    desc: "DOM selection: Select the HTML elements for displaying the countdown timer.",
                    viewUrl: 'https://ravisdraw.github.io/js-projects/01%20NewYear%20CountDown/index.html',
                    sourceCode: 'https://gist.github.com/ravisdraw/38ec38671c7f138a9d28578029d4f271'
                },
                {
                    id: 2,
                    title: 'Digital Clock',
                    img: 'https://i.imgur.com/vScDs74.png',
                    desc: "Selects clock elements in HTML with class names '.h', '.m', '.s'",
                    viewUrl: 'https://ravisdraw.github.io/js-projects/02%20Digital%20Clock/index.html',
                    sourceCode: 'https://gist.github.com/ravisdraw/bc2662a09b04939a4f5192f868a30acc'
                },
                {
                    id: 3,
                    title: 'Analog Clock',
                    img: 'https://i.imgur.com/jYF20ip.png',
                    desc: "Calculates the degree of rotation for each hand based on the time.",
                    viewUrl: 'https://ravisdraw.github.io/js-projects/03%20Analog%20Clock/index.html',
                    sourceCode: 'https://gist.github.com/ravisdraw/ab9a8c790a741683a9e479dee242e2bd'
                }
            ]
        },
        {
            id: 'UI/UX',
            content: [
                {
                    id: 1,
                    title: "Sign In / Sign Up",
                    img: 'https://i.imgur.com/Y0qKfmS.png',
                    desc: "DOM selection: Select the HTML elements for displaying the countdown timer.",
                },
                {
                    id: 2,
                    title: "Credit Card",
                    img: 'https://i.imgur.com/vScDs74.png',
                    desc: "Selects clock elements in HTML with class names '.h', '.m', '.s'",
                },
                {
                    id: 3,
                    title: "Calculator",
                    img: 'https://i.imgur.com/jYF20ip.png',
                    desc: "Calculates the degree of rotation for each hand based on the time."
                }
            ]
        }
    ]

    const [isActiveLine, setIsActiveLine] = useState(false);
    const [selectedTitle, setSelectedTitle] = useState(projectsData[0].id);
    const [tabContent, setTabContent] = useState(projectsData[0].content)


    console.log(projectsData[0].id);

    // const filteredObjects = demoObject.filter(obj => obj.title === selectedTitle);
    // console.log(projectsData[0]);
    const titles = projectsData.map(item => Object.values(item)[0])

    // const [selectedCategory, setSelectedCategory] = useState(projectsData[0].content);

    // let tabContent = projectsData[0].content;
    // let contentTitles = titles;

    function handleTitleClick(index) {
        setActiveIndex(index);
        console.log(index);
        // const tabData = projectsData.filter(item => Object.values(item)[0] === titles[index])

        // tabContent = tabData[0].content
        // console.log(tabContent);
        // contentTitles = Object.values(tabContent).map(item => console.log(item.title));
        // setSelectedCategory(tabContent)
        setTabContent(projectsData[index].content)
        console.log(tabContent);
        if (index !== 0) {
            document.getElementById('animate').style.display = 'none';
            document.getElementById('tab').style.display = 'flex';
            // setSelectedCategory(projectCategory[index])
            // console.log(selectedCategory);
        }
        if (index === 0) {
            document.getElementById('tab').style.display = 'none';
            document.getElementById('animate').style.display = 'flex';
            setSelectedTitle('');
            setIsActiveLine(false);
        }
    }

    return (
        <div className='copilot-wrapper'>
            <div className="window-container">
                <div className="window-titles">
                    <div className="project-heading-decor">PROJECTS</div>
                    {
                        titles.map((value, index) =>
                            <div
                                className={`window-title ${activeIndex === index ? 'active' : ''}`}
                                key={index}
                                onClick={() => handleTitleClick(index)}
                            >{value}</div>
                        )
                    }
                </div>
                <div className="window-content">
                    {/* <div className="side-numbers">
                        {numbers.map((number, index) => (
                            <p key={index}>{number}</p>
                        ))}
                    </div> */}

                    {/* <div className="animated-text" id='animate'>
                        {Object.entries(tabContent).map((item, index) => {
                            if (index < AnimationRender()) {
                                return <AnimatedText key={index} text={item} />;
                            } else {
                                return null;
                            }
                        })}

                    </div> */}

                    <div className="animated-text tab" id='tab'>
                        {/* {contentTitles.map((item, index) => {
                            <p
                                key={index}
                            style={{ color: isActiveLine && selectedTitle === item.title ? '#79C0FF' : 'white' }}
                            onClick={() => { setSelectedTitle(item.title); setIsActiveLine(true); }}
                            >{item.title}</p>
                        })} */}
                        {
                            // contentTitles.map((item, index) =>
                            //     <p key={index}>{item}</p>)
                        }
                    </div>
                    <div className="sidePopup-wrapper">
                        <div className="sidePopup" style={{ display: isActiveLine ? 'flex' : 'none' }}>
                            <div className="resume-close mob-close" onClick={() => { setIsActiveLine(false); }}></div>
                            {
                                // isActiveLine && <Card data={filteredObjects} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CodeWindow