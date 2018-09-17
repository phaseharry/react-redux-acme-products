import React from 'react';

const Product = props => {
    const { name, id, deleteProduct, history} = props
    return (
        <div>
            <li>
                {name}
                <button onClick={() => deleteProduct(id, history)}>X</button>
            </li>
        </div>
    )
}

export default Product