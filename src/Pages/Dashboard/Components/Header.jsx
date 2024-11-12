import React from 'react'
import { ParagraphComp } from '../../../Components/ParagraphComp'
import ButtonComp from '../../../Components/ButtonComp'
import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined';
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined';
const Header = ({ setButtons, Buttons }) => {
    const updateButton = (name) => {
        if (name === 'Apply for RFP') {
            setButtons({ [name]: { ['Timer']: true } })
        } else {
            setButtons({ [name]: { [name]: true } })
        }
    }
    return (
        <>
            <div className='mt-[20px]   p-[20px] w-[100%] bg-[#0F75BC] rounded-lg'>
                <ParagraphComp className='font-schibsted text-sm text-[white]' text='WELCOME AHAMMED' />
                <ParagraphComp className='font-schibsted text-lg mt-[6px] font-semibold text-[white]' text='Welcome to Your Agricultural Dashboard' />
            </div>
            <div className='flex gap-[10px] mt-[30px]'>
                <ButtonComp onClick={() => { updateButton('Lands') }} className={`w-[100%] shadow-md transition-[2s] p-[10px] justify-center flex gap-[7px] text-center  ${Buttons?.['Lands'] ? 'bg-[#0F75BC] text-white' : 'bg-[white] text-black'} rounded-lg`}  >
                    <div className={`h-[30px] w-[30px] ${Buttons?.['Lands'] ? 'bg-[white] transition-[2s] text-[#0F75BC]' : 'bg-[#0F75BC] text-[white]'}  flex justify-center items-center rounded-full `} >
                        <NoteOutlinedIcon className='rotate-90' />
                    </div>
                    Land View
                </ButtonComp >
                <ButtonComp onClick={() => { updateButton('Apply for RFP') }} className={`w-[100%] transition-[2s] shadow-md p-[10px] justify-center flex gap-[7px] text-center  ${Buttons?.['Apply for RFP'] ? 'bg-[#0F75BC] text-white' : 'bg-[white] text-black'} rounded-lg`}  >
                    <div className={`h-[30px] w-[30px] ${Buttons?.['Apply for RFP'] ? 'bg-[white] transition-[2s] text-[#0F75BC]' : 'bg-[#0F75BC] text-[white]'}  flex justify-center items-center rounded-full `} >
                        <AdsClickOutlinedIcon />
                    </div>
                    Apply for RFP
                </ButtonComp>
            </div >
        </>
    )
}

export default Header