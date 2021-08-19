import React, { useEffect, useState } from "react";

export default function GoogleLogin(params) {
    const [code , setCode] = useState('')
    const handdleLogin = ()=>{
        let Code = document.querySelector('#code')
        let Survey = document.querySelector('#survey')
        let Result = document.querySelector('#result')
        Result.innerHTML = Survey.value+'&'+Code.value
    }
    useEffect(()=>{
        let url = window.location.href
        url = url.split('&')
        setCode(url[1])
        // console.log(url[1]);
    },[])
    return(
        <div className="container">
            <h1>Inicio de sesion con google</h1>
            {/* <h3>{url[1]}</h3> */}
            <input type="text" placeholder="survey" id="survey"/>
            <input type="text" placeholder="code" id="code" value={code}/>
            <p id="result"></p>
            <button className="btn btn-success" onClick={()=>handdleLogin()}>Iniciar</button>
        </div>
    )
}
