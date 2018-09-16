import React from 'react';

const ProductList = props => {
    const {products} = props
    return (
        <ul>
            {products.map((product) => <li>{product.name}</li>)}
        </ul>
    )
}

export default ProductList