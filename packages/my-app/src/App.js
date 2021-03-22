import React from 'react';
import { Text } from '@namespace/common';
import { Button, Formik, FormikControl } from '@namespace/ui-components';

const App = () => {
  return (
    <div className="App">
      <Text />
      <Formik onSubmit={console.log('calculate')}>
        {({
          values,
          errors,
          setFieldValue,
          isSubmitting,
          isValid
        }) => <FormikControl
            control='input'
            type='text'
            label='Enter your first name'
            name='first_name'
            placeholder='Enter your first name'
          />
        }
      </Formik>
      <Button />

    </div>
  );
};

export default App;

