import React from 'react'
import HeaderCompo from '../../../Components/HeaderComp'
import ButtonComp from '../../../Components/ButtonComp'
import LogoutIcon from '@mui/icons-material/Logout';
import { ParagraphComp } from '../../../Components/ParagraphComp';
import { useLocation, useNavigate } from 'react-router-dom';
const SideBar = () => {
    const location = useLocation();

    const navigate = useNavigate()

    const updateBtnName = (name) => {
        if (name === 'profile') {
            navigate('/dashboard/profile')
        } else {
            navigate('/dashboard')
        }
    }
    const path = location.pathname == '/dashboard/profile';
    return (
        <div className='p-[10px] border-r-2 border-[#0F75BC]'>
            <div className='h-[100px] justify-center flex items-center'>
                <HeaderCompo tagType='h3' className='text-xl text-[#0F75BC] font-semibold' text='NAWODHAN' />
            </div>
            <div className='w-[100%] rounded-md bg-[#D9EFFF] justify-between flex flex-col h-[85vh] p-[10px]'>
                <div>
                    <ButtonComp onClick={() => { updateBtnName('home') }} className={`text-start w-[100%] transition-[2s] py-[10px] px-[10px] mt-[15px] ${!path ? 'bg-[#0F75BC] text-[white]' : 'bg-[white] text-[#0F75BC]'} font-semibold  rounded-md`} text='Home' />
                    <ButtonComp onClick={() => { updateBtnName('profile') }} className={`text-start w-[100%] transition-[2s] py-[10px] px-[10px] mt-[15px] ${path ? 'bg-[#0F75BC] text-[white]' : 'bg-[white] text-[#0F75BC]'} font-semibold  rounded-md`} text='Profile' />
                </div>

                <ButtonComp onClick={() => { navigate('/signin') }} className=' w-[100%] py-[10px] px-[10px] flex mb-[15px] text-center font-semibold bg-[white] text-[#0F75BC] rounded-md' >
                    <LogoutIcon className='text-[red] mr-[35px] ' />
                    <ParagraphComp className='' text='Logout' />
                </ButtonComp>
            </div>


        </div>
    )
}

export default SideBar