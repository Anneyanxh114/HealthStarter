import React from 'react';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header className="horizontal-header">
            <div className="logo-container">
                <Link to="/"><img src={[require("../assets/HeaderImage/Logo.png")]} alt="Logo" className='Logo' /></Link>
            </div>
            <nav>
                <ul className="nav-list horizontal-nav-list">
                    <li>
                        <Link to="/campaigns">Campaigns</Link>
                    </li>
                    <li className='categories'>
                        <Link to="/categories">Categories</Link>
                        <DownOutlined className='downArrow' />
                    </li>
                    <li>
                        <Link to="/doc">Doc</Link>
                    </li>
                    <li className='categories'>
                        <Link to="/categories">Search</Link>
                        <SearchOutlined className='search' />
                    </li>
                </ul>
            </nav>

            <div className="buttons-container">
                <Link to="/start-a-campaign" className="btn">
                    <img src={[require("../assets/HeaderImage/StartCampaign.png")]} alt="startCampaign" className='connectWallet' />
                </Link>
                <Link to="/connect-wallet" className="btn">
                    <img src={[require("../assets/HeaderImage/ConnectWallet.png")]} alt="connectWallet" className='connectWallet' />
                </Link>
            </div>
        </header>

    );
};

export default Header;









