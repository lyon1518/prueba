import { createContext, useContext, useReducer } from "react";
import StoreReducer, {InitialState} from "./StoreReducer";

const StoreContext = createContext();

const StoreProvider = ({children})=>
    <StoreContext.Provider value={useReducer(StoreReducer,InitialState)}>
        {children}
    </StoreContext.Provider>

// export {StoreContext}
const useStore = () => useContext(StoreContext)[0]
const useDispatch = () => useContext(StoreContext)[1] 
export {StoreContext, useStore, useDispatch}
export default StoreProvider