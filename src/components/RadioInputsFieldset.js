import React from 'react';
import CustomRadioButton from './CustomRadioButton';

export default function RadioInputsFieldset(props) {
  const { values, description, ...rest } = props;

  return (
    <fieldset className='RadioInputsFieldset'>
      <legend className='RadioInputsFieldset__legend'>{description}</legend>

      {values.map((sectionName, index) => (
        <CustomRadioButton value={sectionName} key={index} {...rest} />
      ))}
    </fieldset>
  );
}
