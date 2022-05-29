import React, { useEffect, useState } from 'react';


const MyOrders = () => {
    const [order, setOrder] = useState([]);


    useEffect(() => {

        fetch(`http://localhost:5000/booking`)
            .then(res => res.json())
            .then(data => setOrder(data));

    }, [])
    return (
        <div>
            <h2>My orders :{order.length}</h2>
        </div>
    );
};

export default MyOrders;