import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import QuestionsAndAnswersList from './QuestionsAndAnswersList';

export default function Overview({ answersToQuestionsObject, chosenCategory }) {
  const [isAddedToHistory, setIsAddedToHistory] = useState(false);

  const handleClick = () => {
    if (!isAddedToHistory) {
      const history = JSON.parse(localStorage.getItem('history')) || [];
      localStorage.setItem(
        'history',
        JSON.stringify([
          ...history,
          {
            date: Date.now(),
            answersToQuestionsObject,
            category: chosenCategory,
          },
        ])
      );
      setIsAddedToHistory(true);
    }
  };

  return (
    <div className='Overview'>
      <h2 className='Overview__title'>Overview</h2>
      <QuestionsAndAnswersList
        answersToQuestionsObject={answersToQuestionsObject}
      />
      <div className='Overview__container'>
        <button
          className={`Overview__button ${
            isAddedToHistory ? 'Overview__button--active' : ''
          }`}
          onClick={handleClick}
        >
          <span>Add to history</span>
        </button>
        <Link className='Overview__button Overview__button--style-link' to='/'>
          <span>Return to home page</span>
        </Link>
      </div>
    </div>
  );
}
