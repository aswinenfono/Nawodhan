import React from 'react'
import { ParagraphComp } from '../../../Components/ParagraphComp'
import CusInput from '../../../Components/CusInput'
import ButtonComp from '../../../Components/ButtonComp'
import CusSelect from '../../../Components/CusSelect'
import CustomFileInput from '../../../Components/CusFileInput'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const SubmissionForm = () => {
    const SubmissionForm = [
        {
            label: 'Description of Goods (land particulars of the district)',
            name: 'full_name',
            type: 'select',
        },
        {
            label: 'Specifications',
            name: 'full_name',
            type: 'text',
        },
        {
            label: 'Unit (10 Acre land as 1 unit) (A)',
            name: 'full_name',
            type: 'text',
        },
        {
            label: 'Rate per unit (Rs.) (B)',
            name: 'full_name',
            type: 'text',
        },
        {
            label: 'Sub-unit (Less than 10 Acres) (Ex. 1 Acre or 2 Acre) (C)',
            name: 'full_name',
            type: 'text',
        },
        {
            label: 'Rate per Sub-unit (Rs.) (D)',
            name: 'full_name',
            type: 'text',
        },
        {
            label: 'Total Quantity units  (A+C)',
            name: 'full_name',
            type: 'text',
        },
        {
            label: 'Total Quoted Unit Rate at land in (Rs.) (B+D)',
            name: 'full_name',
            type: 'text',
        },
        {
            label: 'In Figures',
            name: 'full_name',
            type: 'text',
        },
        {
            label: 'In Words',
            name: 'full_name',
            type: 'text',
        },
    ]
    return (
        <>
            <div className='rounded-lg border-2 p-[20px] h-[68vh] overflow-x-hidden overflow-y-scroll mt-[20px] border-[#0F75BC] '>
                <ParagraphComp text='FINANCIAL PROPOSAL SUBMISSION FORM' className='text-md font-schibsted text-[#0F75BC] font-bold' />
                <div className='flex justify-between'>
                    <ParagraphComp className='text-md mt-[20px] font-schibsted leading-6 text-[black] ' >
                        To: <br />
                        <span className='font-bold' >The Director - Business,</span>
                        <br />
                        KERALA AGRO BUSINESS COMPANY
                        <br />
                        LIMITED 3 rd Floor Trans Tower, CV
                        <br />
                        Raman Pillai Rd, DPI, Vazhuthacaud
                        <br />
                        Thiruvananthapuram, Kerala 695014
                        <br />
                        Email: kabco.info@gmail.com
                    </ParagraphComp>
                    <div className='w-[400px]'>
                        <ParagraphComp className='md  mt-[20px] leading-6 text-[black] font-schibsted' text='Location, Date' />
                    </div>
                </div>

                <ParagraphComp className='md  mt-[20px] leading-6 text-[black] font-schibsted' text='We, the undersigned, offer to provide the cultivation services for NAWODHAN project in accordance with your Request for Proposal ' />
                <div className='w-[100%] mt-[20px]'>
                    <CusInput type='text' label='amount in words and figures' />
                </div>
                <ParagraphComp className='md  mt-[20px] leading-6 text-[black] font-schibsted' text='Our attached Financial Proposal is for the amount of Rs. {Insert amount in words and figures' />
                <div className='w-[100%] mt-[20px]'>
                    <CusInput type='date' label='DATE' />
                </div>
                <ParagraphComp className='md  mt-[20px] leading-6 text-[black] font-schibsted' text='The estimated amount of local indirect taxes is Rs. {Insert amount in words and figures' />
                <ParagraphComp className='md  mt-[60px] leading-6 text-[black] font-schibsted' text='which shall be confirmed or adjusted, if needed, during negotiations. {Please note that all amounts shall be the same as in financial application form}.' />
                <ParagraphComp className='md  mt-[20px] leading-6 text-[black] font-schibsted' text='Our Financial Proposal shall be valid and remain binding upon us, subject to the modifications resulting from bid negotiations, for the period of time specified in the Table 1.' />
                <div className='flex justify-end mt-[30px] '>
                    <ButtonComp className='bg-[#0F75BC] px-[20px] p-[5px] text-white rounded-md border-none' text='Submit' />
                </div>
                <ParagraphComp text='FINANCIAL PROPOSAL SUBMISSION FORM 3.1' className='text-md text-[#0F75BC] font-bold' />
                <ParagraphComp className='text-sm mt-[15px] font-schibsted leading-6 text-[black] ' >
                    Tender Inviting Authority: Kerla Agro Business Company (KABCO)
                    <br />
                    Name of Services: Inviting Cultivators for NAWODHAN implementation
                    <br />
                    RFP No.: 01/KABCO-NAWODHAN/CULTIVATORS/2024/RFP
                    <br />
                </ParagraphComp>
                <div className='flex flex-wrap w-[100%] justify-between mt-[20px]'>
                    {SubmissionForm.map(field =>

                        <>
                            {field.parameter &&
                                <div className='w-[100%]'>
                                    <ParagraphComp className='text-md mt-[30px] font-semibold text-[#0F75BC] ' text={field?.parameter} />
                                </div>
                            }
                            {field.type.toLocaleLowerCase() === 'select' ?
                                <div className='w-[49%] mt-[20px]'>
                                    <CusSelect options={[]} label={field?.label} />
                                </div>
                                :
                                field.type.toLocaleLowerCase() === 'file' ?
                                    <div className='w-[49%] mt-[20px]'>
                                        <CustomFileInput label={field?.label} />
                                    </div>
                                    :
                                    <div className={`${field?.label.toLocaleLowerCase() === 'in figures' || field?.label.toLocaleLowerCase() === 'in words' ? 'w-[100%]' : 'w-[49%]'}  mt-[20px] `}>
                                        <CusInput label={field?.label} type={field?.type} />
                                    </div>
                            }
                        </>

                    )}

                </div>
                <div className='flex  justify-end mt-[30px] '>
                    <ButtonComp className='bg-[#0F75BC] px-[20px] p-[5px] flex justify-center gap-[10px] items-center text-white rounded-md border-none'  >
                        <AddCircleOutlineIcon className='text-[white]' />
                        Add Next
                    </ButtonComp>
                </div>

                <div className='rounded-lg mt-[20px] bg-[#D9EFFF] p-[10px]'>
                    <table className='w-[100%]'>
                        <tr className='bg-[white]'>
                            <th className='p-[10px]' >Description of Goods</th>
                            <th className='p-[10px]'>Specifications</th>
                            <th className='p-[10px]'>Unit</th>
                            <th className='p-[10px]'>Rate per unit</th>
                            <th className='p-[10px]'>Sub-unit</th>
                            <th className='p-[10px]'>Rate per Sub-unit</th>
                        </tr>
                        <tr >
                            <td className='p-[10px] text-center' >Goods #54344</td>
                            <td className='p-[10px] text-center'>Sample text</td>
                            <td className='p-[10px] text-center'>2000</td>
                            <td className='p-[10px] text-center'>2000</td>
                            <td className='p-[10px] text-center'>2000</td>
                            <td className='p-[10px] text-center'>32,467</td>
                        </tr>
                    </table>
                </div>


            </div>
        </>
    )
}

export default SubmissionForm