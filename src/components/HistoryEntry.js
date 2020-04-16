import React from 'react';
import QuestionsAndAnswersList from './QuestionsAndAnswersList';
import { dateTimeFormat } from './APIUtils';

export default function HistoryEntry({
  deleteHistoryEntry,
  historyEntryObject,
  sethistoryEntryObject,
}) {
  const { category, date, answersToQuestionsObject } = historyEntryObject;

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
          onClick={() => sethistoryEntryObject(null)}
        >
          Browse other entries
        </button>
        <button
          className='HistoryEntry__button'
          onClick={() => {
            deleteHistoryEntry(historyEntryObject);
          }}
        >
          Delete this entry
        </button>
      </div>
    </div>
  );
}
