import React from 'react'
import HeaderComp from '../../Components/HeaderComp'
import CusInput from '../../Components/CusInput'
import ButtonComp from '../../Components/ButtonComp'
import * as Yup from 'yup';
import { Form, Formik, useFormikContext } from 'formik'
import { ParagraphComp } from '../../Components/ParagraphComp'
import { useMutation } from 'react-query'
import { enqueueSnackbar } from 'notistack'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../Store/auth/Login'

const SignIn = () => {
    const navigate = useNavigate()
    const FormInputs = [
        {
            label: 'Email',
            name: 'usr',
            type: 'email',
            validation: 'email'
        },
        {
            label: 'Password',
            name: 'pwd',
            type: 'password',
        }
    ];

    const modelSchema = Yup.object(
        FormInputs.reduce((schema, field) => {
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
            schema[field?.name] = fieldValidation.required('This field is required');
            return schema;
        }, {})
    );

    const initialValues = FormInputs.reduce((values, field) => {
        values[field.name] = '';
        return values;
    }, {});

    const handleCreateSuccess = (data) => {
        navigate('/dashboard')
        enqueueSnackbar(data?.message, { variant: 'success' });
    };

    const handleCreateError = (error) => {
        const message = error?.response?.data?.message || error?.message;
        enqueueSnackbar(message, { variant: 'error' });
    };

    const { mutateAsync: confirmLogin, isLoading: regLoading } = useMutation({
        mutationFn: login,  // Your login function
        onSuccess: handleCreateSuccess,  // Success callback
        onError: handleCreateError,      // Error callback
    });

    const submitData = (data) => {
        confirmLogin(data);
    };

    if (regLoading) return <h4>Loading...</h4>;

    return (
        <>
            <div className='w-[100%] object-cover h-[100vh] items-center p-[20px] flex max-md:flex-col bgImage'>
                <div className='w-[100%] flex justify-center max-md:mt-[60px] '>
                    <div className='w-[30%] bg-[#FFFFFFA8] max-sm:w-[100%] shadow-lg p-[20px] flex flex-col items-center h-auto rounded-3xl'>
                        <HeaderComp className='text-2xl text-center mt-[20px] text-[#0F75BC] font-schibsted font-bold' text='Welcome to NAWO-DHAN' />
                        <ParagraphComp className='text-sm text-[#0F75BC] text-center' >
                            Login to manage your farming activities and connect with our community
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
                                    {FormInputs.map((inp, index) =>
                                        <>
                                            {/* inp.type.toLowerCase() === 'number' || inp.type.toLowerCase() === 'text' || inp.type.toLowerCase() === 'email' || inp.type.toLowerCase() === 'password' ? */}
                                            < div key={index} className='w-[100%] mt-[20px]' >
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
                                                Sign In
                                            </ButtonComp>
                                            <ParagraphComp className='text-sm mt-[10px] text-[black] text-center' >
                                                Don't have an account ?
                                                &nbsp;
                                                <Link className='text-[#0F75BC]' to='/signup'>
                                                    Sign Up
                                                </Link>
                                            </ParagraphComp>
                                        </div>
                                    </div>

                                    {/* <DisplayFormikValues /> */}

                                </Form>
                            )}
                        </Formik>

                    </div>
                </div>
            </div >
        </>
    )
}

export default SignIn