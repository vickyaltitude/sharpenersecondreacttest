import React from 'react'

const CartContext = React.createContext({
    cart:[],
    cartCount:0,
    items: [],
    setCartCount: ()=>{},
    setListItems: ()=>{},
    addToCart: ()=>{},
    removeFromCart: ()=>{},
    setShowToCart: ()=>{}
})

export default CartContext