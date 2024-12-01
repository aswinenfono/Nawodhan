import React, { useEffect, useState } from 'react'
import ImageComp from '../../../../../Components/ImageComp'
import { ParagraphComp } from '../../../../../Components/ParagraphComp'
import { Link } from 'react-router-dom'

const Profile = () => {
  const [language, setLanguage] = useState('en')
  const localLanguage = localStorage.getItem('language');

  useEffect(() => {
    if (localLanguage) {
      setLanguage(localLanguage);
    }
  }, []);
    
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
            <div className='mt-2'>
              <form className="max-w-[50%]">
                <label for="countries" className="block mb-2 text-sm font-medium">Select an option</label>
                <select value={language} onChange={e => {
                  setLanguage(e.target.value)
                  localStorage.setItem('language', e.target.value)
                }} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected>Choose a language</option>
                  <option value="en">English</option>
                  <option value="ml">Malayalam</option>
                </select>
              </form>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile