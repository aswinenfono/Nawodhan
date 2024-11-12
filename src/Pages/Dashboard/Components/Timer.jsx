import React, { useState, useEffect } from 'react';
import { ParagraphComp } from '../../../Components/ParagraphComp';
import ButtonComp from '../../../Components/ButtonComp';

const Timer = ({ setButtons }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Set the target date and time
        const targetDate = new Date('November 15, 2024 18:00:00').getTime();

        // Function to update the timer
        const updateTimer = () => {
            const currentTime = new Date().getTime();
            const difference = targetDate - currentTime;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                // If the target date has passed, set all values to 0
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        // Update the timer every second
        const timerInterval = setInterval(updateTimer, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(timerInterval);
    }, []);

    return (
        <div className='p-[20px] h-[67vh]'>
            <ParagraphComp text='Apply for RFP' className='text-xl font-schibsted text-[#0F75BC] font-bold' />
            <div className='flex justify-center'>
                <div className='mt-[100px] w-[40%] p-[20px] rounded-lg bg-[#D9EFFF] flex flex-col justify-center gap-[20px]'>
                    <ParagraphComp text='RFP Submission Opens on November 15 at 6:00 PM. Please prepare your proposals for submission by this time.' className='text-lg text-center font-schibsted text-[#0F75BC] font-[500]' />
                    <div className='flex justify-center gap-[10px]'>
                        <div className='rounded-lg h-[100px] w-[100px] bg-[#0F75BC] flex flex-col justify-center items-center p-[20px]'>
                            <ParagraphComp className='text-[white] leading-[45px] mt-[0px] font-semibold text-[50px]' text={String(timeLeft.days).padStart(2, '0')} />
                            <ParagraphComp className='text-[white] text-[15px]' text='DAYS' />
                        </div>
                        <div className='rounded-lg h-[100px] w-[100px] bg-[#0F75BC] flex flex-col justify-center items-center p-[20px]'>
                            <ParagraphComp className='text-[white] leading-[45px] mt-[0px] font-semibold text-[50px]' text={String(timeLeft.hours).padStart(2, '0')} />
                            <ParagraphComp className='text-[white] text-[15px]' text='HOURS' />
                        </div>
                        <div className='rounded-lg h-[100px] w-[100px] bg-[#0F75BC] flex flex-col justify-center items-center p-[20px]'>
                            <ParagraphComp className='text-[white] leading-[45px] mt-[0px] font-semibold text-[50px]' text={String(timeLeft.minutes).padStart(2, '0')} />
                            <ParagraphComp className='text-[white] text-[15px]' text='MINUTES' />
                        </div>
                        <div className='rounded-lg h-[100px] w-[100px] bg-[#0F75BC] flex flex-col justify-center items-center p-[20px]'>
                            <ParagraphComp className='text-[white] leading-[45px] mt-[0px] font-semibold text-[50px]' text={String(timeLeft.seconds).padStart(2, '0')} />
                            <ParagraphComp className='text-[white] text-[15px]' text='SECONDS' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center w-[100%]'>
                <ButtonComp onClick={() => { setButtons({ ['Apply for RFP']: { ['Apply for RFP']: true } }) }} className='bg-[#0F75BC] px-[20px] p-[5px] mt-[30px] flex justify-center gap-[10px] items-center text-white rounded-md border-none'  >
                    Next Page
                </ButtonComp>
            </div>

        </div >
    );
};

export default Timer;
