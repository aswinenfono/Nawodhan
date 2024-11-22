import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SignUp from '../Pages/SignUp/SignUp'
import SignIn from '../Pages/SignIn/SignIn'
import Dashboard from '../Pages/Dashboard/Dashboard'
const AppRoute = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<SignUp />} path='/signup/*' />
                    <Route element={<SignIn />} path='/signin' />
                    <Route path="/dashboard/*" element={<Dashboard />} />
                    <Route path="/" element={<Navigate to="signin" replace />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoute