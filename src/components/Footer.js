import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <div className="footer-content">
        <p>Created by: L.R   
        <Link className="footer-link" to={'/about'}> About us</Link>
        </p>
    </div>

)

export default Footer;