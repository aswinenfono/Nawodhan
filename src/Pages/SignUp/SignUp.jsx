import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Initial from './Components/Initial';
import Complete from './Components/Complete';
import PendingPopup from './Components/PendingPopup';
const SignUp = () => {
  const navigate = useNavigate()
  const [IntialForm, setIntialForm] = useState()
  useEffect(() => {
    if (!IntialForm?.mobile_number) {
      navigate('/signup/initial')
    }
  }, [])


  return (
    <>

      <div className='w-[100%] object-cover h-[100vh] items-center p-[20px] flex max-md:flex-col bgImage'>
        <Routes>
          <Route path='complete' element={<Complete IntialForm={IntialForm} />} />
          <Route path='initial' element={<Initial setIntialForm={setIntialForm} />} />
          <Route path='pending' element={<PendingPopup />} />
          <Route path='/' element={<Navigate to="initial" replace />} />
        </Routes>
      </div>
    </>
  )
}

export default SignUp