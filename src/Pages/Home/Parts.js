
import React, { useEffect, useState } from 'react';
import Part from './Part';
import Purchase from './Purchase';

const Parts = () => {
    const [parts, setParts] = useState([]);
    const [orders, setOrders] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setParts(data))

    }, [])
    return (
        <div className='my-28'>
            <div className='text-center text-xl font-bold uppercase'>
                <h3 className='text-primary'>Our Parts</h3>
                <h2 className='text-4xl'>Parts We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10'>
                {
                    parts.map(part => <Part
                        key={part._id}
                        part={part}
                        setOrders={setOrders}
                    ></Part>)
                }
            </div>
            {orders && <Purchase orders={orders}></Purchase>}
        </div>
    );
};

export default Parts;