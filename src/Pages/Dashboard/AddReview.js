import React from 'react';

const AddReview = () => {
    return (
        <div>
            <h2 className='text-2xl mt-4 text-center text-primary'>Review page</h2>
            <div className='grid grid-cols-1 justify-items-center gap-5 bg-slate-100'>
                <input
                    type='text'
                    placeholder='Email Address'
                    className='input w-full max-w-md'
                />
                <input
                    type='text'
                    placeholder='name'
                    className='input w-full max-w-md'
                />
                <textarea
                    className='textarea w-full max-w-md'
                    placeholder='Your message'
                    rows={6}
                ></textarea>
                <button className='btn btn-sm'>  add</button>
            </div>
        </div>
    );
};

export default AddReview;