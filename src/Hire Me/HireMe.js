import React from 'react'
import './HireMe.css'

function generateWhatsAppLink(phoneNumber) {
    const baseUrl = "https://wa.me/";
    const encodedPhoneNumber = encodeURIComponent(phoneNumber);
    return `${baseUrl}${encodedPhoneNumber}`;
}

function HireMe() {

    const phoneNumber = "8056251542"; // replace with your phone number

    const whatsappLink = generateWhatsAppLink(phoneNumber);

    return (
        <div className="hireMe-wrapper">
            <div className="hireMe-title">
                <h1>Hire Me - Next Level Guaranteed!</h1>
                <h3>With my skills and experience, I can make a valuable contribution to our team and help take our company to new heights. I am passionate about staying up-to-date with industry trends and technologies to continually improve and innovate.</h3>
            </div>

            <div className="hireMe-content">
                <div className="hireMe-mailcard">
                    <div className="hireMe-card">
                        <div className="hireMe-symbol">”</div>
                        <div className="hireMe-details">
                            <h2>I'm confident that I have the qualifications and experience needed to excel in this position, and I'm eager to hit the ground running and start making a meaningful impact on your team.</h2>
                            <h2>If you're interested in hiring me, simply click the button below and you'll be redirected to an email where you can send me an offer.</h2>
                        </div>
                        <div className="hireMe-btn">
                            <button>Hire Me</button>
                        </div>
                    </div>
                </div>
                <div className="hireMe-phonecard">
                    <div className="contactMe-card">
                        <div className="hireMe-symbol">”</div>
                        <div className="hireMe-details">
                            <h2>Let's Chat</h2>
                            <h2>Want to schedule an interview or have questions? I'm just a call or message away.</h2>
                            <h2>Name : Ravikumar</h2>
                            <h2>Mobile No : +91 8056251542</h2>
                            <h2>Email ID : ravikumarrajasekaran11@gmail.com</h2>
                        </div>
                        <div className="hireMe-btn phonecall">
                            <button className='whatsapp-me'><a href={whatsappLink} target="_blank" rel="noopener noreferrer">Whatsapp Me</a></button>
                            <button className="call-btn">Call Me</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HireMe