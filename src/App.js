import Cart from "./components/Cart";
import TshirtDisplay from "./components/TshirtDisplay";
import TshirtForm from "./components/TshirtForm";
import ContextProvider from "./store/context-provider";



function App() {
  return (
    <ContextProvider>
       <TshirtForm />
       <TshirtDisplay />
       <Cart />
       </ContextProvider>
  );
}

export default App;
