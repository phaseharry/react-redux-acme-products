import React from 'react';
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import faker from 'faker'
import NavBar from './NavBar'
import ProductList from './ProductList'
import Product from './Product'
import store, {loadProducts, createProduct, deleteProduct} from '../store'

export default class Main extends React.Component{
    constructor(){
        super();
        this.state = store.getState()
        this.newProduct = this.newProduct.bind(this)
        this.deleteProduct = this.deleteProduct.bind(this)
        this.sortedByRatings = this.sortedByRatings.bind(this)
    }
    componentDidMount(){
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
        axios.get('/api/products')
        .then((products) => store.dispatch(loadProducts(products.data)))
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
    newProduct(){
        const rating = Math.floor((Math.random() * 10) + 1)
        axios.post('/api/products', {name: faker.commerce.productName(), rating})
        .then(product =>  store.dispatch(createProduct(product.data)))
    }
    deleteProduct(id , history){
        console.log(history)
        axios.delete(`/api/products/${id}`)
        .then(() => { 
            if(history){
                history.push('/products')
            }
            store.dispatch(deleteProduct(id) 
        )})
    }
    sortedByRatings(){
        return this.state.products.slice().sort((a,b) => b.rating - a.rating)
    }
    render(){
        const {products} = this.state
        const { newProduct, deleteProduct, sortedByRatings} = this;
        const sortedProducts= sortedByRatings()
        return (
            <div>
                <NavBar products={products} topRated={sortedProducts[0]? sortedProducts[0] : { name : ''}}/>      
                <Switch>
                <Route path='/products/:id' render={({match, history}) => {
                    const product = products.find((product) => {
                        if(+match.params.id === product.id){
                            return product
                        }
                    }) 
                    return <Product name={product? product.name : ''} id={product? product.id : ''} match={match} history={history} deleteProduct={deleteProduct} />}
                 } />
                <Route path='/products' render={(props) => <ProductList products={products} {...props} deleteProduct={deleteProduct} newProduct={newProduct}/>}/>
                </Switch>
            </div>
        )
    }
}