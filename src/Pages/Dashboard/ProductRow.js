import React from 'react';


const ProductRow = ({ product, index, refetch, setDeleteProduct }) => {
    const { name, price, minimum_quantity, available_quantity, img } = product;



    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-8 rounded">
                    <img src={img} alt=" " />

                </div>
            </div></td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{minimum_quantity}</td>
            <td>{available_quantity}</td>
            <td>
                <label onClick={() => setDeleteProduct(product)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>

            </td>
        </tr>
    );
};

export default ProductRow;