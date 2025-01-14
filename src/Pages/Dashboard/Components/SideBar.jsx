import React from 'react'
import HeaderCompo from '../../../Components/HeaderComp'
import ButtonComp from '../../../Components/ButtonComp'
import LogoutIcon from '@mui/icons-material/Logout';
import { ParagraphComp } from '../../../Components/ParagraphComp';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
const SideBar = () => {
  const location = useLocation();
  const subMenus = ['dashboard/lands', 'apply-for-rfp', 'submission-form', 'timer'];
  const currentSub_tab = location?.pathname


  const navigate = useNavigate()

  const updateBtnName = (path) => {
    if (path) {
      navigate(path)
    } else {
      navigate('/')
    }
  }

  const menus = [
    {
      label: 'Home',
      path: '/dashboard'
    },
    {
      label: 'FAQ',
      path: '/dashboard/faq'
    },
    {
      label: 'Profile',
      path: '/dashboard/profile'
    }
  ]

  return (
    <div className='p-[10px] border-r-2 border-[#0F75BC]'>
      <div className='h-[100px] justify-center flex items-center'>
        <HeaderCompo tagType='h3' className='text-xl text-[#0F75BC] font-semibold' text='NAWO-DHAN' />
      </div>
      <div className='w-[100%] rounded-md bg-[#D9EFFF] justify-between flex flex-col h-[85vh] p-[10px]'>
        <div>
          {menus?.map((menu, index) => {
            return (
              <ButtonComp key={index} onClick={() => { updateBtnName(menu?.path) }} className={`text-start w-[100%] transition-[2s] py-[10px] px-[10px] mt-[15px] ${(menu?.path === location?.pathname || subMenus?.includes(currentSub_tab)) ? 'bg-[#0F75BC] text-[white]' : 'bg-[white] text-[#0F75BC]'} font-semibold  rounded-md`} text={menu?.label} />
            )
          })}
        </div>
        <ButtonComp
          onClick={() => {
            localStorage.clear();
            delete axios.defaults.headers.common.Authorization;
            navigate('/signin')
          }} className=' w-[100%] py-[10px] px-[10px] flex mb-[15px] text-center font-semibold bg-[white] text-[#0F75BC] rounded-md' >
          <LogoutIcon className='text-[red] mr-[35px] ' />
          <ParagraphComp className='' text='Logout' />
        </ButtonComp>
      </div>


    </div>
  )
}

export default SideBar