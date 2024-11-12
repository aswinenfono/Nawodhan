import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from '../Pages/SignUp/SignUp'
import SignIn from '../Pages/SignIn/SignIn'
import Dashboard from '../Pages/Dashboard/Dashboard'
const AppRoute = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<SignUp />} path='/signup' />
                    <Route element={<SignIn />} path='/signin' />
                    <Route element={<Dashboard />} path='/dashboard' />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoute