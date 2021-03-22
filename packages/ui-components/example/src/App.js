import React from 'react'
import {
  FormikControl,
  Form,
  Formik
} from 'ui-helper'

function App() {
  const onSubmit = async (values, { setSubmitting, ...props }) => {
    await new Promise((r) => setTimeout(r, 5000))
    alert(JSON.stringify(values, null, 2))
    setSubmitting(false)
  }

  return (
    <div id='newCalc'>
      <div className='calc-container lvr-calc'>
        <h1 className='calc-title text-center text-bold'>
          Loan Repayment Calculator
                </h1>
        <div className='row'>
          <div className='col-md-6'>
            <h4 className='text-bold'>Fill in the details</h4>{' '}
            <Formik onSubmit={console.log('calculate')}>
              {({
                values,
                errors,
                setFieldValue,
                isSubmitting,
                isValid
              }) => {
                return (
                  <div className='calc-form'>
                    <Form>
                      <div className='row'>
                        <div className='col-md-12 '>
                          <div className='row'>
                            <div className='col-md-6 '>
                              <FormikControl
                                control='input'
                                type='text'
                                label='Interest Rate'
                                name='interest_rate'
                                placeholder='Enter interest rate'
                                errors={errors}
                                setFieldValue={
                                  setFieldValue
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Form>
                  </div>
                )
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
