import React from "react";

function Select(props){
    return(
        <>
            <label>{props.titulo}</label>
            <select>
                {
                    props.opciones.map(function(option, index){
                        return (
                            <option key={index} value={index}>
                                {option}
                            </option>
                            )
                    })
                }
            </select>
        </>
    )
}

export default Select;