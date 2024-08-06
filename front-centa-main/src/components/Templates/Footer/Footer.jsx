import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'; // Asegúrate de tener este archivo CSS para los estilos

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h2 className="footer-heading">Síguenos</h2>
                    <div className="footer-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookF} className="footer-icon" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} className="footer-icon" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} className="footer-icon" />
                        </a>
                    </div>
                </div>
                <div className="footer-section">
                    <h2 className="footer-heading">Contacto</h2>
                    <div className="footer-contact">
                        <p><FontAwesomeIcon icon={faPhone} className="contact-icon" /> +52 967 121 4677</p>
                        <p><FontAwesomeIcon icon={faEnvelope} className="contact-icon" /> centauroGym@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Centauro Gym. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
