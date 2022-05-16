import React from 'react';


function Button({buttonType, buttonText, onClickFunction}) {
    return (
        <button
            type={buttonType}
            onClick={onClickFunction}
        >
            {buttonText}
        </button>
    );
}

export default Button;