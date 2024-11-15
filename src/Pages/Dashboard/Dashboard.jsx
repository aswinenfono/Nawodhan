import React, { useState } from 'react'
import SideBar from './Components/SideBar'
import Header from './Components/Header'
import Lands from './Components/Lands'
import ApplyForRFP from './Components/ApplyForRFP'
import SubmissionForm from './Components/SubmissionForm'
import Timer from './Components/Timer'
import LandsDetails from './Components/LandsDetails'

const Dashboard = () => {
    const [Buttons, setButtons] = useState({ 'Lands': { 'Lands': true } })
    return (
        <>
            <div className='flex w-[100%]'>
                <div className='w-[15%]'>
                    <SideBar />
                </div>
                <div className='w-[85%] p-[20px]'>
                    <Header setButtons={setButtons} Buttons={Buttons} />
                    {Buttons?.['Lands']?.['Lands'] ?
                        <Lands setButtons={setButtons} />
                        :
                        Buttons?.['Apply for RFP']?.['Apply for RFP'] ?
                            <ApplyForRFP setButtons={setButtons} />
                            :
                            Buttons?.['Lands']?.['Lands Details'] ?
                                <LandsDetails setButtons={setButtons} />
                                :
                                Buttons?.['Apply for RFP']?.['Submission Form'] ?
                                    <SubmissionForm setButtons={setButtons} />
                                    :
                                    Buttons?.['Apply for RFP']?.['Timer'] ?
                                        <Timer setButtons={setButtons} />
                                        : ''
                    }
                </div>
            </div>
        </>
    )
}

export default Dashboard