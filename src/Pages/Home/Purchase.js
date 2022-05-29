
import React, { useState } from 'react';



const Purchase = ({ orders }) => {

    const { _id, name, available_quantity, minimum_quantity } = orders;
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [quantity, setQuantity] = useState(minimum_quantity);
    const [phone, setPhone] = useState('');
    const [quantityError, setQuantityError] = useState('');
    const [isFromValid, setIsFromValid] = useState(true);



    const handlePurchase = event => {
        event.preventDefault();

        const booking = {
            ordersId: _id,
            ordersName: name,
            customerName: username,
            customerEmail: email,
            customerAddress: address,
            customerQuantity: quantity,
            phone: phone


        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            });



    }

    const handleChangeName = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setUsername(value);
    }
    const handleChangeEmail = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setEmail(value);
    }
    const handleChangeAddress = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setAddress(value);
    }
    const handleChangeQuantity = (e) => {
        e.preventDefault();
        const value = e.target.value;
        if (value < minimum_quantity) {
            setQuantityError(`your have to purchase at least ${minimum_quantity}`);
            setIsFromValid(false);

        }
        else if (value > available_quantity) {
            setQuantityError(`you can not  purchase more than ${available_quantity}`)
            setIsFromValid(false);
        }
        else {
            setQuantityError('');
            setIsFromValid(true);
        }


        setQuantity(value);


    }
    const handleChangePhone = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setPhone(value);
    }

    return (
        <div>

            <input type="checkbox" id="purchase-modal" className="modal-toggle" />

            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h2 className='font-bold text-lg text-center '>Purchase Product</h2>
                    <label for="purchase-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg mb-2">Order for:{name}</h3>
                    <form onSubmit={handlePurchase} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <span className="label-text">Name</span>
                        <input type="text" value={username} onChange={handleChangeName} placeholder="your name" className="input input-bordered w-full max-w-xs" />
                        <span className="label-text">Email</span>
                        <input type="text" value={email} onChange={handleChangeEmail} placeholder="your email" className="input input-bordered w-full max-w-xs" />
                        <span className="label-text">Address</span>
                        <input type="text" value={address} onChange={handleChangeAddress} placeholder="address" className="input input-bordered w-full max-w-xs" />
                        <span className="label-text">Quantity</span>
                        <input type="text" value={quantity} onChange={handleChangeQuantity} className="input input-bordered w-full max-w-xs" />
                        {quantityError && <div className='text-red-500'>  {quantityError} </div>}
                        <span className="label-text">Phone Number</span>
                        <input type="text" value={phone} onChange={handleChangePhone} placeholder="Phone number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" disabled={!isFromValid} value="submit" className="btn btn-accent w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;