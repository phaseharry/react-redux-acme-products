import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = props => {
    return (
        <ul>
            <li><Link to='/products'>Products {props.products.length}</Link></li>
            <li><Link to={`/products/${props.topRated.id}`}>Top Rated ({props.topRated.name})</Link></li>
        </ul>
    )
}

export default NavBar