import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    // const totalPrice = cart.reduce((total,prd) => total + prd.price,0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
         total = total + product.price;
       
    }
    let shipping = 12.99;
    if(total>35){
        shipping = 0;
    }

    else if(total > 15){
        shipping = 4.99;
    }
    
    
    else if(total > 35 ){
        shipping = 0; 
    }
    else{
        shipping = 0;
    }

    const numberFormat = num =>{
        const precision = num.toFixed(2)
        return Number(precision)
    } 
   
    const tax = total / 12 ;
    const grandTotal = total + shipping + tax ;
    return (
        <div>
            <h4>Order Summary: </h4>
            <p>Items ordered: {cart.length}</p>
            <p>Product price: {numberFormat(total)}</p>
            <p><small>Shipping cost: {numberFormat(shipping) }</small></p>
            <p><small>Tax + VAT : {numberFormat(tax)}</small></p>
            <h4>Total Price: {numberFormat(grandTotal)}</h4>

            
        </div>
    );
};

export default Cart;