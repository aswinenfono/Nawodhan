// Dashboard.jsx
import React, { useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import SideBar from './Components/SideBar';
import Header from './Components/DashboardHome/Header';
import Lands from './Components/DashboardHome/Lands';
import ApplyForRFP from './Components/DashboardHome/ApplyForRFP';
import SubmissionForm from './Components/DashboardHome/SubmissionForm';
import Timer from './Components/DashboardHome/Timer';
import LandDetailsPlus from './Components/DashboardHome/LandDetailsPlus';
import Profile from './Components/DashboardHome/DashboardProfile/Profile';

const Dashboard = () => {
    const [landId, setLandId] = useState();
    const location = useLocation();

    // Determine if the Header should be displayed
    const shouldShowHeader = location.pathname !== '/dashboard/profile';

    return (
        <div className="flex w-[100%]">
            <div className="w-[15%] transition-[2s]">
                <SideBar />
            </div>
            <div className="w-[85%]">
                {shouldShowHeader && (
                    <div className="p-[20px]">
                        <Header />
                    </div>
                )}
                <div className="p-[20px] transition-[2s]">
                    <Routes>
                        <Route path="lands" element={<Lands setLandId={setLandId} />} />
                        <Route path="apply-for-rfp" element={<ApplyForRFP setLandId={setLandId} />} />
                        <Route path="submission-form" element={<SubmissionForm />} />
                        <Route path="timer" element={<Timer />} />
                        <Route path="land-details-plus/:landId" element={<LandDetailsPlus landId={landId} />} />
                        <Route path="profile" element={<Profile landId={landId} />} />
                        <Route path="/" element={<Navigate to="lands" replace />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
