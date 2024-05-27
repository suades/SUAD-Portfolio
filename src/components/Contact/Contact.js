import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import Particle from "../Particle";


function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tylpdo9', 'template_z9yuw4e', form.current, 'GJdOKQMp_jgxfvE2tN7_m')
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
                form.current.reset(); 
            }, (error) => {
                console.log(error.text);
                alert("Failed to send message, please try again.");
            });
    };

    return (
        <Container fluid className="contact-section" id="contact">
            <Particle />
            <h1 className="project-heading">
                <strong className="purple"> CONTACT ME </strong>
            </h1>
            <p style={{ color: "white" }}>Fill out this form to reach out to me:</p>
            <Row className="justify-content-center">
                <Col md={6}>
                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        <input type="text" name="user_name" placeholder="NAME" required />
                        <input type="email" name="user_email" placeholder="EMAIL" required />
                        <textarea  name="message" placeholder="MESSAGE" required></textarea>
                        <button style={{marginTop: "6%", marginBottom: "4%"}} type="submit" className="send-button"><i className="fa fa-paper-plane"></i>SEND</button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;

