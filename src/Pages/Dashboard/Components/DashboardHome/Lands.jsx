import React, { useEffect, useState } from 'react'
import { ParagraphComp } from '../../../../Components/ParagraphComp'
import { useQuery } from 'react-query';
import { LandsList } from '../../../../Store/DashBoard/DashBoard';
import { useNavigate } from 'react-router-dom';
import CusSelect from '../../../../Components/CusSelect';
import Loading from '../../../../Components/Loading';

const Lands = ({ setLandId }) => {
	const navigate = useNavigate()
	const [district, setDistrict] = useState()
	const [filteredDistricts, setFilteredDistricts] = useState([]);

	const { isLoading, data: Lands, error } = useQuery({
		queryKey: 'LandsList',
		queryFn: LandsList,
		cacheTime: 1000 * 60 * 5, // Cache for 5 minutes
		staleTime: 0, // Data will be considered stale immediately
	});


	const updateData = (name) => {
		setLandId(name)
		navigate(`/dashboard/land-details-plus/${name}`); // Pass the landId as a URL parameter
	}
	const districts = [
		"Alappuzha",
		"Ernakulam",
		"Idukki",
		"Kannur",
		"Kasaragod",
		"Kollam",
		"Kottayam",
		"Kozhikode",
		"Malappuram",
		"Palakkad",
		"Pathanamthitta",
		"Thiruvananthapuram",
		"Thrissur",
		"Wayanad"
	]

	const UpdateDistrict = (e) => {
		const value = e?.target?.value
		setDistrict(value)
	}

	useEffect(() => {
		if (district) {
			const filteredData = Lands?.data?.filter(values => values?.district2 === district);
			if (filteredData?.length > 0) {
				setFilteredDistricts(filteredData);
			} else {
				setFilteredDistricts([])
			}
		} else {
			setFilteredDistricts(Lands?.data)
		}
	}, [district, Lands]);


	if (isLoading) {
		return <><Loading /></>; // Add loading state
	}

	if (error) {
		return <div>Error fetching data.</div>; // Handle error state
	}
	return (
		<>
			<div className='flex max-md:justify-center justify-end w-[100%]'>
				<div className='max-md:w-[100%]  w-[20%]'>
					<CusSelect value={district} disabledFilter={true} onChange={UpdateDistrict} label='Select district' options={districts} />
				</div>
			</div>
			<div>
				<ParagraphComp text='LANDS ' className='text-2xl font-semibold mt-[30px] text-[#0F75BC]' />
			</div>
			<div className='w-[100%] border-[3px] overflow-auto p-[20px] min-h-[40vh] mt-[20px] rounded-xl border-[#0F75BC] '>
				<table className='w-[100%] '>
					<thead>
						<tr>
							<th className='text-start p-[10px]'>No</th>
							<th className='text-start p-[10px]'>Land Name</th>
							<th className='text-start p-[10px]'>Land in Acre</th>
							<th className='text-start p-[10px]'>District</th>
							<th className='text-start p-[10px]'>Land in Unit</th>
						</tr>
					</thead>
					<tbody >
						{filteredDistricts?.length > 0 && filteredDistricts?.map((lnd, index) =>
							<>
								<tr style={{ marginTop: '10px' }} className='cursor-pointer' onClick={() => { updateData(lnd?.name) }} >
									<td className={`text-center h-auto p-[10px] ${'rounded-l-xl justify-center flex '} bg-[#D9EFFF]`}>
										<div className='p-[10px] flex justify-center items-center w-[30px] h-[30px] text-[white] rounded-full bg-[#0F75BC]'>
											<p>{index + 1}</p>
										</div>
									</td>
									<td className='text-start text-[#0F75BC] whitespace-nowrap font-semibold p-[10px] bg-[#D9EFFF]' >{lnd?.land_name}</td>
									<td className='text-start text-[#0F75BC] whitespace-nowrap font-semibold p-[10px] bg-[#D9EFFF]' >{lnd?.total_availability_of_land_in_acres_}</td>
									<td className='text-start text-[#0F75BC] whitespace-nowrap font-semibold p-[10px] bg-[#D9EFFF]' >{lnd?.district2}</td>
									<td className='text-start text-[#0F75BC] whitespace-nowrap font-semibold p-[10px] bg-[#D9EFFF]' >{lnd?.total_availability_of_land_in_units_}</td>
								</tr>
								<div className='mt-[10px]'></div>
							</>
						)}
					</tbody>
				</table>
				{filteredDistricts?.length === 0 && <h6 className='text-start mt-8 font-bold text-[#0F75BC]'>No Data Found</h6>}
			</div>

		</>
	)
}

export default Lands