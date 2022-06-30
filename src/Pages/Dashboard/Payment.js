import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LEwZgF9XkD0LJbNlNAE8fElddBb1euv1PlC8N7zzhNnLUEenSZaRozwGFf3L1Vras1h6rReWmYJjDa4O0c99JGD00OuNzk9jw');
const Payment = () => {
    const { id } = useParams();
    const url = `https://protected-plateau-82864.herokuapp.com/booking/${id}`;
    const { data: order, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>

            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className='text-success font-bold'> Hello, {order.customerName}</p>
                    <h2 class="card-title"> Pay for: {order.ordersName}</h2>
                    <p> Please pay for:${order.price}</p>

                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order}></CheckoutForm>
                    </Elements>
                </div>
            </div>

        </div>
    );
};

export default Payment;