import { createContext } from "react";
import { Provider } from "react-redux";

export const cartContext = createContext();
export const CartProvider = ({children})=>{
    const name = 'zawwar';
    return(
<cartContext.Provider value={{name}}>
    {children}
</cartContext.Provider>
    )
}
