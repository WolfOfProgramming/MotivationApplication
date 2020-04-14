import React from 'react';

export default function CustomRadioButton({ value, chosenValue, onChange }) {
  const isChecked = value === chosenValue;

  return (
    <div className='CustomRadioButton'>
      <input
        className='CustomRadioButton__input'
        type='radio'
        checked={isChecked}
        id={value}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <label htmlFor={value} className='CustomRadioButton__label'>
        {value}
      </label>
    </div>
  );
}
