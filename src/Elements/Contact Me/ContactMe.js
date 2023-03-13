import React from 'react'
import './ContactMe.css'

function ContactMe() {
    return (
        <div className="contactMe-wrapper">
            <div className="contactMe-card">
                <h1>”</h1>
                <h2>Let's Chat</h2>
                <h2>Want to schedule an interview or have questions? I'm just a call or message away.</h2>
                <h2>Name : Ravikumar</h2>
                <h2>Mobile No : +91 8056251542</h2>
                <h2>Email ID : ravikumarrajasekaran11@gmail.com</h2>
                <div className="contactMe-btns">
                    <button>Whatsapp Me</button>
                    <button class="call-btn">Call Me</button>
                </div>
            </div>
        </div>
    )
}

export default ContactMe