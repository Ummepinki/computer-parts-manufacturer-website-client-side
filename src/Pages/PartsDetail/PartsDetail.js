import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Purchase from '../Home/Purchase';

const PartsDetail = (part) => {
    const { partId } = useParams();
    const [parts, setParts] = useState({});
    const [orders, setOrders] = useState(null);



    const path = partId ? "/purchase/" + partId : "/purchase"

    useEffect(() => {
        const url = `http://localhost:5000/parts/${partId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setParts(data));
    }, [])
    return (
        <div>
            <h2 className='text-center font-bold'>Welcome to  order from </h2>


            <label for="purchase-modal"
                onClick={() => setOrders(part)}
                class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Buy Now</label>
            {orders && <Purchase orders={orders}></Purchase>}
        </div>

    );
};

export default PartsDetail;