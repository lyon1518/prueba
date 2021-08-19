import React from "react";

export default function GoogleLogin(params) {
    let url = window.location.href
    url = url.split('&')
    console.log(url[1]);
    return(
        <div className="container">
            <h1>Inicio de sesion con google</h1>
            <h3>{url[1]}</h3>
        </div>
    )
}
