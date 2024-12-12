import React, { useState } from 'react'
import CartContext from './cart-context'

const ContextProvider = (props) => {

    const [listItems,setListItems] = useState([])
    const [cartList,setCartList] = useState([])

    function addToListItems(received){
        let id = listItems.length === 0 ? 1 : listItems.length + 1
        setListItems((lastItem)=> [...lastItem,{...received,id:id}])
    }

    function removeFromListItems(lId,method){
        console.log(lId,method)
        console.log(listItems[0][method])
        let updatedObj = listItems.map(list => list.id === lId ? {...list,[method]: Number(list[method]) > 0 ? Number(list[method]) - 1 :  0}: list);
        
        const forCartList = updatedObj.filter(list => list.id === lId);
        const cartItem = {
            itemName: forCartList[0].name,
            large: forCartList[0].Large - 1 || 0,
            medium : forCartList[0].Medium - 1 || 0,
            small : forCartList[0].Small - 1 || 0,
            
        }

        setListItems(updatedObj)
        setCartList([...cartList,cartItem])

    }

    let globalObj = {
        cart: cartList,
        items: listItems,
        addToCart: addToListItems,
        removeFromCart: removeFromListItems
    }


  return (
    
         <CartContext.Provider value={globalObj}>

            {props.children}

         </CartContext.Provider>
 
  )
}

export default ContextProvider