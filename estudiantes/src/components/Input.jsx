import React from "react";

function Input(props){
    return(
        <>
            <label>{props.titulo}</label>
            <input type={props.type} placeholder={props.placeholder}></input>
        </>
    )
}

export default Input;