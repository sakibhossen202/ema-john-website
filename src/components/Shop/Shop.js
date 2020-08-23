import React, { useState } from 'react';
import fakeData from '../../fakeData'
import './Shop.css'
import Product from '../Products/Product';

const Shop = () => {
    const first10Data = fakeData.slice(0,10)
    const[products,setProduct] = useState(first10Data)
    const[cart,setCart] = useState([])

    const handleAddProduct = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        
        <div className="shop-container">
           <div className="product-container">
               
           
                {
                    products.map(pd => <Product 
                        handleAddProduct = {handleAddProduct}
                        product={pd}></Product> )
                }
            
           </div>

           <div className="cart-container">
               <h3>order Summary: {cart.length}</h3>
           </div>
            
        </div>
    );
};

export default Shop;