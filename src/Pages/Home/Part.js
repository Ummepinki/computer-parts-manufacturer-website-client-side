import React from 'react';
import { useNavigate } from 'react-router-dom';


const Part = ({ part, setOrders }) => {
    const { _id, name, img, description, minimum_quantity, price, available_quantity } = part;

    const navigate = useNavigate();
    const navigateToItemDetails = id => {
        navigate(`/part/${id}`)
    }

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p className='font-bold'>Price(per unit price):{price}</p>
                <p>Minimum Quantity:{minimum_quantity}</p>
                <p>Available Quantity:{available_quantity}</p>

                <button onClick={() => navigateToItemDetails(_id)}
                    class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
                >
                    Buy Now</button>







            </div>
        </div>
    );
};

export default Part;