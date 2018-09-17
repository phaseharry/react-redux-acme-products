import React from 'react';
import Product from './Product';

const ProductList = props => {
    const {products, deleteProduct, newProduct} = props
    return (
        <div>
            <button onClick={newProduct}>Create Product</button>
            <ul>
                {products.map((product) => <Product name={product.name} key={product.id} deleteProduct={deleteProduct} id={product.id}/>)}
            </ul>
        </div>
    )
}

export default ProductList