import React, { useState } from 'react'
import './VScode.css'
import DescriptionIcon from '@mui/icons-material/DescriptionOutlined';
import BrushIcon from '@mui/icons-material/BrushOutlined';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AccountCircleIcon from '@mui/icons-material/AccountCircleOutlined';
import NoteIcon from '@mui/icons-material/NoteOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import LanguageIcon from '@mui/icons-material/LanguageOutlined';
import SmallModal from '../Small Modal/SmallModal';


function VScode() {

    // const menuIcons = [
    //     'Projects',
    //     'UI Designs'
    // ]

    const [projectClicked, setProjectClicked] = useState(false);

    return (
        <div className="vscode-wrapper">
            <div className="vscode-window">
                <div className="vscode-menu">
                    <div className="main-icons">
                        <div className="menu-icons" title='Projects'>
                            <DescriptionIcon fontSize='large' sx={{ color: 'white' }} />
                        </div>
                        <div className="menu-icons" title='UI/UX Designs'>
                            <BrushIcon fontSize='large' sx={{ color: 'white' }} />
                        </div>
                        <div className="menu-icons" title='Certifications'>
                            <WorkspacePremiumIcon fontSize='large' sx={{ color: 'white' }} />
                        </div>
                        <div className="menu-icons" title='Previous Site'>
                            <LanguageIcon fontSize='large' sx={{ color: 'white' }} />
                        </div>
                    </div>
                    <div className="profile-icons" title='Profile'>
                        <AccountCircleIcon fontSize='large' sx={{ color: 'white' }} className='Menu-icons' />
                    </div>
                </div>

                <div className="vscode-menu-items">
                    <div className="vscode-menu-title"><h1>JAVASCRIPT</h1></div>
                    <div className="vscode-menu-subtitle">
                        <h3> <NoteIcon fontSize='medium' sx={{ color: 'white' }} /> New Year Countdown</h3>
                        <h3> <NoteIcon fontSize='medium' sx={{ color: 'white' }} /> Analog Clock</h3>
                        <h3> <NoteIcon fontSize='medium' sx={{ color: 'white' }} /> Digital Clock</h3>
                        <h3> <NoteIcon fontSize='medium' sx={{ color: 'white' }} />Sticky Notes</h3>
                    </div>
                </div>

                <div className="vscode-content">
                    <div className="vscode-menu-title"><h1>New Year Countdown <ClearIcon fontSize='small' sx={{ color: 'white' }} className="clearIcon" /></h1></div>
                    <div className="vscode-main-content">
                        <div className="vscode-main-projectName">
                            <h2>New Year Countdown</h2>
                            <div className="project-tags">
                                <h5>HTML</h5>
                                <h5>CSS</h5>
                                <h5>JavaScript</h5>
                            </div>
                        </div>
                        <div className="project-description">
                            <div className="project-desc-title">
                                <h5>Project Description</h5>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum nemo quam magnam. Et ab, illo minima recusandae sit dignissimos quaerat, assumenda, vero veniam rerum id omnis neque nobis! Sapiente, nesciunt?</p>
                            </div>
                        </div>
                        <div className="project-btns">
                            <button>View Project</button>
                            <button>Source Code</button>
                        </div>
                    </div>
                </div>
                <div className="vs-code-bottom-bar"></div>
            </div>

            <div className="vscode-mobile">
                <div className="vscode-mobile-content">
                    <div className="mobile-content-title">
                        <h3>JAVASCRIPT</h3>
                    </div>
                    <div className="mobile-content-list">
                        <h3 onClick={() => {
                            setProjectClicked(true);
                            setInterval(() => {
                                setProjectClicked(false);
                            }, 500);
                        }}>New Year Countdown</h3>
                        <h3>Analog Clock</h3>
                        <h3>Digital Clock</h3>
                        <h3>Sticky Notes</h3>
                    </div>

                </div>
                <div className="vscode-mobile-menu">
                    <DescriptionIcon fontSize='medium' sx={{ color: 'white' }} />
                    <BrushIcon fontSize='medium' sx={{ color: 'white' }} />
                    <WorkspacePremiumIcon fontSize='medium' sx={{ color: 'white' }} />
                    <LanguageIcon fontSize='medium' sx={{ color: 'white' }} />
                    <AccountCircleIcon fontSize='medium' sx={{ color: 'white' }} className='Menu-icons' />
                </div>
            </div>

            {
                projectClicked && (
                    <SmallModal>
                        <div className="success">Work Under Progress!</div>
                    </SmallModal>
                )
            }

        </div >
    )
}

export default VScode