import React from "react";
import PropTypes from 'prop-types';

function Button({ onClick, label, disabled}){
    return (
        <button onClick={onClick} disabled={disabled}>
            {label}
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
};

export default Button;
