import React from 'react'
import { ParagraphComp } from '../../../../Components/ParagraphComp'
import { useQuery } from 'react-query';
import { LandsList } from '../../../../Store/DashBoard/DashBoard';
import { useNavigate } from 'react-router-dom';
import ImageComp from '../../../../Components/ImageComp';

const Lands = ({ setLandId }) => {
    const navigate = useNavigate()

    const { isLoading, data: Lands, error } = useQuery({
        queryKey: 'LandsList',
        queryFn: LandsList,
        cacheTime: 1000 * 60 * 5, // Cache for 5 minutes
        staleTime: 0, // Data will be considered stale immediately
    });

    if (isLoading) {
        return <div>Loading...</div>; // Add loading state
    }

    if (error) {
        return <div>Error fetching data.</div>; // Handle error state
    }
    console.log("Lands>>>>>", Lands)

    const updateData = (name) => {
        setLandId(name)
        navigate(`/dashboard/land-details-plus/${name}`); // Pass the landId as a URL parameter
    }
    return (
        <>
            <div>
                <ParagraphComp text='LANDS ' className='text-2xl font-semibold mt-[30px] text-[#0F75BC]' />

            </div>
            <div className='w-[100%] border-[3px] p-[20px]  mt-[20px] rounded-xl border-[#0F75BC] '>
                <table className='w-[100%]'>
                    <thead>
                        <tr>
                            <th className=' p-[10px]'>No</th>
                            <th className=' p-[10px]'>Land Name</th>
                            <th className=' p-[10px]'>Land in Acre</th>
                            <th className=' p-[10px]'>Land IN UNIT</th>
                        </tr>
                    </thead>
                    <tbody >
                        {Lands?.data.map((lnd, index) =>
                            <>
                                <tr style={{ marginTop: '10px' }} className='cursor-pointer' onClick={() => { updateData(lnd?.name) }} >
                                    <td className={`text-center p-[10px] ${'rounded-l-xl justify-center flex '} bg-[#D9EFFF]`}>
                                        <div className='p-[10px] flex justify-center items-center w-[30px] h-[30px] text-[white] rounded-full bg-[#0F75BC]'>
                                            <p>{index + 1}</p>
                                        </div>
                                    </td>
                                    <td className='text-center text-[#0F75BC] font-semibold p-[10px] bg-[#D9EFFF]' >{lnd?.land_name}</td>
                                    <td className='text-center text-[#0F75BC] font-semibold p-[10px] bg-[#D9EFFF]' >{lnd?.total_availability_of_land_in_acres_}</td>
                                    <td className='text-center text-[#0F75BC] font-semibold p-[10px] bg-[#D9EFFF]' >{lnd?.total_availability_of_land_in_units_}</td>
                                </tr>
                                <div className='mt-[10px]'></div>
                            </>
                        )}

                    </tbody>
                </table>
            </div >

        </>
    )
}

export default Lands