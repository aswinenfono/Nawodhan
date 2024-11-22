import React from 'react'
import ImageComp from '../../../../../Components/ImageComp'
import { ParagraphComp } from '../../../../../Components/ParagraphComp'
import { Link } from 'react-router-dom'

const Profile = () => {
    
    return (
        <>
            <div className='p-[20px] mt-[40px]'>
                <div className='w-[600px] justify-between h-[auto] flex rounded-xl bg-[#0F75BC] p-[20px]'>
                    <div className='w-[30%] h-[auto] flex justify-center items-center'>
                        <ImageComp className='h-[130px]' source={'../../images/Group 57.png'} />
                    </div>
                    <div className='w-[65%] bg-white rounded-xl p-[15px]'>
                        <ParagraphComp className='text-md  font-bold text-[black] ' text='Profile' />
                        <ParagraphComp className='text-md mt-[6px] font-semibold text-[black] ' text='Muhammed Shammas' />
                        <ParagraphComp className='text-md mt-[6px] font-semibold text-[black] ' text='user@gmail.com' />
                        <ParagraphComp className='text-md mt-[6px] font-semibold text-[black] ' text='+91 9646464467' />
                        <ParagraphComp className='text-md mt-[6px] font-semibold text-[black] ' text='Kerala Kozhikode' />
                        <ParagraphComp className='text-md mt-[6px] font-semibold text-[black] ' text='673614' />
                        <Link className="underline leading-5 text-[#0F75BC]" >Reset password</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile