import React, { useState } from 'react'
import { ParagraphComp } from '../../../Components/ParagraphComp'
import CusInput from '../../../Components/CusInput'
import ButtonComp from '../../../Components/ButtonComp'
import CusSelect from '../../../Components/CusSelect'
import InputComp from '../../../Components/InputComp'
import CustomFileInput from '../../../Components/CusFileInput'
import * as Yup from 'yup';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useMutation } from 'react-query'
import { enqueueSnackbar } from 'notistack'
import { SubmissionFormPost } from '../../../Store/DashBoard/DashBoard'
import { Form, Formik, useFormikContext } from 'formik'
import ModalComp from '../../../Components/ModalComp'
const SubmissionForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const SubmissionForm = [
        {
            label: 'Description of Goods (land particulars of the district)',
            name: 'description_of_goods',
            type: 'text',
        },
        {
            label: 'Specifications',
            name: 'specifications',
            type: 'text',
        },
        {
            label: 'Unit (10 Acre land as 1 unit) (A)',
            name: 'unit_10_acre_land_as_1_unit',
            type: 'number',
        },
        {
            label: 'Rate per unit (Rs.) (B)',
            name: 'rate_per_unit_rs',
            type: 'number',
        },
        {
            label: 'Sub-unit (Less than 10 Acres) (Ex. 1 Acre or 2 Acre) (C)',
            name: 'sub_unit_less_than_10_acres',
            type: 'number',
        },
        {
            label: 'Rate per Sub-unit (Rs.) (D)',
            name: 'rate_per_sub_unit_rs',
            type: 'number',
        },
        {
            label: 'Total Quantity units  (A+C)',
            name: 'total_quantity_units',
            type: 'number',
        },
        {
            label: 'Total Quoted Unit Rate at land in (Rs.) (B+D)',
            name: 'total_quoted_unit_rate_at_land_rs',
            type: 'number',
        },
        {
            label: 'In Figures',
            name: 'total_in_figures',
            type: 'number',
        },
        {
            label: 'In Words',
            name: 'total_in_words',
            type: 'text',
        },
    ]


    const closeModal = () => {
        setIsModalOpen(false)
    }
    const openModal = () => {
        setIsModalOpen(true)
    }


    const modelSchema = Yup.object(
        SubmissionForm.reduce((schema, field) => {
            let fieldValidation = Yup.string();
            // if (field.type.toLowerCase() === 'password') {
            //     fieldValidation = Yup.string().min(8, 'Password must be at least 8 characters long');
            // }
            if (field?.validation?.toLowerCase() === 'mobile') {
                fieldValidation = fieldValidation.max(10, 'Invalid mobile number');
            }
            if (field?.validation?.toLowerCase() === 'email') {
                fieldValidation = fieldValidation.email('Invalid Email Id');
            }

            schema[field?.name] = fieldValidation
            return schema;
        }, {})
    );

    const submitData = (data) => {
        let values = {}
        SubmissionForm.map(ele => {
            if (data?.[ele?.name]) {
                values = { ...values, [ele?.name]: `${data?.[ele?.name]}` }
            }
        })
        console.log('values>>>>', values)
        confirmSubmit(data)
    }

    const DisplayFormikValues = () => {
        const { values, errors } = useFormikContext();
        console.log(values, errors); // Access Formik values here
        return null; // You can return JSX or null if you just want to log the values
    };

    const initialValues = SubmissionForm.reduce((values, field) => {
        values[field.name] = '';
        return values;
    }, {});

    const handleCreateSuccess = (data) => {
        setTimeout(() => {
            openModal()
        }, 100);
        enqueueSnackbar('Success', { variant: 'success' });
    };

    const handleCreateError = (error) => {
        const message = error?.response?.data?.message || error?.message;
        enqueueSnackbar(message, { variant: 'error' });
    };

    const { mutateAsync: confirmSubmit, isLoading: regLoading } = useMutation({
        mutationFn: SubmissionFormPost,
        onSuccess: handleCreateSuccess,
        onError: (error) => {
            console.error('Mutation Error:', error);
            handleCreateError(error);
        },
    });

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
                <Formik
                    initialValues={initialValues}
                    validationSchema={modelSchema}
                    onSubmit={(data) => {
                        submitData(data)
                    }}
                >
                    {({ values, handleChange }) => (
                        <Form className='w-[100%]'>
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
                                {/* <ButtonComp className='bg-[#0F75BC] px-[20px] p-[5px] text-white rounded-md border-none' text='Submit' /> */}
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
                                                    <CusInput value={values?.[field?.name]} onChange={handleChange} name={field?.name} label={field?.label} type={field?.type} />
                                                </div>
                                        }
                                    </>

                                )}

                            </div>
                            <div className='flex  justify-end mt-[30px] '>
                                {/* <ButtonComp className='bg-[#0F75BC] px-[20px] p-[5px] flex justify-center gap-[10px] items-center text-white rounded-md border-none'  >
                        <AddCircleOutlineIcon className='text-[white]' />
                        Save
                    </ButtonComp> */}
                                <ButtonComp className='bg-[#0F75BC] px-[20px] p-[5px] text-white rounded-md border-none' text='Save' />
                                <DisplayFormikValues />

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
                        </Form>
                    )}
                </Formik>


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
                        <label className='mt-[20px] flex items-center' >
                            <InputComp className='h-[20px] w-[20px] ' type='checkbox' />
                            <span className='ml-[10px]'>Agree And Continue</span>
                        </label>
                        <div className='flex justify-end mt-[30px] '>
                            <ButtonComp onClick={() => { closeModal() }} className='bg-[#0F75BC] px-[20px] p-[5px] text-white rounded-md border-none' text='Next' />
                        </div>
                    </div>
                </ModalComp>
            </div>
        </>
    )
}

export default SubmissionForm