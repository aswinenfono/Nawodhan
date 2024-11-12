import React from 'react'
import { ParagraphComp } from '../../../Components/ParagraphComp'

const Lands = ({ setButtons }) => {
    return (
        <>
            <div>
                <ParagraphComp text='LANDS ' className='text-2xl font-semibold mt-[30px] text-[#0F75BC]' />
            </div>
            <div className='w-[100%] border-[3px] mt-[20px] rounded-xl border-[#0F75BC] p-[20px]'>
                <table className='w-[100%]'>
                    <thead>
                        <tr>
                            <th className=' p-[10px]'>Land</th>
                            <th className=' p-[10px]'>Land IN ACER</th>
                            <th className=' p-[10px]'>Land IN UNIT</th>
                            <th className=' p-[10px]'>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='cursor-pointer' onClick={() => { setButtons({ ['Lands']: { ['Lands Details']: true } }) }} >
                            <td className={`text-center p-[10px] ${'rounded-l-xl justify-center flex '} bg-[#D9EFFF]`}>
                                <div className='p-[10px] flex justify-center items-center w-[30px] h-[30px] text-[white] rounded-full bg-[#0F75BC]'>
                                    <p>01</p>
                                </div>
                            </td>
                            <td className='text-center text-[#0F75BC] font-semibold p-[10px] bg-[#D9EFFF]' >Land IN ACER</td>
                            <td className='text-center text-[#0F75BC] font-semibold p-[10px] bg-[#D9EFFF]' >Land IN UNIT</td>
                            <td className={`text-center font-semibold p-[10px] ${'rounded-r-xl '} bg-[#D9EFFF]`} >STATUS</td>
                        </tr>
                    </tbody>
                </table>
            </div >

        </>
    )
}

export default Lands