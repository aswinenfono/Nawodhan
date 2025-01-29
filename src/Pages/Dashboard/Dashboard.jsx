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
import Faq from './Faq/Faq';
import SuccessAnimation from './Components/DashboardHome/SuccessAnimation';

const Dashboard = () => {
    const [landId, setLandId] = useState();
    const location = useLocation();

    // Determine if the Header should be displayed
    const shouldShowHeader = location.pathname !== '/dashboard/profile' && location.pathname !== '/dashboard/faq';

    return (
        <div className="flex max-md:flex-col w-[100%]">
            <div className="w-[15%] max-md:w-[100%] transition-[2s]">
                <SideBar />
            </div>
            <div className="w-[85%] max-md:w-[100%] h-[100vh] overflow-scroll">
                {shouldShowHeader && (
                    <div className=" max-md:p-[10px] p-[20px]">
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
                        <Route path="success-form" element={<SuccessAnimation  />} />
                        <Route path="faq" element={<Faq />} />
                        <Route path="/" element={<Navigate to="lands" replace />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
