import React from 'react'
import Input from './InputControl'

/**
 * @param {string} control type of form input
 */
const FormikControl = (props) => {
    const { control, ...rest } = props
    switch (control) {
        case 'input':
            return <Input {...rest} />
        default:
            return null
    }
}

export default FormikControl
