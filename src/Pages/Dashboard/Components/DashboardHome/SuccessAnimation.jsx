import React, { useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from './Animation - 1738152026057 (1).json';
import { useNavigate, useLocation } from 'react-router-dom';

const SuccessAnimation = () => {
    const navigate = useNavigate();

    // Prevent direct access


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/dashboard/lands', { replace: true });
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className='h-[50vh] flex justify-center items-center'>
            <Lottie options={defaultOptions} height={200} width={300} />;
        </div>
    );
};

export default SuccessAnimation;
