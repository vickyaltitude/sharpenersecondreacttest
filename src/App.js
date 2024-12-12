import Cart from "./components/Cart";
import TshirtDisplay from "./components/TshirtDisplay";
import TshirtForm from "./components/TshirtForm";
import ContextProvider from "./store/context-provider";
import {useState} from 'react'


function App() {
  const [displayCart,setDisplayCart] = useState(false)

  return (
    <ContextProvider>
       <TshirtForm displayCart={displayCart} onSetDisplayCart={setDisplayCart} />
       <TshirtDisplay />
       {displayCart && <Cart onSetDisplayCart={setDisplayCart} />}
       
       </ContextProvider>
  );
}

export default App;
