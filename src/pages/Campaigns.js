import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { useHistory } from 'react-router-dom';
import { Divider } from 'antd';

const Campaigns = () => {
    return (
        <div>
            <Header />
            <Divider className='header-divider' />
            <div className='body'>
                <div className='title' id='Title'>Campaigns</div>
                <div className='subTitle' id='Title'>Top Picks</div>
                <div class='topPicks'>
                    <div class="campaign-card">
                        <img src={[require("../assets/Campaigns/Campaign1.png")]} alt="CampaignImage" className='CampaignImage' />
                        <div class="campaign-details">
                            <div class="campaign-title">HealthBridge: Connecting Communities to Support Hospitals</div>
                            <div class="button-row">
                                <button class="categoryTag">Healthcare Aid</button>
                                <img src={[require("../assets/Campaigns/Like.png")]} alt="like" class="like" />
                            </div>
                            <img src={[require("../assets/Campaigns/ProgressLine.png")]} alt="progress" class="progress" />
                            <div>
                                <span className='data'>14.7 ETH</span> <span className='dataType'>pleged</span> <span className='percentage'>40%</span>
                            </div>
                            <div><span className='data'>158</span> <span className='dataType'>backers</span> </div>
                            <div><span className='data'>20</span> <span className='dataType'>days to go</span> </div>
                            <div class='seeMoreBtn'><button class="seeMore">See More</button></div>
                        </div>
                    </div>
                    <div class="campaign-card">
                        <img src={[require("../assets/Campaigns/Campaign1.png")]} alt="CampaignImage" className='CampaignImage' />
                        <div class="campaign-details">
                            <div class="campaign-title">HealthBridge: Connecting Communities to Support Hospitals</div>
                            <div class="button-row">
                                <button class="categoryTag">Healthcare Aid</button>
                                <img src={[require("../assets/Campaigns/Like.png")]} alt="like" class="like" />
                            </div>
                            <img src={[require("../assets/Campaigns/ProgressLine.png")]} alt="progress" class="progress" />
                            <div>
                                <span className='data'>14.7 ETH</span> <span className='dataType'>pleged</span> <span className='percentage'>40%</span>
                            </div>
                            <div><span className='data'>158</span> <span className='dataType'>backers</span> </div>
                            <div><span className='data'>20</span> <span className='dataType'>days to go</span> </div>
                            <div class='seeMoreBtn'><button class="seeMore">See More</button></div>
                        </div>
                    </div>
                    <div class="campaign-card">
                        <img src={[require("../assets/Campaigns/Campaign1.png")]} alt="CampaignImage" className='CampaignImage' />
                        <div class="campaign-details">
                            <div class="campaign-title">HealthBridge: Connecting Communities to Support Hospitals</div>
                            <div class="button-row">
                                <button class="categoryTag">Healthcare Aid</button>
                                <img src={[require("../assets/Campaigns/Like.png")]} alt="like" class="like" />
                            </div>
                            <img src={[require("../assets/Campaigns/ProgressLine.png")]} alt="progress" class="progress" />
                            <div>
                                <span className='data'>14.7 ETH</span> <span className='dataType'>pleged</span> <span className='percentage'>40%</span>
                            </div>
                            <div><span className='data'>158</span> <span className='dataType'>backers</span> </div>
                            <div><span className='data'>20</span> <span className='dataType'>days to go</span> </div>
                            <div class='seeMoreBtn'><button class="seeMore">See More</button></div>
                        </div>
                    </div>
                </div>
                <Divider />
                <div className='subTitle' id='Title'>All Campaigns</div>
                <div class='allCampaigns'>
                    <div class="campaign-card">
                        <img src={[require("../assets/Campaigns/Campaign1.png")]} alt="CampaignImage" className='CampaignImage' />
                        <div class="campaign-details">
                            <div class="campaign-title">HealthBridge: Connecting Communities to Support Hospitals</div>
                            <div class="button-row">
                                <button class="categoryTag">Healthcare Aid</button>
                                <img src={[require("../assets/Campaigns/Like.png")]} alt="like" class="like" />
                            </div>
                            <img src={[require("../assets/Campaigns/ProgressLine.png")]} alt="progress" class="progress" />
                            <div>
                                <span className='data'>14.7 ETH</span> <span className='dataType'>pleged</span> <span className='percentage'>40%</span>
                            </div>
                            <div><span className='data'>158</span> <span className='dataType'>backers</span> </div>
                            <div><span className='data'>20</span> <span className='dataType'>days to go</span> </div>
                            <div class='seeMoreBtn'><button class="seeMore">See More</button></div>
                        </div>
                    </div>
                    <div class="campaign-card">
                        <img src={[require("../assets/Campaigns/Campaign1.png")]} alt="CampaignImage" className='CampaignImage' />
                        <div class="campaign-details">
                            <div class="campaign-title">HealthBridge: Connecting Communities to Support Hospitals</div>
                            <div class="button-row">
                                <button class="categoryTag">Healthcare Aid</button>
                                <img src={[require("../assets/Campaigns/Like.png")]} alt="like" class="like" />
                            </div>
                            <img src={[require("../assets/Campaigns/ProgressLine.png")]} alt="progress" class="progress" />
                            <div>
                                <span className='data'>14.7 ETH</span> <span className='dataType'>pleged</span> <span className='percentage'>40%</span>
                            </div>
                            <div><span className='data'>158</span> <span className='dataType'>backers</span> </div>
                            <div><span className='data'>20</span> <span className='dataType'>days to go</span> </div>
                            <div class='seeMoreBtn'><button class="seeMore">See More</button></div>
                        </div>
                    </div>
                    <div class="campaign-card">
                        <img src={[require("../assets/Campaigns/Campaign1.png")]} alt="CampaignImage" className='CampaignImage' />
                        <div class="campaign-details">
                            <div class="campaign-title">HealthBridge: Connecting Communities to Support Hospitals</div>
                            <div class="button-row">
                                <button class="categoryTag">Healthcare Aid</button>
                                <img src={[require("../assets/Campaigns/Like.png")]} alt="like" class="like" />
                            </div>
                            <img src={[require("../assets/Campaigns/ProgressLine.png")]} alt="progress" class="progress" />
                            <div>
                                <span className='data'>14.7 ETH</span> <span className='dataType'>pleged</span> <span className='percentage'>40%</span>
                            </div>
                            <div><span className='data'>158</span> <span className='dataType'>backers</span> </div>
                            <div><span className='data'>20</span> <span className='dataType'>days to go</span> </div>
                            <div class='seeMoreBtn'><button class="seeMore">See More</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Campaigns;
