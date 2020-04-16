import React from 'react';

export default function CategorySelection({ categories, onClick }) {
  return (
    <div className='CategorySelection'>
      <p className='CategorySelection__paragraph'>
        Select a category where you want to improve on.
      </p>
      <ul className='CategorySelection__list'>
        {categories.map((category, index) => (
          <li key={index} className='CategorySelection__item'>
            <button
              className='CategorySelection__button'
              onClick={() => onClick(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
