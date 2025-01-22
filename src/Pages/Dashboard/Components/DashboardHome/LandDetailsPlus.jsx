import React from 'react'
import { ParagraphComp } from '../../../../Components/ParagraphComp'
import CusSelect from '../../../../Components/CusSelect'
import { useQuery } from 'react-query';
import { LandDetailed } from '../../../../Store/DashBoard/DashBoard';
import { useParams } from 'react-router-dom';
import Loading from '../../../../Components/Loading';
const LandDetailsPlus = () => {
  const { landId } = useParams();

  const { isLoading, data: LandsDt, error } = useQuery({
    queryKey: ['LandDetails', landId], // It's good practice to include variables in the query key for dependency tracking
    queryFn: () => LandDetailed(landId), // Correctly passing the function reference
    cacheTime: 1000 * 60 * 5, // Cache for 5 minutes
    staleTime: 0, // Data will be considered stale immediately
    enabled: !!landId
  });

  const language = localStorage.getItem('language');


  if (isLoading) {
    return <><Loading /></>; // Add loading state
  }

  if (error) {
    return <div>Error fetching data.</div>; // Handle error state
  }
  return (
    <>
      <div className='p-[20px] max-md:p-[5px] h-[68vh] overflow-y-scroll overflow-x-hidden'>
        <ParagraphComp text={language === 'en' ? 'LAND DETAILS' : 'ഭൂമിയുടെ വിശദാംശങ്ങൾ'} className='text-xl mt-[20px] text-[#0F75BC] font-bold' />
        <div className='w-[100%] mt-[20px] '>
          <CusSelect readOnly={true} options={[{ option: LandsDt?.data?.select_land_owner_type }]} label={language === 'en' ? 'Select Land owner type' : 'ഭൂവുടമയുടെ തരം തിരഞ്ഞെടുക്കുക'} value={LandsDt?.data?.select_land_owner_type} />
        </div>
        <div className='p-[20px] mt-[20px] rounded-lg bg-[#D9EFFF]'>
          <ParagraphComp className='font-bold text-xl' text={language === 'en' ? 'About the Institution' : 'സ്ഥാപനത്തെക്കുറിച്ച്'} />
          {(LandsDt?.data?.name_of_the_institution || LandsDt?.data?.name_of_the_applicant) &&
            <div className='flex mt-[20px]'>
              <div className='flex max-md:w-[200px] w-[300px] justify-between'>
                <ParagraphComp className='font-semibold' text={language === 'en' ? 'Name Of Institution' : 'സ്ഥാപനത്തിൻ്റെ പേര്'} />
                : &nbsp;
              </div>
              <div>
                <ParagraphComp className='' text={LandsDt?.data?.name_of_the_institution || LandsDt?.data?.name_of_the_applicant} />
              </div>
            </div>
          }
          {(LandsDt?.data?.contact_person_name || LandsDt?.data?.name_of_the_applicant) &&
            <div className='flex mt-[20px]'>
              <div className='flex max-md:w-[200px] w-[300px] justify-between'>
                <ParagraphComp className='font-semibold' text={language === 'en' ? 'Contact Person Name' : 'ബന്ധപ്പെടാനുള്ള വ്യക്തിയുടെ പേര്'} />
                : &nbsp;
              </div>
              <div>
                <ParagraphComp className='' text={LandsDt?.data?.contact_person_name} />
              </div>
            </div>
          }
          {LandsDt?.data?.organisation_name &&
            <div className='flex mt-[20px]'>
              <div className='flex max-md:w-[200px] w-[300px] justify-between'>
                <ParagraphComp className='font-semibold' text={language === 'en' ? 'Organisation Name' : 'സ്ഥാപനത്തിന്റെ പേര്'} />
                : &nbsp;
              </div>
              <div>
                <ParagraphComp className='' text={LandsDt?.data?.organisation_name} />
              </div>
            </div>
          }
          {LandsDt?.data?.contact_person_name_designation &&
            <div className='flex mt-[20px]'>
              <div className='flex max-md:w-[200px] w-[300px] justify-between'>
                <ParagraphComp className='font-semibold' text={language === 'en' ? 'Contact Person Designations ' : 'ബന്ധപ്പെടാനുള്ള വ്യക്തിയുടെ പദവികൾ'} />
                : &nbsp;
              </div>
              <div>
                <ParagraphComp className='' text={LandsDt?.data?.contact_person_name_designation} />
              </div>
            </div>
          }
          {(LandsDt?.data?.contact_person_mobile || LandsDt?.data?.phone_number) &&
            <div className='flex mt-[20px]'>
              <div className='flex max-md:w-[200px] w-[300px] justify-between'>
                <ParagraphComp className='font-semibold' text={language === 'en' ? 'Contact Person Mobile' : 'ബന്ധപ്പെടാനുള്ള വ്യക്തിയുടെ മൊബൈല്‍'} />
                : &nbsp;
              </div>
              <div>
                <ParagraphComp className='' text={LandsDt?.data?.contact_person_mobile || LandsDt?.data?.phone_number} />
              </div>
            </div>
          }
          {(LandsDt?.data?.contact_person_mail_id || LandsDt?.data?.email) &&
            <div className='flex mt-[20px]'>
              <div className='flex max-md:w-[200px] w-[300px] justify-between'>
                <ParagraphComp className='font-semibold' text={language === 'en' ? 'Contact Person Mail Id' : 'ബന്ധപ്പെടാനുള്ള വ്യക്തിയുടെ മെയിൽ ഐഡി'} />
                : &nbsp;
              </div>
              <div>
                <ParagraphComp className='' text={LandsDt?.data?.contact_person_mail_id || LandsDt?.data?.email} />
              </div>
            </div>
          }
          {(LandsDt?.data?.permanentregistered_address) &&
            <div className='flex mt-[20px]'>
              <div className='flex max-md:w-[200px] w-[300px] justify-between'>
                <ParagraphComp className='font-semibold' text={language === 'en' ? 'Permanent Registered Address' : 'സ്ഥിര വിലാസം'} />
                : &nbsp;
              </div>
              <div>
                <ParagraphComp className='' text={LandsDt?.data?.permanentregistered_address} />
              </div>
            </div>
          }
          {(LandsDt?.data?.incorporation_date_only_for_companyorganizationngostrust) &&

            <div className='flex mt-[20px]'>
              <div className='flex max-md:w-[200px] w-[300px] justify-between'>
                <ParagraphComp className='font-semibold' text={language === 'en' ? 'Incorporation Date' : 'സ്ഥാപിതമായ തീയതി'} />
                : &nbsp;
              </div>
              <div>
                <ParagraphComp className='' text={LandsDt?.data?.incorporation_date_only_for_companyorganizationngostrust} />
              </div>
            </div>
          }
          {(LandsDt?.data?.office_address) &&

            <div className='flex mt-[20px]'>
              <div className='flex max-md:w-[200px] w-[300px] justify-between'>
                <ParagraphComp className='font-semibold' text={language === 'en' ? 'Office Address' : 'ഓഫീസ് വിലാസം'} />
                : &nbsp;
              </div>
              <div>
                <ParagraphComp className='' text={LandsDt?.data?.office_address} />
              </div>

            </div>
          }
          {(LandsDt?.data?.office_address_2) &&

            <div className='flex mt-[20px]'>
              <div className='flex max-md:w-[200px] w-[300px] justify-between'>
                <ParagraphComp className='font-semibold' text={language === 'en' ? 'Office Address 2' : 'ഓഫീസ് വിലാസം 2'} />
                : &nbsp;
              </div>
              <div>
                <ParagraphComp className='' text={LandsDt?.data?.office_address_2} />
              </div>

            </div>
          }
        </div>

        <div className='w-[100%] mt-[20px] max-md:flex-col justify-between flex'>
          <div className='p-[20px] w-[49%] max-md:w-[100%] rounded-lg bg-[#D9EFFF]'>
            <ParagraphComp text={language === 'en' ? 'Basic Land Details' : 'അടിസ്ഥാന ഭൂമി വിശദാംശങ്ങൾ'} className='text-md mt-[20px] font-bold text-[black]' />
            <div className='flex mt-[20px]'>
              <div className='flex w-[200px] justify-between'>
                <ParagraphComp className='font-semibold' text={language === 'en' ? 'village' : 'ഗ്രാമം'} />
                : &nbsp;
              </div>
              <div>
                <ParagraphComp className='' text={LandsDt?.data?.village} />
              </div>
            </div>
            <div className='flex mt-[20px]'>
              <div className='flex w-[200px] justify-between'>
                <ParagraphComp className='font-semibold' text={language === 'en' ? 'Taluk' : 'താലൂക്ക്'} />
                : &nbsp;
              </div>
              <div>
                <ParagraphComp className='' text={LandsDt?.data?.taluk} />
              </div>
            </div>
            <div className='flex mt-[20px]'>
              <div className='flex w-[200px] justify-between'>
                <ParagraphComp className='font-semibold' text={language === 'en' ? 'District' : 'ജില്ല'} />
                : &nbsp;
              </div>
              <div>
                <ParagraphComp className='' text={LandsDt?.data?.district} />
              </div>
            </div>
            <div className='flex mt-[20px]'>
              <div className='flex mt-[20px] w-[200px] justify-between'>
                <ParagraphComp className='font-semibold' text={language === 'en' ? 'Revenue Block Number ' : 'റവന്യൂ ബ്ലോക്ക് നമ്പർ'} />
                : &nbsp;
              </div>
              <div>
                <ParagraphComp className='' text='' />
              </div>
            </div>
            <div className='flex mt-[20px]'>
              <div className='flex w-[200px] justify-between'>
                <ParagraphComp className='font-semibold' text={language === 'en' ? 'Survey Number' : 'സർവേ നമ്പർ'} />
                : &nbsp;
              </div>
              <div>
                <ParagraphComp className='' text={LandsDt?.data?.survey_no} />
              </div>
            </div>
          </div>
          <div className='p-[20px] w-[49%] max-md:w-[100%] mt-[20px] rounded-lg bg-[#D9EFFF]'>
            <ParagraphComp text={language === 'en' ? 'Total Availability Of land' : 'ഭൂമിയുടെ ആകെ ലഭ്യത'} className='text-md mt-[20px] font-bold text-[black]' />
            <div className='flex mt-[20px]'>
              <div className='flex w-[200px] justify-between'>
                <ParagraphComp className='font-semibold' text={language === 'en' ? 'Total Availbility of land in acre ' : 'ഏക്കറിൽ ഭൂമിയുടെ ആകെ ലഭ്യത'} />
                : &nbsp;
              </div>
              <div>
                <ParagraphComp className='' text={LandsDt?.data?.total_availability_of_land_in_acres_} />
              </div>
            </div>
            <div className='flex mt-[20px]'>
              <div className='flex w-[200px] justify-between'>
                <ParagraphComp className='font-semibold' text={language === 'en' ? 'Intercropping Area  Available' : 'ഇടവിള പ്രദേശം ലഭ്യമാണോ'} />
                : &nbsp;
              </div>
              <div>
                <ParagraphComp className='' text={LandsDt?.data?.intercropping_area_available} />
              </div>
            </div>
            <div className='flex mt-[20px]'>
              <div className='flex w-[200px] justify-between'>
                <ParagraphComp className='font-semibold' text={language === 'en' ? 'Existing Crops Name' : 'നിലവിലുള്ള വിളകളുടെ പേര്'} />
                : &nbsp;
              </div>
              <div>
                <ParagraphComp className='' text={LandsDt?.data?.existing_crops_name_if_any} />
              </div>
            </div>
            <div className='flex mt-[20px]'>
              <div className='flex w-[200px] justify-between'>
                <ParagraphComp className='font-semibold' text={language === 'en' ? 'Coordinates of the land ' : 'ഭൂമിയുടെ കോർഡിനേറ്റുകൾ'} />
                : &nbsp;
              </div>
              <div>
                <ParagraphComp className='' text={LandsDt?.data?.coordinates_of_the_proposed_land} />
              </div>
            </div>

          </div>
        </div>

        <div className='p-[20px] w-[100%] mt-[20px]  bg-[#D9EFFF]'>
          <ParagraphComp text={language === 'en' ? 'Physical Status Of land' : 'ഭൂമിയുടെ ഭൗതിക നില'} className='text-md mt-[20px] font-bold text-[black]' />
          <div className=' max-md:flex-col flex justify-between w-[100%]'>
            <div className='w-[48%] max-md:w-[100%] mt-[20px]'>
              <CusSelect options={[]} label={language === 'en' ? 'Select land type' : 'ഭൂമിയുടെ തരം തിരഞ്ഞെടുക്കുക'} />
            </div>
            <div className='w-[48%] max-md:w-[100%] mt-[20px]' >
              <CusSelect options={[]} label={language === 'en' ? 'Select land type' : 'ഭൂമിയുടെ തരം തിരഞ്ഞെടുക്കുക'} />
            </div>
          </div>
        </div>
        <div className='p-[20px] w-[100%]  rounded-lg mt-[20px] bg-[#D9EFFF]'>
          <ParagraphComp text={language === 'en' ? 'Details of boundaries' : 'അതിരുകളുടെ വിശദാംശങ്ങൾ'} className='text-md mt-[20px] font-bold text-[black]' />
          <div className='flex max-md:flex-col justify-between w-[100%]'>
            <div className='w-[50%] max-md:w-[100%]'>
              <div className='flex mt-[20px]'>
                <div className='flex w-[200px] justify-between'>
                  <ParagraphComp className='font-semibold' text={language === 'en' ? 'East' : 'കിഴക്ക്'} />
                  : &nbsp;
                </div>
                <div>
                  <ParagraphComp className='' text={LandsDt?.data?.east} />
                </div>
              </div>
              <div className='flex mt-[20px]'>
                <div className='flex w-[200px] justify-between'>
                  <ParagraphComp className='font-semibold' text={language === 'en' ? 'West' : 'വടക്ക്'} />
                  : &nbsp;
                </div>
                <div>
                  <ParagraphComp className='' text={LandsDt?.data?.west} />
                </div>
              </div>
            </div>
            <div className='w-[50%] max-md:w-[100%]'>
              <div className='flex mt-[20px]'>
                <div className='flex w-[200px] justify-between'>
                  <ParagraphComp className='font-semibold' text={language === 'en' ? 'North' : 'പടിഞ്ഞാറ്'} />
                  : &nbsp;
                </div>
                <div>
                  <ParagraphComp className='' text={LandsDt?.data?.north} />
                </div>
              </div>
              <div className='flex mt-[20px]'>
                <div className='flex w-[200px] justify-between'>
                  <ParagraphComp className='font-semibold' text={language === 'en' ? 'South' : 'തെക്ക്'} />
                  : &nbsp;
                </div>
                <div>
                  <ParagraphComp className='' text={LandsDt?.data?.south} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='p-[20px] w-[100%] rounded-lg mt-[20px]  bg-[#D9EFFF]'>
          <ParagraphComp text={language === 'en' ? 'Basic amenities availability status' : 'അടിസ്ഥാന സൗകര്യങ്ങളുടെ ലഭ്യത നില'} className='text-md mt-[20px] font-bold text-[black]' />
          <div className='flex max-md:flex-col  justify-between w-[100%]'>
            <div className='w-[48%] max-md:w-[100%] mt-[20px]'>
              <CusSelect options={[]} label={language === 'en' ? 'Irrigation facility available' : 'ജലസേചന സൗകര്യം ലഭ്യമാണോ'} />
            </div>
            <div className='w-[48%] max-md:w-[100%] mt-[20px]' >
              <CusSelect options={[]} label={language === 'en' ? 'Roads available' : 'റോഡുകൾ ലഭ്യമാണോ'} />
            </div>
          </div>
          <div className=' max-md:flex-col flex justify-between w-[100%]'>
            <div className='w-[48%] max-md:w-[100%] mt-[20px]'>
              <CusSelect options={[]} label={language === 'en' ? 'Electricity Available' : 'വൈദ്യുതി ലഭ്യമാണോ'} />
            </div>
            <div className='w-[48%] max-md:w-[100%] mt-[20px]' >
              <CusSelect options={[]} label={language === 'en' ? 'Fencing  available' : 'ഫെൻസിങ് ലഭ്യമാണോ'} />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default LandDetailsPlus