import React from 'react'
import './VScode.css'

function VScode() {

    // const menuIcons = [
    //     'Projects',
    //     'UI Designs'
    // ]

    return (
        <div className="vscode-wrapper">
            <div className="vscode-window">
                <div className="vscode-menu">
                    <div className="menu-icons"></div>
                    {/* <div className="menu-icons"></div>
                    <div className="menu-icons"></div> */}
                </div>
                <div className="vscode-menu-items"></div>
                <div className="vscode-content"></div>
                <div className="vs-code-bottom-bar"></div>
            </div>
        </div>
    )
}

export default VScode