import React, { useState } from 'react'
import './VScode.css'
import DescriptionIcon from '@mui/icons-material/DescriptionOutlined';
import BrushIcon from '@mui/icons-material/BrushOutlined';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
// import AccountCircleIcon from '@mui/icons-material/AccountCircleOutlined';
import NoteIcon from '@mui/icons-material/NoteOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import SmallModal from '../Small Modal/SmallModal';
import CoffeeCup from '../CoffeeCup/CoffeeCup'
import javascriptProjects from '../../Local Data/javascriptData'
import uiDesigns from '../../Local Data/uiDesignsData';
import certificateData from '../../Local Data/certificateData';
import supabase from '../../config/supabase';
import { useEffect } from 'react';


function VScode() {

    const [testjavascriptProjects, setJavascriptProjects] = useState(null);
    const [testcertificateData, setCertificateData] = useState(null);
    const [testuiDesigns, setUiDesigns] = useState(null);
    console.log(javascriptProjects);

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('JavaScript')
                .select();
            if (error) {
                setJavascriptProjects(null)
                console.log(error);
            }

            if (data) {
                setJavascriptProjects(data);
            }
        }

        fetchData()
    }, [])
    // console.log(javascriptProjects);

    const [projectClicked, setProjectClicked] = useState(false);
    const [clickedIndex, setClickedIndex] = useState(0);
    const [smallModel, setSmallModel] = useState(false);

    const viewURL = () => {
        window.open(javascriptProjects[clickedIndex].viewUrl, '_blank');
    }
    const sourceURL = () => {
        window.open(javascriptProjects[clickedIndex].sourceCode, '_blank');
    }

    const [activeMenu, setActiveMenu] = useState('javaScript');

    const handleMenuClick = (menu) => {
        setClickedIndex(0)
        setActiveMenu(menu);
    };

    let vscodeData = testjavascriptProjects;
    let labels = ['HTML', 'CSS', 'JavaScript'];
    let SubTitle = 'Project Description'
    let descData = []
    let title = []

    switch (activeMenu) {
        case 'javaScript':
            vscodeData = testjavascriptProjects;
            descData = vscodeData.map(item => item.desc)
            labels = ['HTML', 'CSS', 'JavaScript'];
            title = vscodeData.map(item => item.title)
            SubTitle = 'Project Description'
            break;
        case 'UI/UX Designs':
            vscodeData = uiDesigns;
            descData = vscodeData.map(item => item.desc)
            labels = ['Adobe Illustrator', 'Figma'];
            title = vscodeData.map(item => item.title)
            SubTitle = 'Design Details'
            break;
        case 'certifications':
            vscodeData = certificateData;
            descData = vscodeData.map(item => item.desc)
            labels = ['Python', 'JavaScript', 'React', 'Problem Solving'];
            title = vscodeData.map(item => item.title)
            SubTitle = 'Covered Topics'
            break;

        default:
            break;
    }



    const mobileCheck = (index) => {
        setProjectClicked(true);
        setClickedIndex(index)
    }

    const [uiDesignImg, setUiDesignImg] = useState('')

    const UiDesignImg = (key) => {
        switch (key) {
            case 'outline':
                setUiDesignImg(uiDesigns[clickedIndex].outline)
                break;
            case 'design':
                setUiDesignImg(uiDesigns[clickedIndex].design)
                break;
            case 'mockup':
                setUiDesignImg(uiDesigns[clickedIndex].mockup)
                break;
            case 'certificate':
                setUiDesignImg(certificateData[clickedIndex].img)
                break;
            default:
                break;
        }

    }

    const [isLoaded, setIsLoaded] = useState(false);


    return (
        <div className="vscode-wrapper">
            <div className="vscode-window">
                <div className="vscode-menu">
                    <div className="main-icons">
                        <div
                            className={`menu-icons ${activeMenu === 'javaScript' ? 'active-Menu-item' : ''}`}
                            title='Projects'
                            onClick={() => handleMenuClick('javaScript')}
                        >
                            <DescriptionIcon fontSize='large' sx={{ color: 'white' }} />
                        </div>
                        <div
                            className={`menu-icons ${activeMenu === 'UI/UX Designs' ? 'active-Menu-item' : ''}`}
                            title='UI/UX Designs'
                            onClick={() => handleMenuClick('UI/UX Designs')}
                        >
                            <BrushIcon fontSize='large' sx={{ color: 'white' }} />
                        </div>
                        <div
                            className={`menu-icons ${activeMenu === 'certifications' ? 'active-Menu-item' : ''}`}
                            title='Certifications'
                            onClick={() => handleMenuClick('certifications')}
                        >
                            <WorkspacePremiumIcon fontSize='large' sx={{ color: 'white' }} />
                        </div>
                        {/* <div
                            className={`profile-icons ${activeMenu === 'profile' ? 'active-Menu-item' : ''}`}
                            title='Profile'
                            onClick={() => handleMenuClick('profile')}
                        >
                            <AccountCircleIcon fontSize='large' sx={{ color: 'white' }} />
                        </div> */}
                    </div>
                </div>

                <div className="vscode-menu-items">
                    <div className="vscode-menu-title"><h1>{activeMenu.toUpperCase()}</h1></div>
                    <div className="vscode-menu-subtitle">
                        {
                            vscodeData.map((value, index) =>
                                <h3 key={index} onClick={() => { setClickedIndex(index) }} className={`${clickedIndex === index ? 'active-Subtitle' : ''}`}> <NoteIcon fontSize='medium' sx={{ color: 'white' }} /> {value.title}</h3>
                            )
                        }
                    </div>
                </div>

                <div className="vscode-content">
                    <div className="vscode-menu-title"><h1>{title[clickedIndex]}</h1></div>
                    <div className="vscode-main-content">
                        <div className="vscode-main-projectName">
                            <h2>{title[clickedIndex]}</h2>
                            <div className="project-tags">
                                {
                                    labels.map((value, index) =>
                                        <h5 key={index}>{value}</h5>
                                    )
                                }
                            </div>
                        </div>

                        <div className="project-description">
                            <h5>{SubTitle}</h5>
                            <div className="project-desc-title">
                                {
                                    descData[clickedIndex].map((item, index) =>
                                        <p key={index}>{item}</p>
                                    )
                                }
                            </div>
                        </div>
                        {activeMenu === 'javaScript' &&
                            <div className="project-btns">
                                <button onClick={viewURL}>View Project</button>
                                <button onClick={sourceURL}>Source Code</button>
                            </div>
                        }
                        {activeMenu === 'UI/UX Designs' &&
                            <div className="project-btns">
                                <button onClick={() => { setSmallModel(true); UiDesignImg('outline') }}>Outline </button>
                                <button onClick={() => { setSmallModel(true); UiDesignImg('design') }}>Design </button>
                                <button onClick={() => { setSmallModel(true); UiDesignImg('mockup') }}>Mockup </button>
                            </div>
                        }
                        {activeMenu === 'certifications' &&
                            <div className="project-btns">
                                <button onClick={() => { setSmallModel(true); UiDesignImg('certificate') }}>View Certificate</button>
                            </div>
                        }
                    </div>
                </div>
                <div className="vs-code-bottom-bar"></div>
            </div>

            {smallModel &&
                <SmallModal>
                    <div className="design-img-wrapper">
                        {isLoaded ? null : <CoffeeCup className="coffeeCupLoader" />}
                        <div className="resume-close design-img" onClick={() => { setSmallModel(false); setProjectClicked(true) }}>
                            <ClearIcon fontSize='medium' sx={{ color: 'black' }} />
                        </div>
                        <img
                            alt='Preview Not Found'
                            src={uiDesignImg}
                            onLoad={() => setIsLoaded(true)}
                            className={`${isLoaded ? '' : 'hideImage'}`}
                        />
                    </div>
                </SmallModal>
            }

            <div className="vscode-mobile">
                <div className="vscode-mobile-content">
                    <div className="mobile-content-title">
                        <h3>{activeMenu.toUpperCase()}</h3>
                    </div>
                    <div className="mobile-content-list">
                        {
                            vscodeData.map((value, index) =>
                                <h3 onClick={() => mobileCheck(index)} key={index}>{value.title}</h3>
                            )
                        }
                    </div>

                </div>
                <div className="vscode-mobile-menu">
                    <div className={`mob-icon ${activeMenu === 'javaScript' ? 'active-icon' : ''}`} onClick={() => handleMenuClick('javaScript')}>
                        <DescriptionIcon fontSize='large' sx={{ color: 'white' }} />
                    </div>
                    <div className={`mob-icon ${activeMenu === 'UI/UX Designs' ? 'active-icon' : ''}`} onClick={() => handleMenuClick('UI/UX Designs')}>
                        <BrushIcon fontSize='large' sx={{ color: 'white' }} />
                    </div>
                    <div className={`mob-icon ${activeMenu === 'certifications' ? 'active-icon' : ''}`} onClick={() => handleMenuClick('certifications')}>
                        <WorkspacePremiumIcon fontSize='large' sx={{ color: 'white' }} />
                    </div>
                    {/* <AccountCircleIcon fontSize='medium' sx={{ color: 'white' }} className='Menu-icons' /> */}
                </div>
            </div>


            {
                projectClicked && (
                    <div className="mobile-popup">
                        <SmallModal>
                            <div className="mobile-project-container">
                                <div className="resume-close design-img" onClick={() => setProjectClicked(false)}>
                                    <ClearIcon fontSize='medium' sx={{ color: 'black' }} />
                                </div>
                                <div className="vscode-main-projectName project-mob-title">
                                    <h3>{vscodeData[clickedIndex].title}</h3>
                                    <div className="project-tags mobile-tags">
                                        {
                                            labels.map((value, index) =>
                                                <h5 key={index}>{value}</h5>
                                            )
                                        }
                                    </div>
                                    <div className="mob-buttons">
                                        {activeMenu === 'javaScript' &&
                                            <div className="project-btns">
                                                <button onClick={viewURL}>View Project</button>
                                                <button onClick={sourceURL}>Source Code</button>
                                            </div>
                                        }
                                        {activeMenu === 'UI/UX Designs' &&
                                            <div className="project-btns">
                                                <button onClick={() => { setSmallModel(true); UiDesignImg('outline'); setProjectClicked(false) }}>Outline </button>
                                                <button onClick={() => { setSmallModel(true); UiDesignImg('design'); setProjectClicked(false) }}>Design </button>
                                                <button onClick={() => { setSmallModel(true); UiDesignImg('mockup'); setProjectClicked(false) }}>Mockup </button>
                                            </div>
                                        }
                                        {activeMenu === 'certifications' &&
                                            <div className="project-btns">
                                                <button onClick={() => { setSmallModel(true); UiDesignImg('certificate'); setProjectClicked(false) }}>View Certificate</button>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </SmallModal>
                    </div>
                )
            }


        </div >
    )
}

export default VScode