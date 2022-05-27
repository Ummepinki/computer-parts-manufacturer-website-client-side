
import React from 'react';

const Purchase = ({ orders }) => {
    const { name, minimum_quantity } = orders;

    const handlePurchase = event => {
        event.preventDefault();
        const minimum_quantity = event.target.minimum_quantity.value;
        console.log(minimum_quantity);
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
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <span class="label-text">Email</span>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <span class="label-text">Address</span>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <span class="label-text">Quantity</span>
                        <select name=" minimum_quantity " class="select select-bordered w-full max-w-xs">
                            <option>{minimum_quantity}</option>
                            <option>11</option>
                            <option>9</option>
                            <option>8</option>

                        </select>
                        <span class="label-text">Phone Number</span>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" class="btn btn-accent w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;