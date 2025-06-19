import React, { useState } from 'react';
import ButtonComp from '../../../../../Components/ButtonComp';
import ModalComp from '../../../../../Components/ModalComp';
import CustomFileInput from '../../../../../Components/CusFileInput';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
const UpdateProposal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const downloadTemplate = (lang) => {
        // Define file paths
        const templates = {
            eng: './images/PROJECT OUTLINE - NAWODHAN Proposals (2).docx',  // Update the correct file path
            mal: './images/നവോ-ധാൻ പദ്ധതി.docx' // Update the correct file path
        };
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = templates[lang]; // Get file path based on selected language
        link.download = templates[lang].split('/').pop(); // Set the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    const openModal = () => {
        setIsModalOpen((prev) => !prev); // Toggles the modal state
    };
    const getFileInfo = (e) => {
        console.log(e)
    }
    return (
        <div className='p-[20px]'>
            <h2 className='text-xl font-bold'>Download Proposal Template</h2>

            <div className='flex max-sm:flex-col justify-center mt-[100px] gap-[10px]'>
                <ButtonComp className='bg-[#0F75BC] text-white rounded-[15px] p-[10px] ' onClick={() => downloadTemplate('eng')}>
                    Download Template in English
                </ButtonComp>
                <ButtonComp className='bg-[#0F75BC] text-white rounded-[15px] p-[10px] ' onClick={() => downloadTemplate('mal')}>
                    Download Template in Malayalam
                </ButtonComp>

            </div>
            <div className='flex justify-center mt-[30px]'>
                <ButtonComp className='bg-transparent text-black rounded-[15px] p-[10px] ' onClick={() => openModal()}>
                    <CloudUploadIcon id='cloudIcon' />
                </ButtonComp>
            </div>
            <h2 className='text-xl font-bold'>Sample Format</h2>
            <div className='mt-[30px] mb-[40px]'>

                <iframe
                    src={'/images/KAMCO ATHANI ERNAKULAM PROJECT PROPOSAL.pdf'}
                    style={{ width: '100%', height: '500px' }}
                    title="PDF Preview"
                />
            </div>

            <ModalComp width={'50%'} padding={'20px'} modalIsOpen={isModalOpen} closeModal={openModal}  >
                <CustomFileInput label='Upload file' name='file' onChange={(e) => getFileInfo(e)} />
                <div className='flex mt-3 justify-end'>
                    <ButtonComp className='bg-[#0F75BC] text-white rounded-[15px] p-[10px]'>Submit File</ButtonComp>
                </div>
            </ModalComp>
        </div>
    );
};

export default UpdateProposal;
