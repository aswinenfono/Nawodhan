import React from 'react';
import { ParagraphComp } from '../../../../Components/ParagraphComp';
import ButtonComp from '../../../../Components/ButtonComp';
import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined';
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined';
import ImageComp from '../../../../Components/ImageComp';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const updateButton = (name) => {
        if (name === 'Apply for RFP') {
            navigate('apply-for-rfp'); // Navigate with relative path
        } else {
            navigate('lands'); // Navigate with relative path
        }
    };

    const isActive = (path) => location.pathname.includes(path);

    return (
        <>
            <div className="mt-[20px] flex justify-between w-[100%] bg-[#0F75BC] rounded-2xl">
                <div className="p-[20px]">
                    <ParagraphComp className="font-schibsted text-sm text-[white]" text="WELCOME AHAMMED" />
                    <ParagraphComp
                        className="font-schibsted text-xl mt-[6px] font-semibold text-[white]"
                        text="Welcome to Your Agricultural Dashboard"
                    />
                </div>
                <ImageComp className="h-[130px]" source="./images/Star Group.png" />
            </div>
            <div className="flex gap-[10px] mt-[30px]">
                <ButtonComp
                    onClick={() => updateButton('Lands')}
                    className={`w-[100%] shadow-md transition-[2s] p-[10px] justify-center flex gap-[7px] text-center ${
                        isActive('lands') ? 'bg-[#0F75BC] text-white' : 'bg-[white] text-black'
                    } rounded-lg`}
                >
                    <div
                        className={`h-[30px] w-[30px] ${
                            isActive('lands') ? 'bg-[white] text-[#0F75BC]' : 'bg-[#0F75BC] text-[white]'
                        } flex justify-center items-center rounded-full`}
                    >
                        <NoteOutlinedIcon className="rotate-90" />
                    </div>
                    Land View
                </ButtonComp>
                <ButtonComp
                    onClick={() => updateButton('Apply for RFP')}
                    className={`w-[100%] transition-[2s] shadow-md p-[10px] justify-center flex gap-[7px] text-center ${
                        isActive('apply-for-rfp') ? 'bg-[#0F75BC] text-white' : 'bg-[white] text-black'
                    } rounded-lg`}
                >
                    <div
                        className={`h-[30px] w-[30px] ${
                            isActive('apply-for-rfp') ? 'bg-[white] text-[#0F75BC]' : 'bg-[#0F75BC] text-[white]'
                        } flex justify-center items-center rounded-full`}
                    >
                        <AdsClickOutlinedIcon />
                    </div>
                    Apply for RFP
                </ButtonComp>
            </div>
        </>
    );
};

export default Header;
