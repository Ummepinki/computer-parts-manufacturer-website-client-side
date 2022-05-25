import React from 'react';
import banner from '../../assets/images/banner.jpg';
import PrimaryButton from '../../Shared/PrimaryButton';
const Banner = () => {
    return (
        <div className="hero min-h-screen  ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Parts of Computer</h1>
                    <p className="py-2">The main part of any computer is the central processing unit or CPU. The CPU does all of the operations and calculations that make a computer run.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;