import React from "react";
import PropTypes from 'prop-types';

function TarjetaInv({mensaje, likes}){

    return(
        <>
            <h1>{mensaje}</h1>
            <p>Likes: { likes }</p>
        </>
    );
}

TarjetaInv.propTypes = {
    mensaje: PropTypes.string,
    likes: PropTypes.number
};

TarjetaInv.defaultProps = {
    mensaje: 'Seguidores del curso',
    likes: 0
}

export default TarjetaInv;