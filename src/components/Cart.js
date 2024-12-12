import React,{useContext} from 'react'
import CartContext from '../store/cart-context'

const Cart = ({onSetDisplayCart}) => {


    const cartCtx = useContext(CartContext);
    
    let grandTotal = cartCtx.cart.reduce((mis,cur)=>{
        return mis + cur.total
    },0)
  
    let itemsToDis = cartCtx.cart.map(item =>{

        let itemName = cartCtx.items.filter(it => it.id === item.itemId)
        console.log(item,cartCtx.items[0])
        let fiterName = itemName[0].name
        if(item.Large === 0 && item.Medium === 0 && item.Small === 0){
            return 
        }else{
            return   (<li key={item.itemId}>
            <span>{fiterName}</span> &nbsp;&nbsp;&nbsp;
            <span>Large - {item.Large ? item.Large : 0}</span> &nbsp;
            <span>Medium - {item.Medium ? item.Medium : 0}</span> &nbsp;
            <span>Small - {item.Small ? item.Small : 0}</span> &nbsp;
            <span>Total - {item.total ? item.total : 0}</span> &nbsp;
            <span>Grand Total - {grandTotal}</span>
         </li>)
        }
    })
   function handleClearCart(){
   
      
    let newItems = cartCtx.items.flatMap(list =>{

      return  cartCtx.cart.map(li=>{
        
              if(li.itemId === list.id){
                  return {...list,Large: Number(li.Large) + Number(list.Large),Medium: Number(li.Medium) + Number(list.Medium),Small: Number(li.Small) + Number(list.Small)}
              }else{
                return {...list}
              }
        })
   })
    
    cartCtx.setListItems(()=> newItems)


    let newCart = cartCtx.cart.map(item => {
        return {...item,Large:0,Medium:0,Small:0}
    
    })
  
    cartCtx.setShowToCart(newCart)
    cartCtx.setCartCount(0)
   }
  
  return (

    <>
    {cartCtx.cart.length && itemsToDis
  }
  {!cartCtx.cart.length && 'Nothing to show here'}
  <button type='button' onClick={handleClearCart}>Clear Cart</button>
  <button type='button' onClick={()=>onSetDisplayCart(false)}>Cancel</button>
  </>
  )
}

export default Cart