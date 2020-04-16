import React from 'react';
import { Link } from 'react-router-dom';

export default function SelectSection() {
  return (
    <div className='SelectSection'>
      <h2 className='SelectSection__title'>About Project</h2>
      <p className='SelectSection__text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        accumsan est orci, vitae suscipit urna ultricies a. Praesent laoreet vel
        eros quis sodales. Cras vel volutpat mauris. Fusce at lectus tortor.
        Mauris laoreet pharetra massa, vel imperdiet diam interdum eget. In a
        suscipit nisl, quis vulputate neque. Cras dui nisi.
      </p>
      <div className='SelectSection__container'>
        <Link
          className='SelectSection__link SelectSection__link--left'
          to='/history'
        >
          <span>History</span>
        </Link>
        <Link
          className='SelectSection__link SelectSection__link--right'
          to='/improve-today'
        >
          <span>Improve today</span>
        </Link>
      </div>
    </div>
  );
}
