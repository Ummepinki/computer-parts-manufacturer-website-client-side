import React from 'react';
import system from '../../assets/images/system.jpg';
const ComputerSystem = () => {
    return (
        <div class="hero min-h-screen ">

            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={system} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h2 className='text-3xl mb-3 font-semibold'>Computer System</h2>
                    <p>A Computer system is defined as combination of components designed to process data and store files.
                        A computer system requires hardware software and a user to fully function .
                        Computer systems are currently built around at least one digital processing device. There are five main hardware components in a computer system: Input, Processing, Storage, Output and Communication devices.   </p>
                    <p>
                        <br />
                        The 5 different parts of a computer—taking a look under the hood
                        i. A motherboard.
                        ii. A Central Processing Unit (CPU)
                        iii. A Graphics Processing Unit (GPU), also known as a video card.
                        iv. Random Access Memory (RAM), also known as volatile memory.
                        v. Storage: Solid State Drive (SSD) or Hard Disk Drive (HDD)

                    </p>
                </div>
            </div>
        </div>
    );
};

export default ComputerSystem;