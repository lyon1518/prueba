import React from "react";

export default function Badge(props) {
    const {type, label} = props.data
    return(
        <span className={"badge badge-"+type+" ml-1"}>{label}</span>
    )
}