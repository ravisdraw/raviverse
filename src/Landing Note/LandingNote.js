import React, { useState } from 'react'
import './LandingNote.css'
import { Link } from 'react-scroll';
import SmallModal from '../Elements/Small Modal/SmallModal';
import ClearIcon from '@mui/icons-material/Clear';

function LandingNote() {

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const downloadPDF = 'https://drive.google.com/u/0/uc?id=1adahk5MZtYTSN3CUz6LYg3eJ82b1k_zw&export=download';
    const viewPDF = 'https://drive.google.com/file/d/1adahk5MZtYTSN3CUz6LYg3eJ82b1k_zw/view?usp=sharing'


    return (
        <div className="note-wrapper">
            {showModal && (
                <SmallModal>
                    <div className="resume-modal">
                        <div className="resume-close" onClick={toggleModal}>
                            <ClearIcon fontSize='medium' sx={{ color: 'black' }} />
                        </div>
                        <div className="resume-prompt">"Want to know more? Get my resume with just a click - download or view it now!"</div>
                        <div className="resume-btns">
                            <button className="download"><a href={downloadPDF} >Download</a></button>
                            <button className="view" onClick={toggleModal}><a href={viewPDF} target={'_blank'} rel="noreferrer">View</a></button>
                        </div>
                    </div>
                </SmallModal>
            )}
            <div className="note-container">
                <h1 className="note-title note">I'm Ravikumar,</h1>
                <h3 className="note-para note">Experienced TCS software developer with innovative projects showcasing expertise in coding & project management.</h3>
                <h3 className="note-para note">I invite you to explore my projects, and I hope you find inspiration for your own work.</h3>
                <div className="note-buttons">
                    <div className="resume">
                        <button onClick={toggleModal} >Inspect My Resume</button>
                    </div>
                    <Link to="Projects" smooth={true} className="take-a-tour">
                        <button >Discover My Artistry</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingNote