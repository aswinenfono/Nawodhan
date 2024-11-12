import React from 'react'
import { ParagraphComp } from '../../../Components/ParagraphComp'
import CusSelect from '../../../Components/CusSelect'

const LandsDetails = () => {
    return (
        <>
            <div className='p-[20px] h-[68vh] overflow-y-scroll overflow-x-hidden'>
                <ParagraphComp text='LANDS DETAILS' className='text-xl mt-[20px] text-[#0F75BC] font-bold' />
                <div className='mt-[20px]'>
                    <CusSelect options={[]} label=' Select Land owner type' />
                </div>
                <div className='p-[20px] mt-[20px] rounded-lg bg-[#D9EFFF]'>
                    <div className='flex'>
                        <div className='flex w-[200px] justify-between'>
                            <ParagraphComp className='font-semibold' text='Name Of Applicant' />
                            : &nbsp;
                        </div>
                        <div>
                            <ParagraphComp className='' text='Muammed Shamas' />
                        </div>

                    </div>
                    <div className='flex mt-[20px]'>
                        <div className='flex w-[200px] justify-between'>
                            <ParagraphComp className='font-semibold' text='Phone Number' />
                            : &nbsp;
                        </div>
                        <div>
                            <ParagraphComp className='' text='+91 0987662636' />
                        </div>

                    </div>
                    <div className='flex mt-[20px]'>
                        <div className='flex w-[200px] justify-between'>
                            <ParagraphComp className='font-semibold' text='Email Id' />
                            : &nbsp;
                        </div>
                        <div>
                            <ParagraphComp className='' text='user@gmail.com' />
                        </div>

                    </div>
                    <div className='flex mt-[20px]'>
                        <div className='flex w-[200px] justify-between'>
                            <ParagraphComp className='font-semibold' text='District' />
                            : &nbsp;
                        </div>
                        <div>
                            <ParagraphComp className='' text='Kozhikode' />
                        </div>

                    </div>
                    <div className='flex mt-[20px]'>
                        <div className='flex w-[200px] justify-between'>
                            <ParagraphComp className='font-semibold' text='Permanent Address' />
                            : &nbsp;
                        </div>
                        <div>
                            <ParagraphComp className='' >
                                Green House
                                <br />
                                post : Kallayi
                                <br />
                                via villiyambil
                                <br />
                                pin : 87654
                                <br />
                                Kerala
                                <br />
                                India
                            </ParagraphComp>
                        </div>

                    </div>
                </div>

                <div className='w-[100%] flex mt-[20px] justify-between'>
                    <div className='p-[20px] w-[49%] rounded-lg bg-[#D9EFFF]'>
                        <ParagraphComp text='Basic Land Details' className='text-md mt-[20px] font-bold text-[black]' />
                        <div className='flex mt-[20px]'>
                            <div className='flex w-[200px] justify-between'>
                                <ParagraphComp className='font-semibold' text='village' />
                                : &nbsp;
                            </div>
                            <div>
                                <ParagraphComp className='' text='' />
                            </div>
                        </div>
                        <div className='flex mt-[20px]'>
                            <div className='flex w-[200px] justify-between'>
                                <ParagraphComp className='font-semibold' text='Taluk' />
                                : &nbsp;
                            </div>
                            <div>
                                <ParagraphComp className='' text='' />
                            </div>
                        </div>
                        <div className='flex mt-[20px]'>
                            <div className='flex w-[200px] justify-between'>
                                <ParagraphComp className='font-semibold' text='District' />
                                : &nbsp;
                            </div>
                            <div>
                                <ParagraphComp className='' text='' />
                            </div>
                        </div>
                        <div className='flex mt-[20px]'>
                            <div className='flex w-[200px] justify-between'>
                                <ParagraphComp className='font-semibold' text='Revenue Block Number ' />
                                : &nbsp;
                            </div>
                            <div>
                                <ParagraphComp className='' text='' />
                            </div>
                        </div>
                        <div className='flex mt-[20px]'>
                            <div className='flex w-[200px] justify-between'>
                                <ParagraphComp className='font-semibold' text='Survey Number' />
                                : &nbsp;
                            </div>
                            <div>
                                <ParagraphComp className='' text='' />
                            </div>
                        </div>
                    </div>
                    <div className='p-[20px] w-[49%] rounded-lg bg-[#D9EFFF]'>
                        <ParagraphComp text='Total Availability Of land' className='text-md mt-[20px] font-bold text-[black]' />
                        <div className='flex mt-[20px]'>
                            <div className='flex w-[200px] justify-between'>
                                <ParagraphComp className='font-semibold' text='Total Availbility of land in acre ' />
                                : &nbsp;
                            </div>
                            <div>
                                <ParagraphComp className='' text='' />
                            </div>
                        </div>
                        <div className='flex mt-[20px]'>
                            <div className='flex w-[200px] justify-between'>
                                <ParagraphComp className='font-semibold' text='Intercropping Area  Available' />
                                : &nbsp;
                            </div>
                            <div>
                                <ParagraphComp className='' text='' />
                            </div>
                        </div>
                        <div className='flex mt-[20px]'>
                            <div className='flex w-[200px] justify-between'>
                                <ParagraphComp className='font-semibold' text='Existing Crops Name' />
                                : &nbsp;
                            </div>
                            <div>
                                <ParagraphComp className='' text='' />
                            </div>
                        </div>
                        <div className='flex mt-[20px]'>
                            <div className='flex w-[200px] justify-between'>
                                <ParagraphComp className='font-semibold' text='Cordinates of the land ' />
                                : &nbsp;
                            </div>
                            <div>
                                <ParagraphComp className='' text='' />
                            </div>
                        </div>

                    </div>
                </div>

                <div className='p-[20px] w-[100%] mt-[30px] rounded-lg bg-[#D9EFFF]'>
                    <ParagraphComp text='Physical Status Of land' className='text-md mt-[20px] font-bold text-[black]' />
                    <div className='flex justify-between w-[100%]'>
                        <div className='w-[48%] mt-[20px]'>
                            <CusSelect options={[]} label='Select land type' />
                        </div>
                        <div className='w-[48%] mt-[20px]' >
                            <CusSelect options={[]} label='Select land type' />
                        </div>
                    </div>
                </div>
                <div className='p-[20px] w-[100%] mt-[30px] rounded-lg bg-[#D9EFFF]'>
                    <ParagraphComp text='Details of boundaries' className='text-md mt-[20px] font-bold text-[black]' />
                    <div className='flex justify-between w-[100%]'>
                        <div className='w-[50%]'>
                            <div className='flex mt-[20px]'>
                                <div className='flex w-[200px] justify-between'>
                                    <ParagraphComp className='font-semibold' text='East' />
                                    : &nbsp;
                                </div>
                                <div>
                                    <ParagraphComp className='' text='' />
                                </div>
                            </div>
                            <div className='flex mt-[20px]'>
                                <div className='flex w-[200px] justify-between'>
                                    <ParagraphComp className='font-semibold' text='West' />
                                    : &nbsp;
                                </div>
                                <div>
                                    <ParagraphComp className='' text='' />
                                </div>
                            </div>
                        </div>
                        <div className='w-[50%]'>
                            <div className='flex mt-[20px]'>
                                <div className='flex w-[200px] justify-between'>
                                    <ParagraphComp className='font-semibold' text='North' />
                                    : &nbsp;
                                </div>
                                <div>
                                    <ParagraphComp className='' text='' />
                                </div>
                            </div>
                            <div className='flex mt-[20px]'>
                                <div className='flex w-[200px] justify-between'>
                                    <ParagraphComp className='font-semibold' text='South' />
                                    : &nbsp;
                                </div>
                                <div>
                                    <ParagraphComp className='' text='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >

        </>
    )
}

export default LandsDetails