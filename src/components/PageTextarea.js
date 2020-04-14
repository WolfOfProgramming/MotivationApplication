import React, { useEffect, useRef } from 'react';

export default function PageTextarea({ value = '', onChange, description }) {
  const textareaRef = useRef();
  useEffect(() => {
    textareaRef.current.focus();
  });

  return (
    <div className='PageTextarea'>
      <label className='PageTextarea__label'>
        <span className='PageTextarea__text'>{description}</span>
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className='PageTextarea__textarea'
        />
      </label>
    </div>
  );
}
