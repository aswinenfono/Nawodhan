import React, { useState } from 'react'
import { ParagraphComp } from '../../../../Components/ParagraphComp'
import CusInput from '../../../../Components/CusInput'
import ButtonComp from '../../../../Components/ButtonComp'
import CusSelect from '../../../../Components/CusSelect'
import InputComp from '../../../../Components/InputComp'
import DeleteIcon from '@mui/icons-material/Delete';
import * as Yup from 'yup';
import { useMutation, useQuery } from 'react-query'
import { enqueueSnackbar } from 'notistack'
import { SubmissionFormPost, SubUnitsList, UnitsList } from '../../../../Store/DashBoard/DashBoard'
import { Field, FieldArray, Form, Formik, useFormikContext } from 'formik'
import ModalComp from '../../../../Components/ModalComp'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { ToWords } from 'to-words';

const SubmissionForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const language = localStorage.getItem('language');
  const [noOfYears, setNoOfYears] = useState(0);
  const [fields, setFields] = useState([]);
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  const currentDate = yyyy + '-' + mm + '-' + dd; 

  const [totalUnitPrice, setTotalUnitPrice] = useState(0);
  const [totalSubUnitPrice, setTotalSubUnitPrice] = useState(0);

  const toWords = new ToWords({
    localeCode: 'en-IN',
    converterOptions: {
      currency: true,
      ignoreDecimal: false,
      ignoreZeroCurrency: false,
      doNotAddOnly: false,
      currencyOptions: {
        // can be used to override defaults for the selected locale
        name: 'Rupee',
        plural: 'Rupees',
        symbol: '₹',
        fractionalUnit: {
          name: 'Paisa',
          plural: 'Paise',
          symbol: '',
        },
      },
    },
  });

  const { data: units } = useQuery({
    queryKey: 'units',
    queryFn: UnitsList,
    refetchOnWindowFocus: false
  });

  const { data: sub_units } = useQuery({
    queryKey: 'sub_units',
    queryFn: SubUnitsList,
    refetchOnWindowFocus: false
  });

  const closeModal = () => {
    setIsModalOpen(false)
  }
  const openModal = () => {
    setIsModalOpen(true)
  }

  const modelSchema = Yup.object();

  const DisplayFormikValues = () => {
    const { values, errors } = useFormikContext();
    console.log(values, errors); // Access Formik values here
    return null; // You can return JSX or null if you just want to log the values
  };

  const initialValues = {
    table_uefd: [
      {
        unit: '',
        total_per_unit: 0,
        sub_unit: '',
        total_per_sub_unit: 0
      }
    ],
    total_in_words: '',
    total_in_figures: ''
  }

  const handleCreateSuccess = () => {
    setTimeout(() => {
      openModal()
    }, 100);
    enqueueSnackbar('Success', { variant: 'success' });
  };

  const handleCreateError = (error) => {
    const message = error?.response?.data?.message || error?.message;
    enqueueSnackbar(message, { variant: 'error' });
  };

  const { mutateAsync: confirmSubmit } = useMutation({
    mutationFn: SubmissionFormPost,
    onSuccess: handleCreateSuccess,
    onError: (error) => {
      console.error('Mutation Error:', error);
      handleCreateError(error);
    },
  });

  const handleSubmit = async (values) => {
    let payload = {
      ...values,
      total_in_words: totalUnitPrice + totalSubUnitPrice,
      total_in_figures: totalUnitPrice + totalSubUnitPrice > 0 ? toWords.convert(totalUnitPrice + totalSubUnitPrice) : ''
    }
    try {
      await confirmSubmit(payload);
    } catch (error) {
      handleCreateError(error);
    }
  }


  const years = [
    {
      option: 1
    },
    {
      option: 2
    },
    {
      option: 3
    },
    {
      option: 4
    },
    {
      option: 5
    },
    {
      option: 6
    },
    {
      option: 7
    },
    {
      option: 8
    },
    {
      option: 9
    },
    {
      option: 10
    },
  ];



  return (
    <>
      <div className='rounded-lg border-2 p-[20px] h-[68vh] overflow-x-hidden overflow-y-scroll mt-[20px] border-[#0F75BC] '>
        <ParagraphComp text={language === 'en' ? 'FINANCIAL PROPOSAL SUBMISSION FORM 3.1' : 'സാമ്പത്തിക പ്രൊപ്പോസല്‍ സമർപ്പണ ഫോം 3.1'} className='text-md text-[#0F75BC] font-bold' />
        <ParagraphComp className='text-sm mt-[15px] font-schibsted leading-9 text-[black] ' >
          {language === 'en' ? 'Tender Inviting Authority: Kerla Agro Business Company (KABCO)' : 'ടെൻഡർ ക്ഷണിക്കുന്ന അതോറിറ്റി: കേരള അഗ്രോ ബിസിനസ് കമ്പനി (KABCO)'}
          <br />
          {language === 'en' ? 'Name of Services: Inviting Cultivators for NAWODHAN implementation' : 'സേവനങ്ങളുടെ പേര്: നവോദാൻ നടപ്പിലാക്കുന്നതിനായി കൃഷിക്കാരെ ക്ഷണിക്കുന്നു'}
          <br />
          {language === 'en' ? 'RFP No.: 01/KABCO-NAWODHAN/CULTIVATORS/2024/RFP' : 'RFP നമ്പർ: 01/കാബ്‌കോ-നവോദൻ/കർഷകർ/2024/RFP'}
          <br />
        </ParagraphComp>
        <div className='sm:w-[49%] xs:w-[100%]  mt-3'>
          
          <ParagraphComp text='Years of Proposal' className='text-md font-schibsted text-[black] font-bold mb-2' />
          <FormControl fullWidth sx={{ mt: 1 }}>
            <InputLabel id="demo-simple-select-label">Year</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={noOfYears}
              label="Year"
              sx={{ borderColor: '#0F75BC' }}
              onChange={(e) => {
                setFields(Array.from({ length: e.target.value }, (_, index) => `Year ${index + 1}`));
                setNoOfYears(e.target.value)
              }}
            >
              {years?.map((item, index) => (
                <MenuItem key={index} value={item?.option}>{item?.option}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <ParagraphComp text='Select Land Unit' className='text-md font-schibsted text-[#0F75BC] font-bold mt-2' />
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={modelSchema}
          onSubmit={async (values) => {
            handleSubmit(values)
          }}
        >
          {({ values, setFieldValue, handleSubmit }) => (
            <Form className='w-[100%]' noValidate onSubmit={handleSubmit}>
              <div className='flex flex-wrap w-[100%] overflow-x-scroll justify-between mt-[20px]'>
                <>
                  <div style={{ marginBottom: '20px', width: '100%', overflowX: 'scroll' }}>
                    <FieldArray name={'table_uefd'}>
                      {({ push, remove }) => (
                        <>
                          {values?.table_uefd?.map((row, rowIndex) => (
                            <div key={rowIndex} className='grid sm:grid-cols-5 xs:grid-cols-1 gap-3 mt-6 items-center'>
                              <div className='mt-2'>
                                <CusSelect value={row?.unit} onChange={(e) => setFieldValue(`table_uefd.${rowIndex}.unit`, e.target.value)} mappingKey={'option'} name={`table_uefd[${rowIndex}].unit`} options={units?.message?.map((item) => {
                                  return { option: item?.unit };
                                })} label={'Select Unit'} />
                              </div>
                              {fields.map((_, index) => (<div key={index} className=' mt-2'>
                                <Field
                                  onChange={(e) => {
                                    setFieldValue(`table_uefd.${rowIndex}.rate_per_unit_year_${index + 1}`, e.target.value);
                                    // Dynamically calculate the total for this row
                                    const updatedRow = values.table_uefd[rowIndex] || {};
                                    const newTotal = fields.reduce((sum, _, i) => {
                                      const rate =
                                        parseFloat(
                                          i === index ? e.target.value : updatedRow[`rate_per_unit_year_${i + 1}`]
                                        ) || 0;
                                      return sum + rate;
                                    }, 0);

                                    // Update the total field
                                    setTotalUnitPrice(newTotal)
                                    setFieldValue(`table_uefd.${rowIndex}.total_per_unit`, newTotal)
                                  }}
                                  name={`table_uefd.${rowIndex}.rate_per_unit_year_${index + 1}`}
                                  value={values.table_uefd[rowIndex]?.[`rate_per_unit_year_${index + 1}`] || ''}
                                  component={CusInput}
                                  label={`Rate ${(index + 1)} Year`}
                                  type='number' />
                              </div>))}

                              <div className='mt-2 flex items-center gap-2'>
                                <CusInput value={row?.total_per_unit} onChange={(e) => setFieldValue(`table_uefd.${rowIndex}.total_per_unit`, e.target.value)} name={`table_uefd[${rowIndex}].total_per_unit`} label={'Total'} type={'number'} />

                                <div>
                                  <DeleteIcon className='text-[red] cursor-pointer' onClick={(e) => {
                                    e.preventDefault()
                                    remove(rowIndex)
                                  }} />
                                </div>
                              </div>
                              
                            </div>
                          ))}
                          <div className='flex justify-end mt-10'>
                            <ButtonComp className='bg-[#0F75BC] px-[20px] p-[5px] text-white rounded-md border-none' text='Add Next' onClick={(e) => {
                              e.preventDefault()
                              push({})
                            }} />
                          </div>
                        </>
                      )}
                    </FieldArray>
                  </div>
                </>
              </div>
              <ParagraphComp text='Select Sub Unit' className='text-md font-schibsted text-[#0F75BC] font-bold mt-5' />
              <div className='flex flex-wrap w-[100%] overflow-x-scroll justify-between mt-[20px]'>
                <>
                  <div style={{ marginBottom: '20px', width: '100%', overflowX: 'scroll' }}>
                    <FieldArray name={'table_uefd'}>
                      {({ push, remove }) => (
                        <>
                          {values?.table_uefd?.map((row, rowIndex) => (
                            <div key={rowIndex} className='grid sm:grid-cols-5 xs:grid-cols-1 gap-3 mt-6 items-center'>
                              <div className='mt-2'>
                                <CusSelect value={row?.sub_unit} onChange={(e) => setFieldValue(`table_uefd.${rowIndex}.sub_unit`, e.target.value)} mappingKey={'option'} name={`table_uefd[${rowIndex}].sub_unit`} options={sub_units?.message?.map((item) => {
                                  return { option: item?.sub_unit };
                                })} label={'Select Unit'} />
                              </div>
                              {fields.map((_, index) => (<div key={index} className='mt-2'>
                                <Field
                                  onChange={(e) => {
                                    setFieldValue(`table_uefd.${rowIndex}.rate_per_sub_unit_year_${index + 1}`, e.target.value);
                                    // Dynamically calculate the total for this row
                                    const updatedRow = values.table_uefd[rowIndex] || {};
                                    const newTotal = fields.reduce((sum, _, i) => {
                                      const rate =
                                        parseFloat(
                                          i === index ? e.target.value : updatedRow[`rate_per_sub_unit_year_${i + 1}`]
                                        ) || 0;
                                      return sum + rate;
                                    }, 0);

                                    // Update the total field
                                    setTotalSubUnitPrice(newTotal);
                                    setFieldValue(`table_uefd.${rowIndex}.total_per_sub_unit`, newTotal)
                                  }}
                                  name={`table_uefd.${rowIndex}.rate_per_sub_unit_year_${index + 1}`}
                                  value={values.table_uefd[rowIndex]?.[`rate_per_sub_unit_year_${index + 1}`] || ''}

                                  component={CusInput} y
                                  label={`Rate ${(index + 1)} Year`}
                                  type='number' />
                              </div>))}
                              <div className='mt-2 flex items-center gap-2'>
                                <CusInput value={row?.total_per_sub_unit} onChange={(e) => setFieldValue(`table_uefd.${rowIndex}.total_per_sub_unit`, e.target.value)} name={`table_uefd[${rowIndex}].total_per_sub_unit`} label={'Total'} type={'number'} />
                                <div>
                                  <DeleteIcon className='text-[red] cursor-pointer' onClick={(e) => {
                                    e.preventDefault()
                                    remove(rowIndex)
                                  }} />
                                </div>
                              </div>
   
                            </div>
                          ))}
                          <div className='flex justify-end mt-10'>
                            <ButtonComp className='bg-[#0F75BC] px-[20px] p-[5px] text-white rounded-md border-none' text='Add Next' onClick={(e) => {
                              e.preventDefault()
                              push({})
                            }} />
                          </div>
                        </>
                      )}
                    </FieldArray>
                  </div>
                </>
              </div>
              <ParagraphComp text={language === 'en' ? 'FINANCIAL PROPOSAL SUBMISSION FORM' : 'സാമ്പത്തിക പ്രൊപ്പോസല്‍ സമർപ്പണ ഫോം'} className='text-md font-schibsted text-[#0F75BC] font-bold mt-5' />
              <div className='flex mt-[40px] justify-between'>
                <ParagraphComp className='text-md mt-[20px] font-schibsted leading-6 text-[black] ' >
                  {language === 'en' ? 'To' : 'സ്വീകർത്താവ്'}: <br />
                  <span className='font-bold' >{language === 'en' ? 'The Director - Business,' : 'ഡയറക്ടർ - ബിസിനസ്,'}</span>
                  <br />
                  {language === 'en' ? 'KERALA AGRO BUSINESS COMPANY' : 'കേരള അഗ്രോ ബിസിനസ്സ് കമ്പനി'}
                  <br />
                  {language === 'en' ? ' LIMITED 3 rd Floor Trans Tower, CV' : 'ലിമിറ്റഡ് 3 ആം നില ട്രാൻസ് ടവർ, CV'}
                  <br />
                  {language === 'en' ? 'Raman Pillai Rd, DPI, Vazhuthacaud' : 'രാമൻപിള്ള റോഡ്, ഡിപിഐ, വഴുതക്കാട്'}
                  <br />
                  {language === 'en' ? 'Thiruvananthapuram, Kerala 695014' : 'തിരുവനന്തപുരം, കേരളം 695014'}
                  <br />
                  {language === 'en' ? ' Email: kabco.info@gmail.com' : 'ഇമെയിൽ: kabco.info@gmail.com'}
                </ParagraphComp>
                <div className='w-[400px]'>
                  <ParagraphComp className='md  mt-[20px] leading-6 text-[black] font-schibsted' text={language === 'en' ? 'Location, Date' : 'സ്ഥലം, തീയതി'} />

                </div>
              </div>
              <ParagraphComp className='md  mt-[20px] leading-6 text-[black] font-schibsted' text={language === 'en' ? 'We, the undersigned, offer to provide the cultivation services for NAWODHAN project in accordance with your Request for Proposal ' : 'ഞങ്ങൾ, താഴെ ഒപ്പിട്ടവർ, നിങ്ങളുടെ പ്രോപ്പോസലിനായുള്ള അഭ്യർത്ഥനയ്ക്ക് അനുസൃതമായി നവോധൻ പദ്ധതിക്കായി കൃഷി സേവനങ്ങൾ നല്‍കുമെന്ന് വാഗ്ദാനം ചെയ്യുന്നു'} />
              <div className='w-[100%] mt-[20px]'>
                <CusInput onChange={(e) => setFieldValue('date', e.target.value)} value={currentDate} name={'date'} type='date' label={language === 'en' ? 'Date' : 'തീയതി'} />
              </div>
              <div className='w-[100%] mt-[20px]'>
                <CusInput onChange={(e) => setFieldValue('total_in_words', e.target.value)} disabled value={totalUnitPrice + totalSubUnitPrice > 0 ? toWords.convert(totalUnitPrice + totalSubUnitPrice) : ''} name={'total_in_words'} type='text' label={language === 'en' ? 'Total amount in words' : 'വാക്കുകളിലും അക്കങ്ങളിലും തുക'} />

              </div>
              <ParagraphComp className='md  mt-[20px] leading-6 text-[black] font-schibsted' text={language === 'en' ? 'Our attached Financial Proposal is for the amount of Rs. {Insert amount in words and figures' : 'ഞങ്ങളുടെ ഉള്ളടക്കം ചെയ്ത സാമ്പത്തിക പ്രൊപോസല്‍രൂപ. {വാക്കുകളിലും അക്കങ്ങളിലും തുക ചേർക്കുക'} />
              <div className='w-[100%] mt-[20px]'>
                <CusInput onChange={(e) => setFieldValue('total_in_figures', e.target.value)} value={totalUnitPrice + totalSubUnitPrice} name={'total_in_figures'} disabled type='number' label={language === 'en' ? 'Total amount in figures' : 'വാക്കുകളിലും അക്കങ്ങളിലും തുക'} />

              </div>
              <ParagraphComp className='md  mt-[20px] leading-6 text-[black] font-schibsted' text={language === 'en' ? 'The estimated amount of local indirect taxes is Rs. {Insert amount in words and figures' : 'പ്രാദേശിക പരോക്ഷ നികുതികളുടെ ഏകദേശ തുക. {വാക്കുകളിലും അക്കങ്ങളിലും തുക ചേർക്കുക'} />
              <div className='flex  justify-end mt-[30px] '>
                {/* <ButtonComp className='bg-[#0F75BC] px-[20px] p-[5px] flex justify-center gap-[10px] items-center text-white rounded-md border-none'  >
                        <AddCircleOutlineIcon className='text-[white]' />
                        Save
                    </ButtonComp> */}
                {/* <ButtonComp className='bg-[#0F75BC] px-[20px] p-[5px] text-white rounded-md border-none' text='Submit' /> */}
                <DisplayFormikValues />
              </div>
              <ParagraphComp className='md  mt-[20px] leading-6 text-[black] font-schibsted' text={language === 'en' ? 'which shall be confirmed or adjusted, if needed, during negotiations. {Please note that all amounts shall be the same as in financial application form}.' : 'ചർച്ചകൾക്കിടയിൽ, ആവശ്യമെങ്കിൽ അത് സ്ഥിരീകരിക്കുകയോ ക്രമീകരിക്കുകയോ ചെയ്യും. {എല്ലാ തുകയും സാമ്പത്തിക അപേക്ഷാ ഫോമിലെ പോലെ തന്നെ ആയിരിക്കുമെന്ന് ദയവായി ശ്രദ്ധിക്കുക}'} />
              <ParagraphComp className='md  mt-[20px] leading-6 text-[black] font-schibsted' text={language === 'en' ? 'Our Financial Proposal shall be valid and remain binding upon us, subject to the modifications resulting from bid negotiations, for the period of time specified in the Table 1.' : 'ഞങ്ങളുടെ സാമ്പത്തിക നിർദ്ദേശം സാധുതയുള്ളതും ടേബിൾ 1 ൽ വ്യക്തമാക്കിയ കാലയളവിലേക്ക് ബിഡ് ചർച്ചകളുടെ ഫലമായുണ്ടാകുന്ന പരിഷ്‌ക്കരണങ്ങൾക്ക് വിധേയമായി ഞങ്ങളിൽ നിലനിൽക്കുന്നതും ആയിരിക്കും.'} />
              <div className='flex justify-end mt-[30px] '>
                <ButtonComp className='bg-[#0F75BC] px-[20px] p-[5px] text-white rounded-md border-none' text='Submit' />
              </div>
            </Form>
          )}
        </Formik>

        <ModalComp width='70%' padding={'20px'} closeModal={closeModal} modalIsOpen={isModalOpen} >
          <div className='p-[20px] h-[80vh] overflow-x-hidden overflow-scroll'>
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
              <ButtonComp onClick={() => { closeModal() }} className='bg-[#0F75BC] px-[20px] p-[5px] text-white rounded-md border-none' text='Submit' />
            </div>
          </div>
        </ModalComp>
      </div>
    </>
  )
}

export default SubmissionForm