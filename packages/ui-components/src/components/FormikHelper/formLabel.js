import React from 'react'

const formLabel = ({ label, name, tooltipDisabled }) => {
    return (
        <div>
            <label htmlFor={name} className='form-label'>
                <span className='label-name'>{label}</span>
            </label>
        </div>
    )
}

export default formLabel
