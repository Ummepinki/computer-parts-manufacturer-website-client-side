import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const MyOrders = () => {
    const [order, setOrder] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`https://protected-plateau-82864.herokuapp.com/booking?customerEmail= ${user.customerEmail}`)
                .then(res => res.json())
                .then(data => setOrder(data));

        }

    }, [user])




    return (
        <div>
            <h2>My orders :{order.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map((a, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{a.customerName}</td>
                                <td>{a.customerEmail}</td>
                                <td>{a.customerAddress}</td>
                                <td>{a.phone}</td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;