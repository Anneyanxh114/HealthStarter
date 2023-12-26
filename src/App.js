import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Doc from './pages/Doc';
import Campaigns from './pages/Campaigns';
import StartACampaign from './pages/StartACampaign';
import CampaignDetails from './pages/CampaignDetails'
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doc" element={<Doc />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/start-a-campaign" element={<StartACampaign />} />
        <Route path="/campaign-details" element={<CampaignDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;