import Apis from "../scripts/control/Apis";
const {activeLateral,lateral,sarch,notificacion,NavbarTop,pop,linkUrl,sesion} = Apis
const types = {
    changeStateNavbarVertical:'changeStateNavbarVertical',
    changeFloat:'changeFloat',
    ActivePop:'ActivePop',
}
const InitialState = {
    // activeLateral:false
    activeLateral,
    lateral,
    sarch,
    notificacion,
    NavbarTop,
    pop,
    linkUrl,
    sesion
}
const StoreReducer = (state,action)=>{
    switch (action.type) {
        case types.changeStateNavbarVertical:
            return{
                ...state,
                activeLateral:action.data
            }
        case types.ActivePop:
            return{
                ...state,
                pop:action.data
            }
        case types.changeFloat:
        case 'sesion':
            return{
                ...state,
            }
        case 'link':
            return{
                ...state,
                linkUrl:action.data
            }
        default:
            return state;
    }
}
export {InitialState, types}
export default StoreReducer