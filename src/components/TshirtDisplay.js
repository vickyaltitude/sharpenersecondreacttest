import React from 'react'
import { useContext } from 'react'
import CartContext from '../store/cart-context'

const TshirtDisplay = () => {

    const cartCtx = useContext(CartContext)



    function handleQtyReduce(id,event){

          let newCount = cartCtx.cartCount + 1;
          cartCtx.setCartCount(newCount)
       
          if(event.target.innerText.includes('Large')){

            cartCtx.removeFromCart(id,'Large')

               let newItem =  cartCtx.cart.map(item => item.itemId === id ? {...item,Large: Number((item.Large) || 0) + 1,total: ((Number(item.Large) + Number(item.Medium) + Number(item.Small)) + 1) * Number(item.price)} : item)
                cartCtx.setShowToCart(()=> newItem)
           

          }else if(event.target.innerText.includes('Medium')){

            cartCtx.removeFromCart(id,'Medium')

                let newItem =  cartCtx.cart.map(item => item.itemId === id ? {...item,Medium: Number((item.Medium) || 0) + 1,total: ((Number(item.Large) + Number(item.Medium) + Number(item.Small)) + 1) * Number(item.price)} : item)
                 cartCtx.setShowToCart(()=> newItem)
             

          }else if(event.target.innerText.includes('Small')){

            cartCtx.removeFromCart(id,'Small')

                let newItem =  cartCtx.cart.map(item => item.itemId === id ? {...item,Small: Number((item.Small) || 0) + 1,total: ((Number(item.Large) + Number(item.Medium) + Number(item.Small)) + 1) * Number(item.price)} : item)
                 cartCtx.setShowToCart(()=> newItem)
            

          }
    }
     
   


  return (
    <div>
        {cartCtx.items.length && cartCtx.items.map(item => <li key={item.id}>
            <span>{item.name}</span> &nbsp;&nbsp;
            <span>{item.desc}</span> &nbsp;&nbsp;
            <span>{item.price}</span> &nbsp;&nbsp;
            <button type='button' onClick={(event)=> {
                handleQtyReduce(item.id,event) 
                }}>Buy Large {item.Large}</button>
                 &nbsp;
            <button type='button' onClick={(event)=>{
                handleQtyReduce(item.id,event) 
                }}>Buy Medium {item.Medium}</button>&nbsp;

            <button  type='button' onClick={(event)=>{
                handleQtyReduce(item.id,event) 
                }}>Buy Small {item.Small}</button>
            </li>)}
        {!cartCtx.items.length && " No item to display"}
    </div>
  )
}

export default TshirtDisplay