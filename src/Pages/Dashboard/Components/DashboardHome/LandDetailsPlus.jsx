import React from 'react'
import { ParagraphComp } from '../../../../Components/ParagraphComp'
import CusSelect from '../../../../Components/CusSelect'
import { useQuery } from 'react-query';
import { LandDetailed } from '../../../../Store/DashBoard/DashBoard';
import { useParams } from 'react-router-dom';
const LandDetailsPlus = () => {
  const { landId } = useParams()
  const { isLoading, data: LandsDt, error } = useQuery({
    queryKey: ['LandDetails', landId], // It's good practice to include variables in the query key for dependency tracking
    queryFn: () => LandDetailed(landId), // Correctly passing the function reference
    cacheTime: 1000 * 60 * 5, // Cache for 5 minutes
    staleTime: 0, // Data will be considered stale immediately
    enabled: !!landId
  });

  if (isLoading) {
    return <div>Loading...</div>; // Add loading state
  }

  if (error) {
    return <div>Error fetching data.</div>; // Handle error state
  }
  return (
    <>
      <div className='p-[20px] h-[68vh] overflow-y-scroll overflow-x-hidden'>
        <ParagraphComp text='LANDS DETAILS' className='text-xl mt-[20px] text-[#0F75BC] font-bold' />
        <div className='w-[100%] mt-[20px] '>
          <CusSelect readOnly={true} options={[{ option: LandsDt?.data?.select_land_owner_type }]} label='Select Land owner type' value={LandsDt?.data?.select_land_owner_type} />
        </div>
        <div className='p-[20px] mt-[20px] rounded-lg bg-[#D9EFFF]'>
          <ParagraphComp className='font-bold text-xl' text='About the Institution' />
          <div className='flex mt-[20px]'>
            <div className='flex w-[300px] justify-between'>
              <ParagraphComp className='font-semibold' text='Name Of Institution' />
              : &nbsp;
            </div>
            <div>
              <ParagraphComp className='' text={LandsDt?.data?.name_of_the_institution} />
            </div>

          </div>
          <div className='flex mt-[20px]'>
            <div className='flex w-[300px] justify-between'>
              <ParagraphComp className='font-semibold' text='Contact Person Name' />
              : &nbsp;
            </div>
            <div>
              <ParagraphComp className='' text={LandsDt?.contact_person_name} />
            </div>

          </div>
          <div className='flex mt-[20px]'>
            <div className='flex w-[300px] justify-between'>
              <ParagraphComp className='font-semibold' text='Contact Person Designations ' />
              : &nbsp;
            </div>
            <div>
              <ParagraphComp className='' text={LandsDt?.data?.contact_person_name_designation} />
            </div>

          </div>
          <div className='flex mt-[20px]'>
            <div className='flex w-[300px] justify-between'>
              <ParagraphComp className='font-semibold' text='Contact Person Mobile' />
              : &nbsp;
            </div>
            <div>
              <ParagraphComp className='' text={LandsDt?.data?.contact_person_mobile} />
            </div>

          </div>
          <div className='flex mt-[20px]'>
            <div className='flex w-[300px] justify-between'>
              <ParagraphComp className='font-semibold' text='Contact Person Mail Id' />
              : &nbsp;
            </div>
            <div>
              <ParagraphComp className='' text={LandsDt?.data?.contact_person_mail_id} />
            </div>

          </div>
          <div className='flex mt-[20px]'>
            <div className='flex w-[300px] justify-between'>
              <ParagraphComp className='font-semibold' text='Office Address' />
              : &nbsp;
            </div>
            <div>
              <ParagraphComp className='' text={LandsDt?.data?.office_address} />
            </div>

          </div>
        </div>

        <div className='w-[100%] mt-[20px] justify-between flex'>
          <div className='p-[20px] w-[49%] rounded-lg bg-[#D9EFFF]'>
            <ParagraphComp text='Basic Land Details' className='text-md mt-[20px] font-bold text-[black]' />
            <div className='flex mt-[20px]'>
              <div className='flex w-[200px] justify-between'>
                <ParagraphComp className='font-semibold' text='village' />
                : &nbsp;
              </div>
              <div>
                <ParagraphComp className='' text={LandsDt?.data?.village} />
              </div>
            </div>
            <div className='flex mt-[20px]'>
              <div className='flex w-[200px] justify-between'>
                <ParagraphComp className='font-semibold' text='Taluk' />
                : &nbsp;
              </div>
              <div>
                <ParagraphComp className='' text={LandsDt?.data?.taluk} />
              </div>
            </div>
            <div className='flex mt-[20px]'>
              <div className='flex w-[200px] justify-between'>
                <ParagraphComp className='font-semibold' text='District' />
                : &nbsp;
              </div>
              <div>
                <ParagraphComp className='' text={LandsDt?.data?.district} />
              </div>
            </div>
            <div className='flex mt-[20px]'>
              <div className='flex mt-[20px] w-[200px] justify-between'>
                <ParagraphComp className='font-semibold' text='Revenue Block Number ' />
                : &nbsp;
              </div>
              <div>
                <ParagraphComp className='' text='' />
              </div>
            </div>
            <div className='flex mt-[20px]'>
              <div className='flex w-[200px] justify-between'>
                <ParagraphComp className='font-semibold' text='Survey Number' />
                : &nbsp;
              </div>
              <div>
                <ParagraphComp className='' text={LandsDt?.data?.survey_no} />
              </div>
            </div>
          </div>
          <div className='p-[20px] w-[49%] rounded-lg bg-[#D9EFFF]'>
            <ParagraphComp text='Total Availability Of land' className='text-md mt-[20px] font-bold text-[black]' />
            <div className='flex mt-[20px]'>
              <div className='flex w-[200px] justify-between'>
                <ParagraphComp className='font-semibold' text='Total Availbility of land in acre ' />
                : &nbsp;
              </div>
              <div>
                <ParagraphComp className='' text={LandsDt?.data?.total_availability_of_land_in_acres_} />
              </div>
            </div>
            <div className='flex mt-[20px]'>
              <div className='flex w-[200px] justify-between'>
                <ParagraphComp className='font-semibold' text='Intercropping Area  Available' />
                : &nbsp;
              </div>
              <div>
                <ParagraphComp className='' text={LandsDt?.data?.intercropping_area_available} />
              </div>
            </div>
            <div className='flex mt-[20px]'>
              <div className='flex w-[200px] justify-between'>
                <ParagraphComp className='font-semibold' text='Existing Crops Name' />
                : &nbsp;
              </div>
              <div>
                <ParagraphComp className='' text={LandsDt?.data?.existing_crops_name_if_any} />
              </div>
            </div>
            <div className='flex mt-[20px]'>
              <div className='flex w-[200px] justify-between'>
                <ParagraphComp className='font-semibold' text='Cordinates of the land ' />
                : &nbsp;
              </div>
              <div>
                <ParagraphComp className='' text={LandsDt?.data?.coordinates_of_the_proposed_land} />
              </div>
            </div>

          </div>
        </div>

        <div className='p-[20px] w-[100%] mt-[20px]  bg-[#D9EFFF]'>
          <ParagraphComp text='Physical Status Of land' className='text-md mt-[20px] font-bold text-[black]' />
          <div className='flex justify-between w-[100%]'>
            <div className='w-[48%] mt-[20px]'>
              <CusSelect options={[]} label='Select land type' />
            </div>
            <div className='w-[48%] mt-[20px]' >
              <CusSelect options={[]} label='Select land type' />
            </div>
          </div>
        </div>
        <div className='p-[20px] w-[100%]  rounded-lg mt-[20px] bg-[#D9EFFF]'>
          <ParagraphComp text='Details of boundaries' className='text-md mt-[20px] font-bold text-[black]' />
          <div className='flex justify-between w-[100%]'>
            <div className='w-[50%]'>
              <div className='flex mt-[20px]'>
                <div className='flex w-[200px] justify-between'>
                  <ParagraphComp className='font-semibold' text='East' />
                  : &nbsp;
                </div>
                <div>
                  <ParagraphComp className='' text={LandsDt?.data?.east} />
                </div>
              </div>
              <div className='flex mt-[20px]'>
                <div className='flex w-[200px] justify-between'>
                  <ParagraphComp className='font-semibold' text='West' />
                  : &nbsp;
                </div>
                <div>
                  <ParagraphComp className='' text={LandsDt?.data?.west} />
                </div>
              </div>
            </div>
            <div className='w-[50%]'>
              <div className='flex mt-[20px]'>
                <div className='flex w-[200px] justify-between'>
                  <ParagraphComp className='font-semibold' text='North' />
                  : &nbsp;
                </div>
                <div>
                  <ParagraphComp className='' text={LandsDt?.data?.north} />
                </div>
              </div>
              <div className='flex mt-[20px]'>
                <div className='flex w-[200px] justify-between'>
                  <ParagraphComp className='font-semibold' text='South' />
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
          <ParagraphComp text='Basic amenities availability status' className='text-md mt-[20px] font-bold text-[black]' />
          <div className='flex justify-between w-[100%]'>
            <div className='w-[48%] mt-[20px]'>
              <CusSelect options={[]} label='irrigation fecility available' />
            </div>
            <div className='w-[48%] mt-[20px]' >
              <CusSelect options={[]} label='Roads available' />
            </div>
          </div>
          <div className='flex justify-between w-[100%]'>
            <div className='w-[48%] mt-[20px]'>
              <CusSelect options={[]} label='Electricity Available' />
            </div>
            <div className='w-[48%] mt-[20px]' >
              <CusSelect options={[]} label='Fencing  available' />
            </div>
          </div>
        </div>
      </div >

    </>
  )
}

export default LandDetailsPlus