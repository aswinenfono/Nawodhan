// Dashboard.jsx
import React, { useState } from 'react';
import { Navigate, Route, Routes, } from 'react-router-dom';
import SideBar from './Components/SideBar';
import Header from './Components/Header';
import Lands from './Components/Lands';
import ApplyForRFP from './Components/ApplyForRFP';
import SubmissionForm from './Components/SubmissionForm';
import Timer from './Components/Timer';
import LandDetailsPlus from './Components/LandDetailsPlus';

const Dashboard = () => {
    // const [Buttons, setButtons] = useState({ 'Lands': { 'Lands': true } })
    const [landId, setLandId] = useState()
    return (
        <div className="flex w-[100%]">
            <div className="w-[15%]">
                <SideBar />
            </div>
            <div className="w-[85%]">
                <div className='p-[20px]'>
                    <Header />
                </div>
                <div className='p-[20px]'>
                    <Routes>
                        <Route path="lands" element={<Lands setLandId={setLandId} />} />
                        <Route path="apply-for-rfp" element={<ApplyForRFP setLandId={setLandId} />} />
                        <Route path="submission-form" element={<SubmissionForm />} />
                        <Route path="timer" element={<Timer />} />
                        <Route path="land-details-plus/:landId" element={<LandDetailsPlus landId={landId} />} />
                        <Route path="/" element={<Navigate to="lands" replace />} />
                    </Routes>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
