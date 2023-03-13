import React, { useState, useRef } from 'react';
import './HireMe.css'
import SmallModal from '../Elements/Small Modal/SmallModal';
import emailjs from '@emailjs/browser';

function HireMe() {

    const whatsappLink = 'https://wa.link/76u37v';
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [sent, setSent] = useState(false);
    const [sentFailed, setSentFailed] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ew5t0nq', 'template_jxtp359', form.current, 'XFvcPdVbuI6fentbl')
            .then((result) => {
                console.log(result.status);
                setShowModal(false);
                if (result.status === 200) {
                    setSent(true);
                    setName('');
                    setEmail('');
                    setMessage('');
                    console.log("Email Sent Successfully");
                    setInterval(() => {
                        setSent(false);
                    }, 3000);
                }
            }, (error) => {
                setSentFailed(true);
                setInterval(() => {
                    setSentFailed(false);
                }, 3500);
                console.log(error.text);
            });
    };




    return (
        <div className="hireMe-wrapper">

            {
                showModal && (
                    <SmallModal>
                        <form ref={form} onSubmit={sendEmail} className="form-wrapper">
                            <div className="resume-close" onClick={toggleModal}></div>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />

                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>

                            <button type="submit">Submit</button>
                        </form>
                    </SmallModal>
                )
            }

            {
                sent && (
                    <SmallModal>
                        <div className="success">Hooray! Your Email Has Been Sent</div>
                    </SmallModal>
                )
            }

            {
                sentFailed && (
                    <SmallModal>
                        <div className="success failed">Oops! Your email was not sent. Please try again</div>
                    </SmallModal>
                )
            }


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
                            <button onClick={toggleModal}>Hire Me</button>
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
                            <button className='whatsapp-me'><a href={whatsappLink}>Whatsapp Me</a></button>
                            <button className="call-btn"><a href="tel:+918056251542">Call Me</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HireMe