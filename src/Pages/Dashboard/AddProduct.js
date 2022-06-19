import React from 'react';
import { useForm } from "react-hook-form";
const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();


    const onSubmit = async data => {
        console.log('data', data);

    }
    return (
        <div>
            <h2 className='text-1xl'>Add a new product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'Price is Required'
                            },

                        })}
                    />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                        {errors.price?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Minimum Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Minimum Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("Minimum Quantity", {
                            required: {
                                value: true,
                                message: 'Minimum Quantity is Required'
                            },

                        })}
                    />
                    <label className="label">
                        {errors.minimum_quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimum_quantity.message}</span>}
                        {errors.minimum_quantity?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.minimum_quantity.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Available Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("Available Quantity", {
                            required: {
                                value: true,
                                message: 'Available Quantity is Required'
                            },

                        })}
                    />
                    <label className="label">
                        {errors.available_quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.available_quantity.message}</span>}
                        {errors.available_quantity?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.available_quantity.message}</span>}
                    </label>
                </div>



                <input className='btn  w-full max-w-xs text-white' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddProduct;