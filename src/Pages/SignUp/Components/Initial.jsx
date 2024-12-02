import React from 'react'
import HeaderComp from '../../../Components/HeaderComp'
import CusInput from '../../../Components/CusInput'
import ButtonComp from '../../../Components/ButtonComp'
import * as Yup from 'yup';
import { Form, Formik, useFormikContext } from 'formik'
import { ParagraphComp } from '../../../Components/ParagraphComp'
import { useMutation } from 'react-query'
import { createUser } from '../../../Store/auth/registration'
import { enqueueSnackbar } from 'notistack'
import { Link, Routes, useNavigate } from 'react-router-dom'
const Initial = ({ setIntialForm }) => {
  const navigate = useNavigate()
  const FormInputs = [

    {
      label: 'Mobile Number',
      name: 'mobile_number',
      type: 'string',
      validation: 'mobile'

    },
    {
      label: 'Enter Pin',
      name: 'password',
      type: 'password',
      validation: 'pin'
    },
    {
      label: 'Confirm Pin',
      name: 'password_confirmation',
      type: 'password',
      validation: 'pin'

    },
  ]
  const modelSchema = Yup.object(
    FormInputs.reduce((schema, field) => {
      let fieldValidation = Yup.string()

      if (field.name.toLowerCase() === 'password_confirmation') {
        fieldValidation = Yup.string().test(
          'match-dependent',
          'Re-enter your PIN to confirm it matches and is set correctly',
          function (value) {
            const { parent } = this;
            const dependentValue = parent?.['pin']; // Replace with actual key if necessary
            return !dependentValue || value === dependentValue;
          }
        );
      }

      if (field?.validation?.toLowerCase() === 'pin') {
        fieldValidation = fieldValidation.matches(/^\d{4}$/, 'Your PIN must be exactly 4 digits long')
      }
      else if (field?.validation?.toLowerCase() === 'email') {
        fieldValidation = fieldValidation.email('Invalid email address')
      }
      else if (field?.validation?.toLowerCase() === 'mobile') {
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
    navigate('/signin')
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
    const values = { ...data }
    setIntialForm(values)
    navigate('/signup/complete')
  }
  return (
    <>
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
                        <ParagraphComp className='text-[red] ml-[10px] text-sm mt-[5px]' text={errors?.[inp?.name]} />
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
                      Save And Next
                    </ButtonComp>
                    <ParagraphComp className='text-sm mt-[10px] text-[black] text-center' >
                      Have an account ?
                      &nbsp;
                      <Link className='text-[#0F75BC]' to='/signin'>
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
    </>
  )
}

export default Initial