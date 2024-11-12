import React from 'react'
import { ParagraphComp } from '../../../Components/ParagraphComp';
import CusSelect from '../../../Components/CusSelect';
import CusInput from '../../../Components/CusInput';
import CustomFileInput from '../../../Components/CusFileInput';
import ButtonComp from '../../../Components/ButtonComp';
const ApplyForRFP = ({ setButtons }) => {

    const QualificationForm = [

        {
            label: 'Enter Your Name',
            name: 'full_name',
            type: 'text',
        },
        {
            label: 'Age',
            name: 'full_name',
            type: 'text',
        },
        {
            label: 'Citizenship Status',
            name: 'full_name',
            type: 'select',
        },
        {
            label: 'Age Group',
            name: 'full_name',
            type: 'select',
            parameter: 'Qualification and Scoring Matrix'
        },
        {
            label: 'Educational Qualification',
            name: 'full_name',
            type: 'select',
        },
        {
            label: 'Years of Farming/Agricultural Experience',
            name: 'full_name',
            type: 'select',
        },
        {
            label: 'Alliance or Tie-up with Forward Market',
            name: 'full_name',
            type: 'select',
        },
        {
            label: 'Attendance in International Seminars/Worksh...',
            name: 'full_name',
            type: 'select',
        },
        {
            label: 'Attendance in National or State',
            name: 'full_name',
            type: 'select',
        },
        {
            label: 'Membership in FPC, Startup, Krishikoottam',
            name: 'full_name',
            type: 'select',
        },
        {
            label: 'Experience in Hi-tech Farming Practices',
            name: 'full_name',
            type: 'select',
        },
        {
            label: 'Innovative Techniques Used in Farming',
            name: 'full_name',
            type: 'select',
        },
        {
            label: 'Adoption of Organic Farming Practices with',
            name: 'full_name',
            type: 'select',
        },
        {
            label: 'Use of Renewable Energy Resources',
            name: 'full_name',
            type: 'select',
        },
        {
            label: 'Community Development and Leadership',
            name: 'full_name',
            type: 'select',
        },
        {
            label: 'Financial Stability',
            name: 'full_name',
            type: 'select',
        },
        {
            label: 'Additional Requirements for FPOs',
            name: 'full_name',
            type: 'select',
        },
        {
            label: 'Number of Members',
            name: 'full_name',
            type: 'text',
        },
        {
            parameter: 'Attachments and Supporting Documents',
            label: 'Financial Bank Statements (Last 2 years)',
            name: 'full_name',
            type: 'file',
        },
        {
            label: 'Business Plan Document (For Youth/Agripreneurs)',
            name: 'full_name',
            type: 'file',
        },
        {
            label: 'Business Plan Document (For Youth/Agripreneurs)',
            name: 'full_name',
            type: 'file',
        },
    ]

    return (
        <>

            <div className='w-[100%] h-[68vh] overflow-y-scroll overflow-x-hidden mt-[20px] rounded-xl p-[20px]'>
                {/* <div className='flex justify-center'>
                    <div className='w-[500px] relative '>
                        <div className='flex justify-between'>
                            <ParagraphComp className='text-md text-[#0F75BC] ' text='TECHNICAL PROPOSAL' />
                            <ParagraphComp className='text-md text-[#0F75BC] ' text='FINANCIAL PROPOSAL ' />
                        </div>
                        <div className='flex mt-[10px] justify-center' >
                            <div className='w-fit flex items-center' >
                                <RadioButtonCheckedOutlinedIcon className='text-[#0F75BC] w-[20px] text-[30px]' />
                                <div className='w-[340px] h-[2px] border-2 border-[#0F75BC] '>
                                </div>
                                <RadioButtonCheckedOutlinedIcon className='text-[#0F75BC] w-[20px] text-[30px]' />
                            </div>
                        </div>
                    </div>
                </div> */}
                <ParagraphComp className='text-md mt-[30px] font-bold text-[#0F75BC] ' text='TECHNICAL PROPOSAL SUBMISSION FORM' />
                <ParagraphComp className='text-md text-[black] font-schibsted ' text='Name of Services: Inviting Cultivators for NAWODHAN implementation' />

                <div className='flex flex-wrap w-[100%] justify-between mt-[20px]'>
                    {QualificationForm.map(field =>

                        <>
                            {field.parameter &&
                                <div className='w-[100%]'>
                                    <ParagraphComp className='text-md mt-[30px] font-semibold text-[#0F75BC] ' text={field?.parameter} />
                                </div>
                            }
                            {field.type.toLocaleLowerCase() === 'select' ?
                                <div className='w-[32%] mt-[20px]'>
                                    <CusSelect options={[]} label={field?.label} />
                                </div>
                                :
                                field.type.toLocaleLowerCase() === 'file' ?
                                    <div className='w-[32%] mt-[20px]'>
                                        <CustomFileInput label={field?.label} />
                                    </div>
                                    :
                                    <div className='w-[32%] mt-[20px]'>
                                        <CusInput label={field?.label} type={field?.type} />
                                    </div>
                            }
                        </>

                    )}


                </div>
                <div className='flex justify-end mt-[30px] '>
                    <ButtonComp onClick={() => { setButtons({ ['Apply for RFP']: { ['Submission Form']: true } }) }} className='bg-[#0F75BC] px-[20px] p-[5px] text-white rounded-md border-none' text='Save & Next' />
                </div>
            </div>
        </>
    )
}

export default ApplyForRFP