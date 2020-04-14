import React from 'react';
import QuestionsAndAnswersList from './QuestionsAndAnswersList';
import { dateTimeFormat } from './History';

export default function HistoryEntry({
  deleteEntry,
  chosenHistoryItem,
  setChosenHistoryItem,
}) {
  const { category, date, answersToQuestionsObject } = chosenHistoryItem;

  return (
    <div className='HistoryEntry'>
      <h2 className='HistoryEntry__title'>History Entry</h2>
      <p className='HistoryEntry__text'>
        {category}: {dateTimeFormat.format(date)}
      </p>
      <QuestionsAndAnswersList
        answersToQuestionsObject={answersToQuestionsObject}
      />
      <div className='HistoryEntry__container'>
        <button
          className='HistoryEntry__button'
          onClick={() => setChosenHistoryItem(null)}
        >
          Browse other entries
        </button>
        <button
          className='HistoryEntry__button'
          onClick={() => {
            setChosenHistoryItem(null);
            deleteEntry(chosenHistoryItem);
          }}
        >
          Delete this entry
        </button>
      </div>
    </div>
  );
}
