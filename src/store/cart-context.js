import React from 'react'

const CartContext = React.createContext({
    cart:[],
    items: [],
    addToCart: ()=>{},
    removeFromCart: ()=>{}
})

export default CartContext