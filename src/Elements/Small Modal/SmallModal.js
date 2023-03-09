import React, { useEffect } from 'react';
import './SmallModal.css'

function SmallModal(props) {



    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'scroll';
            document.body.style.overflowX = 'hidden'
        };
    }, []);

    return (
        <div className="modal-overlay">
            <div className="modal">{props.children}</div>
        </div>
    )
}

export default SmallModal