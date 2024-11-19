import React, { useState } from 'react'
import { ParagraphComp } from '../../../Components/ParagraphComp';
import CusSelect from '../../../Components/CusSelect';
import CusInput from '../../../Components/CusInput';
import CustomFileInput from '../../../Components/CusFileInput';
import ButtonComp from '../../../Components/ButtonComp';
import ModalComp from '../../../Components/ModalComp';
const ApplyForRFP = ({ setButtons }) => {
    const [isModalOpen, setIsModalOpen] = useState(true)
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
            label: 'Existing Infrastructure',
            name: 'full_name',
            type: 'text',
        },
        {
            label: 'Compliance with Bookkeeping Requirements',
            name: 'full_name',
            type: 'text',
        },
        {
            parameter: 'Business Plan (For Youth/Agripreneurs Only)',
            label: 'Proposed Agribusiness Plan (Attach a details)',
            name: 'full_name',
            type: 'select',
        },
        {
            label: 'Educational Qualification (bachelor’s degree in',
            name: 'full_name',
            type: 'select',
        },
        {
            label: 'Experience in Agricultural Entrepreneurship',
            name: 'full_name',
            type: 'text',
        },
        {
            label: 'Years of experience',
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

    const closeModal = () => {
        setIsModalOpen(false)
    }
    const openModal = () => {
        setIsModalOpen(true)
    }

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

                <div className='flex flex-wrap w-[100%] gap-[20px] mt-[20px]'>
                    {QualificationForm.map(field =>

                        <>
                            {field.parameter &&
                                <div className='w-[100%]'>
                                    <ParagraphComp className='text-md mt-[30px] font-semibold text-[#0F75BC] ' text={field?.parameter} />
                                </div>
                            }
                            {field.type.toLocaleLowerCase() === 'select' ?
                                <div className='w-[32%] mt-[20px]'>
                                    <CusSelect mappingKey={'options'} options={[{ options: 'checking' }, { options: 'checking' }]} label={field?.label} />
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

            <ModalComp width='70%' padding={'20px'} closeModal={closeModal} modalIsOpen={isModalOpen} >
                <div className='p-[20px]'>
                    <ParagraphComp text='Declaration' className='text-center font-bold text-2xl' />
                    <ParagraphComp text='1. Having examined the quotation document, we the undersigned herewith submit our response to your quotation notification dated for Cultivator for the (hereinafter referred to as the “KABCO”), in full conformity with the said tender document. ' className='text-start mt-[20px] text-md' />
                    <ParagraphComp text='2. We have read the provisions of the quotation/tender document and confirm that these are acceptable to us.  ' className='text-start mt-[10px] text-md' />
                    <ParagraphComp text='3.We fully understand that additional conditions, variations, deviations, if any, found in our response to quotation/tender shall not be given effect to.  ' className='text-start mt-[10px] text-md' />
                    <ParagraphComp text='4. We agree to abide by this proposal, consisting of this letter, the detailed response to the quotation/tender and all other attachments, for a Period of from the closing date fixed for submission of proposal stipulated in the quotation/tender document. ' className='text-start mt-[10px] text-md' />
                    <ParagraphComp text='5. We hereby declare that we are not involved in any litigation with any Government in India and we are not under a declaration of ineligibility for corrupt or fraudulent Practices.' className='text-start mt-[10px] text-md' />
                    <ParagraphComp text='6. We hereby declare that all the information and statements made in this proposal are true and accept that any misinterpretation contained in it may lead to our disqualification.' className='text-start mt-[10px] text-md' />
                    <ParagraphComp text='7. We fully understand that the KABCO reserves the right to reject any or all of the proposals received in response to the quotation/tender and to cancel the selection process at any stage without assigning any reason thereof. ' className='text-start mt-[10px] text-md' />
                    <ParagraphComp text='8. We understand that mere submission of bid does not guarantee that any of the applicants shall be awarded the project/assignment .' className='text-start mt-[10px] text-md' />
                    <ParagraphComp text='9. We hereby declare that our proposal submitted in response to this proposal/tender is made in good faith and the information contained is true and correct to the best of our knowledge and belief. ' className='text-start mt-[10px] text-md' />
                    <ParagraphComp text='10. We, along with any of our sub-cultivators, subcontractors, suppliers, or service providers for any part of the contract, are not subject to, and not controlled by any entity or individual that is subject to, a temporary suspension or a debarment imposed by the Govt. of India or Govt. of Kerala.' className='text-start mt-[10px] text-md' />
                    <div className='flex justify-end mt-[30px] '>
                        <ButtonComp onClick={() => { closeModal() }} className='bg-[#0F75BC] px-[20px] p-[5px] text-white rounded-md border-none' text='Next' />
                    </div>
                </div>
            </ModalComp>
        </>
    )
}

export default ApplyForRFP