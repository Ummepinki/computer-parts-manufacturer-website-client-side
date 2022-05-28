
import React, { useState } from 'react';


const Purchase = ({ orders }) => {

    const { name, available_quantity, minimum_quantity } = orders;
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [quantity, setQuantity] = useState(minimum_quantity);
    const [phone, setPhone] = useState('');
    const [quantityError, setQuantityError] = useState('');
    const [isFromValid, setIsFromValid] = useState(true);


    const handlePurchase = event => {
        event.preventDefault();

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

            <input type="checkbox" id="purchase-modal" class="modal-toggle" />

            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h2 className='font-bold text-lg text-center '>Purchase Product</h2>
                    <label for="purchase-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg mb-2">Order for:{name}</h3>
                    <form onSubmit={handlePurchase} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <span class="label-text">Name</span>
                        <input type="text" value={username} onChange={handleChangeName} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <span class="label-text">Email</span>
                        <input type="text" value={email} onChange={handleChangeEmail} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <span class="label-text">Address</span>
                        <input type="text" value={address} onChange={handleChangeAddress} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <span class="label-text">Quantity</span>
                        <input type="text" value={quantity} onChange={handleChangeQuantity} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        {quantityError && <div className='text-red-500'>  {quantityError} </div>}
                        <span class="label-text">Phone Number</span>
                        <input type="text" value={phone} onChange={handleChangePhone} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" disabled={!isFromValid} value="submit" class="btn btn-accent w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;