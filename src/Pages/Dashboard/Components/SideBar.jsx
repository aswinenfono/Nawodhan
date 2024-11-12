import React from 'react'
import HeaderCompo from '../../../Components/HeaderComp'
import ButtonComp from '../../../Components/ButtonComp'
import LogoutIcon from '@mui/icons-material/Logout';
import { ParagraphComp } from '../../../Components/ParagraphComp';
const SideBar = () => {
    return (
        <div className='p-[10px] border-r-2 border-[#0F75BC]'>
            <div className='h-[100px] justify-center flex items-center'>
                <HeaderCompo tagType='h3' className='text-xl text-[#0F75BC] font-semibold' text='NAWODHAN' />
            </div>
            <div className='w-[100%] rounded-md bg-[#D9EFFF] justify-between flex flex-col h-[85vh] p-[10px]'>
                <div>
                    <ButtonComp className='text-start w-[100%] py-[10px] px-[10px] mt-[15px] font-semibold bg-[white] text-[#0F75BC] rounded-md' text='Home' />
                    <ButtonComp className='text-start w-[100%] py-[10px] px-[10px] mt-[15px] font-semibold bg-[white] text-[#0F75BC] rounded-md' text='Profile' />
                </div>

                <ButtonComp className=' w-[100%] py-[10px] px-[10px] flex mb-[15px] text-center font-semibold bg-[white] text-[#0F75BC] rounded-md' >
                    <LogoutIcon className='text-[red] mr-[35px] ' />
                    <ParagraphComp className='' text='Logout' />
                </ButtonComp>
            </div>


        </div>
    )
}

export default SideBar