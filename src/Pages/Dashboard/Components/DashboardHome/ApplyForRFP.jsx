import React, { useState } from 'react'
import { ParagraphComp } from '../../../../Components/ParagraphComp';
import CusSelect from '../../../../Components/CusSelect';
import CusInput from '../../../../Components/CusInput';
import CustomFileInput from '../../../../Components/CusFileInput';
import ButtonComp from '../../../../Components/ButtonComp';
import * as Yup from 'yup';
import { Form, Formik, useFormikContext } from 'formik';
import { useMutation } from 'react-query';
import { enqueueSnackbar } from 'notistack';
import { TechnicalPost } from '../../../../Store/DashBoard/DashBoard';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../../Components/Loading';
const ApplyForRFP = ({ setButtons }) => {
	const [tempFile, setTempFile] = useState()
	const language = localStorage.getItem('language');

	const QualificationForm = [

		{
			label: language === 'en' ? 'Enter Your Name' : 'നിങ്ങളുടെ പേര് നൽകുക',
			name: 'name1',
			type: 'text',
		},
		{
			label: language === 'en' ? 'Age' : 'പ്രായം',
			name: 'age',
			type: 'number',
		},
		{
			label: language === 'en' ? 'Citizenship Status' : 'പൗരത്വ നില',
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
			label: language === 'en' ? 'Age Group' : 'പ്രായ ഗ്രൂപ്പ്',
			name: 'age_group',
			type: 'select',
			parameter: language === 'en' ? 'Qualification and Scoring Matrix' : 'യോഗ്യതയും സ്കോറിംഗ് മെട്രിക്സും',
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
			label: language === 'en' ? 'Educational Qualification' : 'വിദ്യാഭ്യാസ യോഗ്യത',
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
			label: language === 'en' ? 'Years of Farming/Agricultural Experience' : 'എത്ര വർഷങ്ങളുടെ കൃഷി/കാർഷിക പരിചയം',
			name: 'years_of_farmingagricultural_experience',
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
				{
					option: '<3 years'
				},
			]
		},
		{
			label: language === 'en' ? 'Alliance or Tie-up with Forward Market' : 'ഫോർവേഡ് മാർക്കറ്റുമായുള്ള സഖ്യം അല്ലെങ്കിൽ ടൈ-അപ്പ്',
			name: 'alliance_or_tie_up_with_forward_market',
			type: 'select',
			options: [
				{
					option: '>3 firms signed'
				},
				{
					option: '2-3 firms signed'
				},
				{
					option: '<2 firms signed'
				}
			]
		},
		{
			label: language === 'en' ? 'Attendance in International Seminars/Workshops' : 'അന്താരാഷ്‌ട്രതല സെമിനാറുകളിലെ/വർക്ക്‌ഷോപ്പുകളിലെ ഹാജർ',
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
			label: language === 'en' ? 'Attendance in National or State' : 'ദേശീയ അല്ലെങ്കിൽ സംസ്ഥാനതല സെമിനാറുകളിലെ/വർക്ക്‌ഷോപ്പുകളിലെ ഹാജർ',
			name: 'attendance_in_national_or_state_seminarsworkshops',
			type: 'select',
			options: [
				{
					option: '>3 seminars/workshops'
				},
				{
					option: '2-3 seminars/workshops'
				},
				{
					option: '<2 seminars/workshops'
				},

			]
		},
		{
			label: language === 'en' ? 'Membership in FPC, Startup, Krishikoottam' : 'എഫ്പിസി, സ്റ്റാർട്ടപ്പ്, കൃഷിക്കൂട്ടം എന്നിവയിൽ അംഗത്വം',
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
			label: language === 'en' ? 'Experience in Hi-tech Farming Practices' : 'ഹൈടെക് ഫാമിംഗ് രീതികളിൽ പരിചയം',
			name: 'experience_in_hi_tech_farming_practices',
			type: 'select',
			options: [
				{
					option: '>5 years'
				},
				{
					option: '4-5 years'
				},
				{
					option: '3-4 years'
				},
				{
					option: '2-3 years'
				},
				{
					option: '1-2 years'
				},
				{
					option: '<1 year'
				},
			]
		},
		{
			label: language === 'en' ? 'Innovative Techniques Used in Farming' : 'കൃഷിയിൽ ഉപയോഗിക്കുന്ന നൂതന സാങ്കേതിക വിദ്യകൾ',
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
			label: language === 'en' ? 'Adoption of Organic Farming Practices with' : 'ജൈവകൃഷി രീതികൾ സ്വീകരിക്കുന്നു',
			name: 'adoption_of_organic_farming_practices_with_certifications',
			type: 'select',
			options: [
				{
					option: 'EU standards'
				},
				{
					option: 'NOP'
				},
				{
					option: 'NPOP'
				},
				{
					option: 'PGS'
				},
			]
		},
		{
			label: language === 'en' ? 'Use of Renewable Energy Resources' : 'റിന്യൂവബിൾ എനർജി റിസോഴ്സുകളുടെ ഉപയോഗം',
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
			label: language === 'en' ? 'Community Development and Leadership' : 'കമ്മ്യൂണിറ്റി വികസനവും നേതൃത്വവും',
			name: 'community_development_and_leadership',
			type: 'select',
			options: [
				{
					option: 'Board member in any organization'
				},
				{
					option: 'Committee member on any organizational panel'
				},
				{
					option: 'A member'
				},
			]
		},
		{
			label: language === 'en' ? 'Financial Stability' : 'സാമ്പത്തിക സ്ഥിരത',
			name: 'financial_stability',
			type: 'select',
			options: [
				{
					option: '>200 lakhs'
				},
				{
					option: '100-200 lakhs'
				},
				{
					option: '75-100 lakhs'
				},
				{
					option: '50-75 lakhs'
				},
				{
					option: '25-50 lakhs'
				},

			]
		},
		{
			parameter: language === 'en' ? 'Additional Requirements for FPOs' : 'FPO-കൾക്കുള്ള അധിക ആവശ്യകതകൾ',
			label: language === 'en' ? 'Number of Members' : 'അംഗങ്ങളുടെ എണ്ണം',
			name: 'number_of_members',
			type: 'number',
		},
		{
			label: language === 'en' ? 'Existing Infrastructure' : 'നിലവിലുള്ള അടിസ്ഥാന സൗകര്യങ്ങൾ',
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
			label: language === 'en' ? 'Compliance with Bookkeeping Requirements' : 'ബുക്ക് കീപ്പിംഗ് ആവശ്യകതകൾ പാലിക്കൽ',
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
			parameter: language === 'en' ? 'Business Plan (For Youth/Agripreneurs Only)' : 'ബിസിനസ് പ്ലാൻ (യുവാക്കൾ/കർഷകർക്ക് മാത്രം)',
			label: language === 'en' ? 'Proposed Agribusiness Plan (Attach a details)' : 'നിർദ്ദിഷ്ട അഗ്രിബിസിനസ് പ്ലാൻ (വിശദാംശങ്ങൾ അറ്റാച്ചുചെയ്യുക) ഫയൽ അപ്‌ലോഡ് ചെയ്യുക',
			name: 'proposed_agribusiness_plan_attach_a_detailed_document',
			type: 'file',
		},
		{
			label: language === 'en' ? 'Educational Qualification (bachelor’s degree in' : 'വിദ്യാഭ്യാസ യോഗ്യത (ബിരുദം)',
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
			label: language === 'en' ? 'Experience in Agricultural Entrepreneurship' : 'കാർഷിക സംരംഭകത്വത്തിൽ പരിചയം',
			name: 'experience_in_agricultural_entrepreneurship',
			type: 'text',
		},
		{
			label: language === 'en' ? 'Years of experience' : 'വർഷങ്ങളുടെ അനുഭവപരിചയം',
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
				{
					option: '2-3 years'
				},
				{
					option: '1-2 years'
				},
				{
					option: 'Below 1 years'
				},
				{
					option: '0 years'
				},

			]
		},
		{
			parameter: language === 'en' ? 'Attachments and Supporting Documents' : 'അറ്റാച്ചുമെൻ്റുകളും അനുബന്ധ രേഖകളും',
			label: language === 'en' ? 'Financial Bank Statements (Last 2 years)' : 'ഫിനാൻഷ്യൽ ബാങ്ക് സ്റ്റേറ്റ്‌മെൻ്റുകൾ (കഴിഞ്ഞ 2 വർഷം) ഫയൽ അപ്‌ലോഡ് ചെയ്യുക',
			name: 'financial_bank_statements_last_2_years',
			type: 'file',
		},
		{
			label: language === 'en' ? 'Business Plan Document (For Youth/Agripreneurs)' : 'ബിസിനസ് പ്ലാൻ ഡോക്യുമെൻ്റ് (യുവാക്കൾ/കർഷകർക്ക്) ഫയൽ അപ്‌ലോഡ് ചെയ്യുക',
			name: 'business_plan_document_for_youthagripreneurs',
			type: 'file',
		}


	];


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
			if (field?.type?.toLowerCase() === 'file') {
				fieldValidation = Yup.object();
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
		console.log("data>>>", data)
		confirmSubmit(data)
	}

	const DisplayFormikValues = () => {
		const { values, errors } = useFormikContext();
		console.log(values, errors)
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

	const { mutateAsync: confirmSubmit, isLoading } = useMutation({
		mutationFn: TechnicalPost,
		onSuccess: handleCreateSuccess,
		onError: (error) => {
			console.error('Mutation Error:', error);
			handleCreateError(error);
		},
	});
	const attachFile = (e, setFieldValue) => {
		const file = e.target.files[0];
		const name = e.target.name;
		setTempFile({ [e.target.name]: file.name })

		// if (file) {
		// 	const reader = new FileReader();
		// 	reader.onloadend = () => {
		// 		const base64String = reader.result.split(',')[1];
		// 		setFieldValue(name, { file: base64String, file_name: file.name });
		// 	};
		// 	reader.readAsDataURL(file);
		// }
	}
	if (isLoading) return <><Loading /></>
	return (
		<>

			<div className='w-[100%] mt-[20px] rounded-xl max-md:p-[5px] p-[20px]'>
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
				<ParagraphComp className='text-md mt-[30px] font-bold text-[#0F75BC] ' text={language === 'en' ? 'TECHNICAL PROPOSAL SUBMISSION FORM' : 'സാങ്കേതിക പ്രൊപ്പോസൽ സമർപ്പിക്കൽ ഫോം'} />
				<ParagraphComp className='text-md text-[black] font-schibsted ' text={language === 'en' ? 'Name of Services: Inviting Cultivators for NAWODHAN implementation' : 'സേവനങ്ങളുടെ പേര്: നവോധൻ നടപ്പിലാക്കുന്നതിനായി കര്‍ഷകരെ ക്ഷണിക്കുന്നു'} />

				<Formik
					initialValues={initialValues}
					validationSchema={modelSchema}
					onSubmit={(data) => {
						submitData(data)
					}}
				>
					{({ values, handleChange, setFieldValue }) => (
						<Form className='w-[100%]'>
							<div className='flex max-md:flex-col flex-wrap w-[100%] gap-[20px] mt-[20px]'>
								{QualificationForm.map(field =>
									<>
										{field.parameter &&
											<div className='w-[100%]'>
												<ParagraphComp className='text-md mt-[30px] font-semibold text-[#0F75BC] ' text={field?.parameter} />
											</div>
										}
										{field.type.toLocaleLowerCase() === 'select' ?
											<div className='w-[32%] max-md:w-[100%] mt-[20px]'>
												<CusSelect value={values?.[field?.name]} onChange={handleChange} mappingKey={'option'} name={field?.name} options={field?.options?.length > 0 ? field?.options : [{ option: 'checking' }, { option: 'checking' }]} label={field?.label} />
											</div>
											:
											field.type.toLocaleLowerCase() === 'file' ?
												<div className='w-[32%] max-md:w-[100%]  mt-[20px]'>
													<CustomFileInput onChange={(e) => attachFile(e, setFieldValue)}
														value={tempFile?.[field?.name]}
														name={field?.name}
														label={field?.label} />
												</div>
												:
												<div className='w-[32%] max-md:w-[100%]  mt-[20px]'>
													<CusInput onChange={handleChange} value={values?.[field?.name]} name={field?.name} label={field?.label} type={field?.type} />
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