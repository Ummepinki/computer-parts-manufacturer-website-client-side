import React from 'react';
import flag from '../../assets/icons/flag.jpg';
import product from '../../assets/icons/product.jpg';
import client from '../../assets/icons/client.jpg';
import feedback from '../../assets/icons/feedback.jpg';
import PrimaryButton from '../../Shared/PrimaryButton';

const Business = () => {
    return (
        <div className='mt-5'>
            <div>
                <h1 className='text-3xl font-bold text-primary text-center mb-2 mt-3'>Business Summary</h1>
            </div>
            <section className='grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 mb-3'>
                <div className=''>
                    <img className='w-12' src={flag} alt=''></img>
                    <p className='text-5xl text-primary'>40</p>
                    <p className='text-2xl text-primary'>Countries</p>
                </div>
                <div className=''>
                    <img className='w-12' src={product} alt=''></img>
                    <p className='text-5xl text-primary'>500+</p>
                    <p className='text-2xl text-primary'>Product Selling</p>
                </div>
                <div>
                    <img className='w-11' src={client} alt=''></img>
                    <p className='text-5xl text-primary'>200+</p>
                    <p className='text-2xl text-primary'>Happy Client</p>
                </div>
                <div>
                    <img className='w-12' src={feedback} alt=''></img>
                    <p className='text-5xl text-primary'>400+</p>
                    <p className='text-2xl text-primary'>Feedback</p>
                </div>

            </section>
            <div class="card w-50  shadow-xl ">
                <div class="card-body ">
                    <div class="card-actions justify-end">
                        <p className='text-5xl text-primary font-bold'>Have any question about us or get a product request ?</p>
                    </div>
                    <p className='text-3xl'>Don,t hesitate to contract us.</p>
                </div>
                <PrimaryButton>Contract Us</PrimaryButton>
            </div>

        </div>
    );
};

export default Business;