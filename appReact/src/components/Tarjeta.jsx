import React from "react";
import PropTypes from 'prop-types';

export const Tarjeta = ({titulo, parrafo, esVisible}) =>{

    if(!esVisible){
        return (
            <>
                <h1>No hay informacion</h1>
            </>
        );
    }
    return(
        <>
            <h1>{titulo}</h1>
            <p>{parrafo}</p>
            <p>{esVisible}</p>
        </>
    )
}

Tarjeta.propTypes = {
    titulo: PropTypes.string.isRequired,
    parrafo: PropTypes.string,
    esVisible: PropTypes.bool
}