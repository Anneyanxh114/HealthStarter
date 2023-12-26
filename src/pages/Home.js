import React from 'react';
import Header from '../components/header';
import { Divider } from 'antd';
import '../assets/main.css';
import Footer from '../components/footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Divider className="header-divider" />
            <div className='body'>
                <img src={[require("../assets/Home/Banner.png")]} alt="Banner" className='Banner' />
                <div className='stats'>
                    <div className='statsBox'>
                        <p className='statsRed'>100%</p>
                        <p className='statsTitle'>Decentralized</p>
                    </div>
                    <div className='statsBox'>
                        <p className='statsGreen'>8</p>
                        <p className='statsTitle'>Categories</p>
                    </div>
                    <div className='statsBox'>
                        <p className='statsRed'>3,936</p>
                        <p className='statsTitle'>Projects</p>
                    </div>
                    <div className='statsBox'>
                        <p className='statsGreen'>$2,048,342</p>
                        <p className='statsTitle'>Fundings</p>
                    </div>
                </div>
                <Divider />
                <div className='categories'>
                    <p id="centeredCategories" className='title'>Categories</p>
                    <div className='categoryLine1'>
                        <div className='categoryBox'>
                            <img src={[require("../assets/Home/healthcareAid.png")]} alt="Banner" className='categoryImg' />
                            <p className='categoryTitle'>Healthcare Aid</p>
                            <p className='categoryDetail'>Offers help patients</p>
                        </div>
                        <div className='categoryBox'>
                            <img src={[require("../assets/Home/serviceAccess.png")]} alt="Banner" className='categoryImg1' />
                            <p className='categoryTitle'>Service Access</p>
                            <p className='categoryDetail'>Provides accessible services</p>
                        </div>
                        <div className='categoryBox'>
                            <img src={[require("../assets/Home/medicalResearch.png")]} alt="Banner" className='categoryImg2' />
                            <p className='categoryTitle'>Medical Research</p>
                            <p className='categoryDetail'>Supports medical research</p>
                        </div>
                        <div className='categoryBox'>
                            <img src={[require("../assets/Home/mentalWellness.png")]} alt="Banner" className='categoryImg' />
                            <p className='categoryTitle'>Mental Wellness</p>
                            <p className='categoryDetail'>Be aware of mental health</p>
                        </div>
                    </div>
                    <div className='categoryLine2'>
                        <div className='categoryBox'>
                            <img src={[require("../assets/Home/techInnovators.png")]} alt="Banner" className='categoryImg' />
                            <p className='categoryTitle'>Tech Innovators</p>
                            <p className='categoryDetail'>Offers help patients</p>
                        </div>
                        <div className='categoryBox'>
                            <img src={[require("../assets/Home/digitalCreators.png")]} alt="Banner" className='categoryImg1' />
                            <p className='categoryTitle'>Digital Creators</p>
                            <p className='categoryDetail'>Provides accessible services</p>
                        </div>
                        <div className='categoryBox'>
                            <img src={[require("../assets/Home/sustainableVentures.png")]} alt="Banner" className='categoryImg2' />
                            <p className='categoryTitle'>Sustainable Ventures</p>
                            <p className='categoryDetail'>Supports medical research</p>
                        </div>
                        <div className='categoryBox'>
                            <img src={[require("../assets/Home/socialExplorers.png")]} alt="Banner" className='categoryImg' />
                            <p className='categoryTitle'>Social Explorers</p>
                            <p className='categoryDetail'>Be aware of mental health</p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Home;
