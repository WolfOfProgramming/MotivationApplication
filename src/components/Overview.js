import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getHistoryEntriesArray, setHistoryEntriesArray } from './APIUtils';
import QuestionsAndAnswersList from './QuestionsAndAnswersList';

export default function Overview({ answersToQuestionsObject, category }) {
  const [isAddedToHistory, setIsAddedToHistory] = useState(false);

  const handleClick = () => {
    if (!isAddedToHistory) {
      const historyEntriesArray = getHistoryEntriesArray();
      const newhistoryEntriesArray = [
        ...historyEntriesArray,
        {
          date: Date.now(),
          answersToQuestionsObject,
          category,
        },
      ];
      setHistoryEntriesArray(newhistoryEntriesArray);
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
