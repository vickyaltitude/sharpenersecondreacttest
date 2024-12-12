import React,{useState,useContext} from 'react'
import CartContext from '../store/cart-context'
import  classes from './TshitForm.module.css'

const TshirtForm = ({onSetDisplayCart}) => {

    const CartCtx= useContext(CartContext)

    const [handleInput,setHandleInput] = useState({
        name:'',
        desc:'',
        price:'',
        Large:'',
        Medium:'',
        Small:''
    })

    function handleItemSubmit(eve){
        eve.preventDefault()
          CartCtx.addToCart(handleInput)
        
    }

   function handleDisplayCart(){
    onSetDisplayCart(true)
   }

  return (
    <>
        <form className={classes.tshirtForm} onSubmit={(event)=> handleItemSubmit(event)}>
            <div>
            <label htmlFor='name'>Tshirt Name</label>
            <input value={handleInput.name} onChange={(event)=> setHandleInput({...handleInput,name:event.target.value})} id="name" type="text"/>
            </div>
            <div>
            <label htmlFor='descr'>Description</label>
            <input value={handleInput.desc} id="descr" onChange={(event)=> setHandleInput({...handleInput,desc:event.target.value})}  type="text" />
            </div>
            <div>
            <label>Price</label>
            <input value={handleInput.price} id='price' onChange={(event)=> setHandleInput({...handleInput,price:event.target.value})}  type='number' />
            </div>
            <div>
            <label>L</label>
            <input value={handleInput.Large} id='large' onChange={(event)=> setHandleInput({...handleInput,Large:event.target.value})}  type='number' />
            </div>
            <div>
            <label>M</label>
            <input value={handleInput.Medium} id='medium' onChange={(event)=> setHandleInput({...handleInput,Medium:event.target.value})}  type='number' />
            </div>
            <div>
            <label>S</label>
            <input value={handleInput.Small} id='small' onChange={(event)=> setHandleInput({...handleInput,Small:event.target.value})}  type='number' />
            </div>
            <div>
            <button type='submit'>Submit</button>
            <button type='button' onClick={handleDisplayCart}>Cart {CartCtx.cartCount}</button>
            </div>
           
        </form>
    </>
  )
}

export default TshirtForm