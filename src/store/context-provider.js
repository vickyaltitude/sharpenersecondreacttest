import React, { useState } from 'react'
import CartContext from './cart-context'

const ContextProvider = (props) => {

    const [listItems,setListItems] = useState([])
    const [cartList,setCartList] = useState([])
    const [cartCount,setCartCount] = useState(0)

    function addToListItems(received){
        let id = listItems.length === 0 ? 1 : listItems.length + 1
        setListItems((lastItem)=> [...lastItem,{...received,id:id}])
        setCartList((lastItem)=> [...lastItem,{itemId: id,Large: 0,Medium:0,Small:0,total:0,price:received.price}])
    }

    function removeFromListItems(lId,method){
        
        let updatedObj = listItems.map(list => list.id === lId ? {...list,[method]: Number(list[method]) > 0 ? Number(list[method]) - 1 :  0}: list);

        setListItems((latestItems)=> updatedObj)
       

    }

 
    let globalObj = {
        cart: cartList,
        items: listItems,
        addToCart: addToListItems,
        cartCount: cartCount,
        setListItems: setListItems,
        setCartCount: setCartCount,
        removeFromCart: removeFromListItems,
        setShowToCart: setCartList
    }


  return (
    
         <CartContext.Provider value={globalObj}>

            {props.children}

         </CartContext.Provider>
 
  )
}

export default ContextProvider