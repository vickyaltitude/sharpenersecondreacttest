import React from 'react'
import { useContext } from 'react'
import CartContext from '../store/cart-context'

const TshirtDisplay = () => {

    const cartCtx = useContext(CartContext)

    function handleQtyReduce(id,event){
        console.log(event.target.value)
          if(event.target.innerText.includes('Large')){

            cartCtx.removeFromCart(id,'Large')

          }else if(event.target.innerText.includes('Medium')){

            cartCtx.removeFromCart(id,'Medium')

          }else if(event.target.innerText.includes('Small')){

            cartCtx.removeFromCart(id,'Small')

          }
    }
      
  return (
    <div>
        {cartCtx.items.length && cartCtx.items.map(item => <li key={item.id}>
            <span>{item.name}</span> &nbsp;&nbsp;
            <span>{item.desc}</span> &nbsp;&nbsp;
            <span>{item.price}</span> &nbsp;&nbsp;
            <button type='button' onClick={(event)=>handleQtyReduce(item.id,event)}>Buy Large {item.Large}</button> &nbsp;
            <button type='button' onClick={(event)=>handleQtyReduce(item.id,event)}>Buy Medium {item.Medium}</button>&nbsp;
            <button  type='button' onClick={(event)=>handleQtyReduce(item.id,event)}>Buy Small {item.Small}</button>
            </li>)}
        {!cartCtx.items.length && " No item to display"}
    </div>
  )
}

export default TshirtDisplay