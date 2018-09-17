import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'

//action types 
const LOAD_PRODUCTS = 'LOAD_PRODUCTS'
const CREATE_PRODUCT = 'CREATE_PRODUCT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'
//action creators
export const loadProducts = products => ({type: LOAD_PRODUCTS, products})
export const createProduct = product => ({type: CREATE_PRODUCT, product})
export const deleteProduct = id => ({type: DELETE_PRODUCT, id})

const initialState = {products: []}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case DELETE_PRODUCT:
          return {...state, products: state.products.filter((product) => product.id !== action.id)}
        case LOAD_PRODUCTS:
          return {...state, products: action.products}
        case CREATE_PRODUCT: 
          return {...state, products: [...state.products, action.product]}
        default:    
          return state 
    }
}

const store = createStore(reducer, applyMiddleware(logger))

export default store