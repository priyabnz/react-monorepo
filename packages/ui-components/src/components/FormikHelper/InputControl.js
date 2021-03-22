import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import Label from './formLabel'

const Inputs = (props) => {
    const {
        label,
        name,
        placeholder,
        errors,
        type,
        icon,
        tooltipProps,
        suffix,
        ...rest
    } = props
    return (
        <Field name={name}>
            {({ field, form }) => {
                return (
                    <div className='form-group'>
                        <Label name={name} label={label} {...tooltipProps} />
                        <div
                            className={`input-wrapper ${!!icon ? 'position-relative' : ''
                                }`}
                        >
                            {icon}
                            <input
                                id={name}
                                type={type}
                                {...rest}
                                {...field}
                                placeholder={placeholder}
                                className={`form-control input-val ${!!icon ? 'left-padded-input' : ''
                                    }`}
                            />
                            {suffix}

                        </div>
                        <ErrorMessage component={TextError} name={name} />
                    </div>
                )
            }}
        </Field>
    )
}

export default Inputs
