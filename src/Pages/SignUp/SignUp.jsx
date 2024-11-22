import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Initial from './Components/Initial';
import Complete from './Components/Complete';
import PendingPopup from './Components/PendingPopup';
const SignUp = () => {


    return (
        <>

            <div className='w-[100%] object-cover h-[100vh] items-center p-[20px] flex max-md:flex-col bgImage'>

                <Routes>
                    <Route path='complete' element={<Complete />} />
                    <Route path='initial' element={<Initial />} />
                    <Route path='pending' element={<PendingPopup />} />
                    <Route path='/' element={<Navigate to="initial" replace />} />
                </Routes>

            </div >

        </>

    )
}

export default SignUp