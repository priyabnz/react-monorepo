import React from 'react';

function TextError(props) {
    return (
        <div data-testid='testError' className='text-danger'>
            {props.children}
        </div>
    );
}

export default TextError;
