import React from 'react';

export default function NavigationButtons({ onBackClick, onNextClick }) {
  return (
    <div className='NavigationButtons'>
      <button
        type='button'
        onClick={onBackClick}
        className='NavigationButtons__button'
      >
        Back
      </button>
      <button
        type='button'
        onClick={onNextClick}
        className='NavigationButtons__button'
      >
        Next
      </button>
    </div>
  );
}
