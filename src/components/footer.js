import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className='footerBox'>
            <div className='leftBox'>
                <img src={[require("../assets/HeaderImage/Logo.png")]} alt="Logo" className='Logo' />
                <p className='slogan'>A Decentralized Crowdfunding Platform for Healthcare Charities and Startup Companies</p>
                <p className='copyright'>© 2023 HealthStarter Limited</p>
            </div>
            <div className="rightBox">
                <div class="footer-navigator">
                    <a href="/" class="nav-item">Home</a>
                    <a href="/campaigns" class="nav-item">Campaigns</a>
                    <a href="/start-a-campaign" class="nav-item">Start a Campaign</a>
                </div>
                <div class="social-media">
                    <img src={[require("../assets/FooterImage/Discord.png")]} alt="Logo" className='discord' />
                    <img src={[require("../assets/FooterImage/github.png")]} alt="Logo" className='github' />
                    <img src={[require("../assets/FooterImage/twitter.png")]} alt="Logo" className='twitter' />
                </div>
            </div>
        </div>
    );
};

export default Footer;









