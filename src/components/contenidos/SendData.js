import React, { useCallback, useContext, useEffect } from "react";
import Validate from "../../scripts/validty/Validation";
import { StoreContext } from "../../store/StoreProvider";


const SendData = (props)=>{
    const [store,dispatch] = useContext(StoreContext)
    const send = useCallback((type)=>{
        const {lateral,sesion} = store
        const {data} = props
        switch (type) {
            case 'singIn':
                let login = Validate.validSquemas('singIn',sesion)
                if (login.error !== undefined) {
                    dispatch({type:'ActivePop',data:{active:true,type:'error',data:login}})
                }else{
                    sesion.SignIn = true
                    dispatch({type:'sesion'})
                }
                break;
            case 'singOut':
                sesion.SignIn = false
                dispatch({type:'sesion'})
                break;
            case 'link':
                dispatch({type:'link',data:data})
                break;
            case 'closePop':
                // console.log('cierra');
                dispatch({type:'ActivePop',data:{active:false,type:'error'}})
                break;
            case 'correctProperty':
            case 'deleteItem':
                console.log(data);
                if (data.padre === 'new' || data.indice === 'new') {
                    type === 'deleteItem'?
                    lateral.splice(lateral.length-1,1):
                    // console.log(lateral):
                    lateral.push(data)
                }else{
                    let padre = []
                    type === 'deleteItem'?
                    padre = data.indice.split(','):
                    padre = data.padre.split(',')
                    switch (padre.length) {
                        case 1:
                            type === 'deleteItem'?
                            lateral.splice([padre[0]],1):
                            lateral[padre[0]].list.push(data)
                            break;
                        case 2:
                            type === 'deleteItem'?
                            lateral[padre[0]].list.splice([padre[1]],1):
                            lateral[padre[0]].list[padre[1]].list.push(data)
                            break;
                        case 3:
                            type === 'deleteItem'?
                            lateral[padre[0]].list[padre[1]].splice([padre[2]],1):
                            lateral[padre[0]].list[padre[1]].list[padre[2]].list.push(data)
                            break;
                        case 4:
                            type === 'deleteItem'?
                            lateral[padre[0]].list[padre[1]].list[padre[2]].splice([padre[3]],1):
                            lateral[padre[0]].list[padre[1]].list[padre[2]].list[padre[3]].list.push(data)
                            break;
                        default:
                            break;
                    }
                }
                dispatch({type:'changeFloat'})
                break;
            case 'errorProperty':
                dispatch({type:'ActivePop',data:{active:true,type:'error',data:data}})
                break;
            case 'deleteItemm':
                console.log(data);
                break;
            case 'ActivePop':
                dispatch({type:'ActivePop',data:{active:true,type:'pop',data:data}})
                break;
            default:
                break;
        }
        if(props.setSend) props.setSend(false)
        if(props.setActivePop) props.setActivePop(false)
    },[dispatch,props,store])
    useEffect(()=>{
        if (props.active) {
            send(props.type)
        }
    },[send,props])
    return(
        <div></div>
    )
}
export default SendData