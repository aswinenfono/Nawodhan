import React from 'react'
import HeaderComp from '../../../Components/HeaderComp'
import CusInput from '../../../Components/CusInput'
import ButtonComp from '../../../Components/ButtonComp'
import * as Yup from 'yup';
import { Form, Formik, useFormikContext } from 'formik'
import { ParagraphComp } from '../../../Components/ParagraphComp'
import { enqueueSnackbar } from 'notistack'
import { useNavigate } from 'react-router-dom'
import CusSelect from '../../../Components/CusSelect';
import { useMutation } from 'react-query';
import { createUser } from '../../../Store/auth/registration';
import Loading from '../../../Components/Loading';
const Complete = ({ IntialForm }) => {
  const navigate = useNavigate()
  const FormInputs = [

    {
      label: 'Name',
      name: 'full_name',
      type: 'text',
      validation: 'mobile',
      required: true
    },
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      validation: 'email',
      required: false
    },
    // {
    //   label: 'Select type',
    //   name: 'type',
    //   type: 'select',
    //   required: true,
    //   options: [
    //     { option: 'FPO' },
    //     { option: 'Individual farmer' },
    //     { option: 'Others' },
    //   ]
    // }

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
      if (field?.required) {
        fieldValidation = fieldValidation.required()
      }
      schema[field?.name] = fieldValidation
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
    return null; // You can return JSX or null if you just want to log the values
  };

  const handleCreateSuccess = (data) => {
    navigate('/signup/pending')
    enqueueSnackbar('Success', { variant: 'success' });
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
    const values = { ...data, ...IntialForm }
    submitSubReg(values)
  }

  const {
    mutateAsync: submitSubReg, // Use mutateAsync to work with async/await
    isLoading: regLoading,
  } = useMutation({
    mutationFn: createUser,
    ...dataHandling,
  });


  if (regLoading) return (<><Loading /></>)
  return (
    <>
      <div className='w-[100%] flex justify-center max-md:mt-[60px] '>
        <div className='w-[30%] bg-[#FFFFFFA8] max-sm:w-[100%] shadow-lg p-[20px] flex flex-col items-center h-auto rounded-3xl'>
          <HeaderComp className='text-2xl text-center mt-[20px] text-[#0F75BC] font-schibsted font-bold' text='Complete NAWO-DHAN' />
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
                    {inp.type.toLowerCase() === 'number' || inp.type.toLowerCase() === 'text' || inp.type.toLowerCase() === 'email' || inp.type.toLowerCase() === 'password' ?
                      < div className='w-[100%] mt-[20px]' >
                        {inp.type === 'text'

                        }
                        <CusInput required={inp?.required ? true : false} value={values[inp?.name]} onChange={handleChange} className='w-[100%]' type={inp?.type} label={inp?.label} name={inp?.name} />
                        {values?.[inp?.name] && errors?.[inp?.name] &&
                          <ParagraphComp className='text-[red] text-[12px] ml-[10px] mt-[10px]' text={errors?.[inp?.name]} />
                        }
                      </div>
                      :
                      <div className='w-[100%] mt-[20px]' >
                        <CusSelect required={inp?.required ? true : false} mappingKey='option' options={inp?.options} value={values[inp?.name]} onChange={handleChange} className='w-[100%]' type={inp?.type} label={inp?.label} name={inp?.name} />
                        {values?.[inp?.name] && errors?.[inp?.name] &&
                          <ParagraphComp className='text-[red] text-sm mt-[10px]' text={errors?.[inp?.name]} />
                        }
                      </div>
                    }
                  </>
                )}
                <div className='flex justify-center'>
                  <div className='w-[70%]  p-[20px]' >
                    <ButtonComp type='submit' className='p-[10px] w-[100%] border-none rounded-full shadow-lg text-white  bg-[#0F75BC] '>
                      Save
                    </ButtonComp>
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

export default Complete