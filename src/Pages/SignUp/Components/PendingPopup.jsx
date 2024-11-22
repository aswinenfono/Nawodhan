import React from 'react'
import { ParagraphComp } from '../../../Components/ParagraphComp'
import ImageComp from '../../../Components/ImageComp'
import HeaderCompo from '../../../Components/HeaderComp'
import ButtonComp from '../../../Components/ButtonComp'
import { useNavigate } from 'react-router-dom'

const PendingPopup = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='flex w-[100%] justify-center'>

                <div className='w-[30%] bg-[#FFFFFFA8] max-sm:w-[100%] shadow-lg p-[20px] justify-center flex flex-col items-center h-[400px] rounded-3xl'>
                    <div className='h-[130px] w-[130px] flex justify-center items-center rounded-full bg-white'>
                        <ImageComp className='h-[90px] ml-3' source='../images/time 1.png' />
                    </div>
                    <HeaderCompo className='text-2xl text-center mt-[40px] text-[#0F75BC] font-schibsted font-bold' text='Your Access is On Its Way!' />
                    <ParagraphComp className='text-md text-[#0F75BC] mt-[20px] text-center' >
                        Thank you for joining us! Your account
                        <br />
                        is pending approval
                    </ParagraphComp>
                    <ButtonComp onClick={() => { navigate('/signin') }} type='submit' className='p-[10px] mt-[20px] w-[100%] border-none rounded-full shadow-lg text-white  bg-[#0F75BC] '>
                        Go to Sign In
                    </ButtonComp>
                </div>
            </div>
        </>
    )
}

export default PendingPopup