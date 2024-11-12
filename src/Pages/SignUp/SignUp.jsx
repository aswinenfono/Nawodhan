import React from 'react'
import HeaderComp from '../../Components/HeaderComp'
import CusInput from '../../Components/CusInput'
import ButtonComp from '../../Components/ButtonComp'
import * as Yup from 'yup';
import { Form, Formik, useFormikContext } from 'formik'
import { ParagraphComp } from '../../Components/ParagraphComp'
import { useMutation } from 'react-query'
import { createUser } from '../../Store/auth/registration'
import { enqueueSnackbar } from 'notistack'
import { Link } from 'react-router-dom'
// import {che } from '../../../public/images/bgImage.png'
const SignUp = () => {

    const FormInputs = [    
        {
            label: 'Full Name',
            name: 'full_name',
            type: 'text',
        },
        {
            label: 'Email',
            name: 'email',
            type: 'email',
            validation: 'email'
        },
        {
            label: 'Mobile Number',
            name: 'number',
            type: 'number',
            validation: 'mobile'

        },
        {
            label: 'Password',
            name: 'password',
            type: 'password',
            validation: 'password'
        },
        {
            label: 'Confirm Password',
            name: 'confirm_password',
            type: 'password',
            validation: 'password'

        },
    ]
    const modelSchema = Yup.object(
        FormInputs.reduce((schema, field) => {
            let fieldValidation = Yup.string()

            if (field.type.toLowerCase() === 'password') {
                fieldValidation = Yup.string().test(
                    'match-dependent',
                    'Re-enter your password to confirm it matches the one you created above. This ensures your password is set correctly.',
                    function (value) {
                        const { parent } = this;
                        const dependentValue = parent?.['password']; // Replace with actual key if necessary
                        return !dependentValue || value === dependentValue;
                    }
                );
            }

            if (field?.validation?.toLowerCase() === 'password') {
                fieldValidation = fieldValidation.matches(/^(?=.*[A-Z]).{8}$/, 'Your input must be exactly 8 characters long and contain at least one uppercase letter.')
            }
            else if (field?.validation?.toLowerCase() === 'email') {
                fieldValidation = fieldValidation.email('Invalid email address')
            }
            else if (field?.validation?.toLowerCase() === 'number') {
                fieldValidation = fieldValidation.max(10, 'Invalid mobile number')
            }
            schema[field?.name] = fieldValidation.required()

            return schema
        }, {})

    )

    const initialValues = () => {
        return FormInputs.reduce((values, field) => {
            values[field.name] = ''
            return values
        }, {})
    }
    const DisplayFormikValues = () => {
        const { values, errors } = useFormikContext();
        console.log(values, errors); // Access Formik values here
        return null; // You can return JSX or null if you just want to log the values
    };

    const handleCreateSuccess = (data) => {
        console.log("data>>>>", data)
        enqueueSnackbar(data.message?.[1], { variant: 'success' });
    };

    const handleCreateError = (error) => {
        if (error?.response?.data.status_code >= 500) {
            enqueueSnackbar(error?.response?.data?.status_message, { variant: 'error' });
        } else {
            enqueueSnackbar(error?.response?.data?.message || error?.message, { variant: 'error' });

        }
    };
    const dataHandling = {
        onSuccess: handleCreateSuccess,
        onError: handleCreateError,
    };


    const submitData = (data) => {
        const values = { ...data, redirect_to: '' }
        submitSubReg(values)
    }

    const {
        mutateAsync: submitSubReg, // Use mutateAsync to work with async/await
        isLoading: regLoading,
    } = useMutation({
        mutationFn: createUser,
        ...dataHandling,
    });

    console.log("regLoading>>>>", regLoading)

    if (regLoading) return (<> <h4>Loading...</h4></>)

    return (
        <>

            <div className='w-[100%] object-cover h-[100vh] items-center p-[20px] flex max-md:flex-col bgImage'>
                <div className='w-[100%] flex justify-center max-md:mt-[60px] '>
                    <div className='w-[30%] bg-[#FFFFFFA8] max-sm:w-[100%] shadow-lg p-[20px] flex flex-col items-center h-auto rounded-3xl'>
                        <HeaderComp className='text-2xl text-center mt-[20px] text-[#0F75BC] font-schibsted font-bold' text='Join NAWO-DHAN' />
                        <ParagraphComp className='text-sm text-[#0F75BC] text-center' >
                            Create an account to access personalized farming solutions and resources.
                        </ParagraphComp>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={modelSchema}
                            onSubmit={(data) => {
                                submitData(data)
                            }}
                        >
                            {({ values, errors, handleChange, touched, handleBlur, setFieldValue }) => (
                                <Form className='w-[100%]'>
                                    {FormInputs.map(inp =>
                                        <>
                                            {/* inp.type.toLowerCase() === 'number' || inp.type.toLowerCase() === 'text' || inp.type.toLowerCase() === 'email' || inp.type.toLowerCase() === 'password' ? */}
                                            < div className='w-[100%] mt-[20px]' >
                                                <CusInput value={values[inp?.name]} onChange={handleChange} className='w-[100%]' required type={inp?.type} label={inp?.label} name={inp?.name} />
                                                {values?.[inp?.name] && errors?.[inp?.name] &&
                                                    <ParagraphComp className='text-[red] text-sm mt-[10px]' text={errors?.[inp?.name]} />
                                                }
                                            </div>
                                            {/* :
                                        <div className='flex justify-around w-[100%] mt-[20px] ' >
                                            {inp?.options?.map(opt =>
                                                <label className="flex mt-[16px] items-center space-x-2">
                                                    <InputComp
                                                        value={opt}  // Set the value of the radio button
                                                        checked={values[inp?.name] === opt}  // Ensure it is checked correctly
                                                        onChange={() => setFieldValue(inp?.name, opt)}  // Handle change manually
                                                        required={true}
                                                        className='h-[20px] w-[20px]'
                                                        type={inp?.type}
                                                        label={opt}
                                                        name={inp?.name}
                                                    />
                                                    <span className='text-black'>{opt}</span>
                                                </label>

                                            )} */}
                                            {/* </div> */}
                                        </>
                                    )}
                                    <div className='flex justify-center'>
                                        <div className='w-[70%]  p-[20px]' >
                                            <ButtonComp type='submit' className='p-[10px] w-[100%] border-none rounded-full shadow-lg text-white  bg-[#0F75BC] '>
                                                Sign Up
                                            </ButtonComp>
                                            <ParagraphComp className='text-sm mt-[10px] text-[black] text-center' >
                                                Have an account ?
                                                &nbsp;
                                                <Link className='text-[#0F75BC]' to='signin'>
                                                    Sign In
                                                </Link>
                                            </ParagraphComp>
                                        </div>
                                    </div>

                                    <DisplayFormikValues />

                                </Form>
                            )}
                        </Formik>

                    </div>
                </div>
            </div >
            {/* <div className='w-[30%] bg-[#FFFFFFA8] max-sm:w-[100%] shadow-lg p-[20px] justify-center flex flex-col items-center h-[400px] rounded-3xl'>
                <div className='h-[130px] w-[130px] flex justify-center items-center rounded-full bg-white'>
                    <ImageComp className='h-[90px] ml-3' source='./Images/time 1.png' />
                </div>
                <HeaderComp className='text-2xl text-center mt-[40px] text-[#0F75BC] font-schibsted font-bold' text='Your Access is On Its Way!' />
                <ParagraphComp className='text-md text-[#0F75BC] mt-[20px] text-center' >
                    Thank you for joining us! Your account
                    <br />
                    is pending approval
                </ParagraphComp>
            </div> */}
        </>

    )
}

export default SignUp