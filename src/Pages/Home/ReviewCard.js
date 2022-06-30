import React from 'react';

const ReviewCard = ({ review }) => {

    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">

                <p>{review.review}</p>
                <div class="flex item-center">
                    <div class="avatar">
                        <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt=""></img>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{review.name}</h4>
                        <p>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;