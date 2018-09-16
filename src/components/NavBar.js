import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = props => {
    return (
        <div>
            <Link to='/users'>Products {props.products.length}</Link>
            {/* <Link>Top Rated</Link> */}
        </div>
    )
}

export default NavBar