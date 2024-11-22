import React, { useState } from 'react'
import { ParagraphComp } from '../../../../Components/ParagraphComp';
import CusSelect from '../../../../Components/CusSelect';
import CusInput from '../../../../Components/CusInput';
import CustomFileInput from '../../../../Components/CusFileInput';
import ButtonComp from '../../../../Components/ButtonComp';
import ModalComp from '../../../../Components/ModalComp';
import * as Yup from 'yup';
import { Form, Formik, useFormikContext } from 'formik';
import { useMutation } from 'react-query';
import { enqueueSnackbar } from 'notistack';
import { TechnicalPost } from '../../../../Store/DashBoard/DashBoard';
import { useNavigate } from 'react-router-dom';
const ApplyForRFP = ({ setButtons }) => {
    const QualificationForm = [

        {
            label: 'Enter Your Name',
            name: 'name1',
            type: 'text',
        },
        {
            label: 'Age',
            name: 'age',
            type: 'number',
        },
        {
            label: 'Citizenship Status',
            name: 'citizenship_status',
            type: 'select',
            options: [
                {
                    option: 'Indian'
                },
                {
                    option: 'NRI'
                }
            ]
        },
        {
            label: 'Age Group',
            name: 'age_group',
            type: 'select',
            parameter: 'Qualification and Scoring Matrix',
            options: [
                {
                    option: '18-27 years'
                },
                {
                    option: '28-35 years'
                },
                {
                    option: '36-45 years'
                },
                {
                    option: '46-55 years'
                },
                {
                    option: '56-60 years'
                },
            ]
        },
        {
            label: 'Educational Qualification',
            name: 'educational_qualification',
            type: 'select',
            options: [
                {
                    option: 'Degree & above'
                },
                {
                    option: '+2'
                },
                {
                    option: '10 or below'
                },

            ]
        },
        {
            label: 'Years of Farming/Agricultural Experience',
            name: 'years_of_farmingagricultural_experience',
            type: 'select',
            options: [
                {
                    option: '>20 years'
                },
                {
                    option: '15-20 years'
                },

            ]
        },
        {
            label: 'Alliance or Tie-up with Forward Market',
            name: 'alliance_or_tie_up_with_forward_market',
            type: 'select',
            options: [
                {
                    option: '>3 firms signed'
                },
                {
                    option: '2-3 firms signed'
                },

            ]
        },
        {
            label: 'Attendance in International Seminars/Worksh...',
            name: 'attendance_in_international_seminarsworkshops',
            type: 'select',
            options: [
                {
                    option: '>2 seminars/workshops'
                },
                {
                    option: '1-2 seminars/workshops'
                },

            ]
        },
        {
            label: 'Attendance in National or State',
            name: 'attendance_in_national_or_state_seminarsworkshops',
            type: 'select',
            options: [
                {
                    option: '>3 seminars/workshops'
                },
                {
                    option: '2-3 seminars/workshops'
                },

            ]
        },
        {
            label: 'Membership in FPC, Startup, Krishikoottam',
            name: 'membership_in_fpc_startup_krishikoottam_kudumbashree_or_fig',
            type: 'select',
            options: [
                {
                    option: 'Member'
                },
                {
                    option: 'Non-member'
                },

            ]
        },
        {
            label: 'Experience in Hi-tech Farming Practices',
            name: 'experience_in_hi_tech_farming_practices',
            type: 'select',
            options: [
                {
                    option: '>5 years'
                },
                {
                    option: '3-4 years'
                },

            ]
        },
        {
            label: 'Innovative Techniques Used in Farming',
            name: 'innovative_techniques_used_in_farming',
            type: 'select',
            options: [
                {
                    option: 'Innovative farming'
                },
                {
                    option: 'Conventional farming'
                },

            ]
        },
        {
            label: 'Adoption of Organic Farming Practices with',
            name: 'adoption_of_organic_farming_practices_with_certifications',
            type: 'select',
            options: [
                {
                    option: 'EU standards'
                },
                {
                    option: 'NOP'
                },

            ]
        },
        {
            label: 'Use of Renewable Energy Resources',
            name: 'use_of_renewable_energy_resources',
            type: 'select',
            options: [
                {
                    option: 'Usage of renewable energy'
                },
                {
                    option: 'Normal practice'
                },

            ]
        },
        {
            label: 'Community Development and Leadership',
            name: 'community_development_and_leadership',
            type: 'select',
            options: [
                {
                    option: 'Board member in any organization'
                },
                {
                    option: 'Committee member on any organizational panel'
                },

            ]
        },
        {
            label: 'Financial Stability',
            name: 'financial_stability',
            type: 'select',
            options: [
                {
                    option: 'Annual turnover >200 lakhs'
                },
                {
                    option: '100-200 lakhs'
                },
                {
                    option: '25-50 lakhs'
                },

            ]
        },
        {
            label: 'Additional Requirements for FPOs',
            name: 'additional_requirements_for_fpos',
            type: 'select',
            options: [
                {
                    option: 'Registration Type'
                },
                {
                    option: 'Companies Act, 2013'
                },

            ]
        },
        {
            label: 'Number of Members',
            name: 'number_of_members',
            type: 'number',
        },
        {
            label: 'Existing Infrastructure',
            name: 'existing_infrastructure',
            type: 'select',
            options: [
                {
                    option: 'Collection Centre'
                },
                {
                    option: 'Primary Processing Unit'
                },

            ]
        },
        {
            label: 'Compliance with Bookkeeping Requirements',
            name: 'compliance_with_bookkeeping_requirements',
            type: 'select',
            options: [
                {
                    option: 'Yes'
                },
                {
                    option: 'No'
                },

            ]
        },
        {
            parameter: 'Business Plan (For Youth/Agripreneurs Only)',
            label: 'Proposed Agribusiness Plan (Attach a details)',
            name: 'full_name',
            type: 'file',
        },
        {
            label: 'Educational Qualification (bachelor’s degree in',
            name: 'educational_qualification_bachelors_in_agriculture_or_other',
            type: 'select',
            options: [
                {
                    option: 'Yes'
                },
                {
                    option: 'No'
                },

            ]
        },
        {
            label: 'Experience in Agricultural Entrepreneurship',
            name: 'experience_in_agricultural_entrepreneurship',
            type: 'text',
        },
        {
            label: 'Years of experience',
            name: 'years_of_experience',
            type: 'select',
            options: [
                {
                    option: '>20 years'
                },
                {
                    option: '15-20 years'
                },
                {
                    option: '10-15 years'
                },
                {
                    option: '5-10 years'
                },
                {
                    option: '3-5 years'
                },

            ]
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


    const navigate = useNavigate()

    const modelSchema = Yup.object(
        QualificationForm.reduce((schema, field) => {
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
        QualificationForm.map(ele => {
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

    const initialValues = QualificationForm.reduce((values, field) => {
        values[field.name] = '';
        return values;
    }, {});





    const handleCreateSuccess = (data) => {
        navigate('/dashboard/submission-form')
        enqueueSnackbar('Success', { variant: 'success' });
    };
    const handleCreateError = (error) => {
        const message = error?.response?.data?.message || error?.message;
        enqueueSnackbar(message, { variant: 'error' });
    };

    const { mutateAsync: confirmSubmit, isLoading: regLoading } = useMutation({
        mutationFn: TechnicalPost,
        onSuccess: handleCreateSuccess,
        onError: (error) => {
            console.error('Mutation Error:', error);
            handleCreateError(error);
        },
    });
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

                <Formik
                    initialValues={initialValues}
                    validationSchema={modelSchema}
                    onSubmit={(data) => {
                        submitData(data)
                    }}
                >
                    {({ values, errors, handleChange, touched, handleBlur, setFieldValue }) => (
                        <Form className='w-[100%]'>
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
                                                <CusSelect value={values?.[field?.name]} onChange={handleChange} mappingKey={'option'} name={field?.name} options={field?.options?.length > 0 ? field?.options : [{ option: 'checking' }, { option: 'checking' }]} label={field?.label} />
                                            </div>
                                            :
                                            field.type.toLocaleLowerCase() === 'file' ?
                                                <div className='w-[32%] mt-[20px]'>
                                                    <CustomFileInput value={values?.[field?.name]} onChange={handleChange} name={field?.name} label={field?.label} />
                                                </div>
                                                :
                                                <div className='w-[32%] mt-[20px]'>
                                                    <CusInput value={values?.[field?.name]} onChange={handleChange} name={field?.name} label={field?.label} type={field?.type} />
                                                </div>
                                        }
                                    </>
                                )}

                            </div>
                            <div className='flex justify-end mt-[30px] '>
                                <ButtonComp type='submit' className='bg-[#0F75BC] px-[20px] p-[5px] text-white rounded-md border-none' text='Save & Next' />
                            </div>
                            <DisplayFormikValues />

                        </Form>
                    )}
                </Formik>



            </div>


        </>
    )
}

export default ApplyForRFP