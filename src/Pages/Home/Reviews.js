import React from 'react';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Harish',
            review: 'Product is good quality, and less price so everyone choice it.',
            img: people1,
            location: 'Boston'
        },
        {
            _id: 2,
            name: 'Harish',
            review: 'I am really impressed for buy product',
            img: people2,
            location: 'Atlanta'
        },
        {
            _id: 3,
            name: 'Harish',
            review: 'Great ,Excellent service.',
            img: people3,
            location: 'Austin'
        }
    ]
    return (
        <div>
            <h1 className='text-5xl text-primary font-bold text-center mb-2'> Reviews</h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        review={review}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;