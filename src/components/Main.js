import React from 'react';
import { Route, Link, HashRouter } from 'react-router-dom'
import axios from 'axios'
import NavBar from './NavBar'
import ProductList from './ProductList'

export default class Main extends React.Component{
    constructor(){
        super();
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        axios.get('/api/products')
        .then((products) => this.setState({products: products.data}))
    }
    render(){
        const {products} = this.state
        return (
            <div>
                <NavBar products={products} />        
                <Route path='/users' render={(props) => <ProductList products={products} {...props}/>}/>
            </div>
        )
    }
}