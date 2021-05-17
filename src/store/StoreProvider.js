import { createContext, useReducer } from "react";
import StoreReducer, {InitialState} from "./StoreReducer";

const StoreContext = createContext();

const StoreProvider = ({children})=>
    <StoreContext.Provider value={useReducer(StoreReducer,InitialState)}>
        {children}
    </StoreContext.Provider>

export {StoreContext}
export default StoreProvider