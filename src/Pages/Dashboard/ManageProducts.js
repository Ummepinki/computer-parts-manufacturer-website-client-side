import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import ProductRow from './ProductRow';

const ManageProducts = () => {
    const { data: products, isLoading } = useQuery('product', () => fetch('http://localhost:5000/product', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl'>Manage products:{products.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>price</th>
                            <th>Minimum Quantity</th>
                            <th>Available Quantity</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ProductRow
                                key={product._id}
                                product={product}
                                index={index}
                            ></ProductRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;