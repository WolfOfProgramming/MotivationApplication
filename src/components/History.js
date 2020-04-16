import React, { useEffect, useState } from 'react';
import HistoryEntry from './HistoryEntry';
import { getHistoryEntriesArray, setHistoryEntriesArray } from './APIUtils';
import { dateTimeFormat } from './APIUtils';

export default function History() {
  const [historyList, setHistoryList] = useState([]);
  const [historyEntryObject, setHistoryEntryObject] = useState(null);

  useEffect(() => {
    const historyEntriesArray = getHistoryEntriesArray();
    const initialHistoryList = historyEntriesArray.map(
      (historyEntryObject, index) => ({
        historyEntryObject,
        id: index,
      })
    );
    setHistoryList(initialHistoryList);
  }, []);

  const handleClick = (historyEntryObject) => {
    setHistoryEntryObject(historyEntryObject);
  };

  const deleteHistoryEntry = (historyEntryObjectToDelete) => {
    const historyEntryIndex = historyList.findIndex(
      ({ historyEntryObject }) =>
        historyEntryObject === historyEntryObjectToDelete
    );
    const historyEntriesArray = getHistoryEntriesArray();
    const newHistoryEntriesArray = [
      ...historyEntriesArray.slice(0, historyEntryIndex),
      ...historyEntriesArray.slice(historyEntryIndex + 1),
    ];
    setHistoryEntriesArray(newHistoryEntriesArray);

    setHistoryList((prevState) => {
      return prevState.filter(
        ({ historyEntryObject }) =>
          historyEntryObject !== historyEntryObjectToDelete
      );
    });

    setHistoryEntryObject(null);
  };

  return (
    <div className='History'>
      {historyEntryObject ? (
        <HistoryEntry
          historyEntryObject={historyEntryObject}
          setHistoryEntryObject={setHistoryEntryObject}
          deleteHistoryEntry={deleteHistoryEntry}
        />
      ) : (
        <HistoryEntrieshistoryList
          onClick={handleClick}
          historyList={historyList}
        />
      )}
    </div>
  );
}

function HistoryEntrieshistoryList({ historyList, onClick }) {
  const hashistoryListItems = historyList.length > 0;

  if (!hashistoryListItems) {
    return <p className='History__paragraph'>You have no history entries.</p>;
  }

  return (
    <ul className='History__historyList'>
      {historyList.map(({ historyEntryObject, id }) => (
        <li
          className='History__item'
          key={id}
          onClick={() => onClick(historyEntryObject)}
        >
          <h3 className='History__subtitle'>{historyEntryObject.category}</h3>
          <time className='History__time'>
            {dateTimeFormat.format(historyEntryObject.date)}
          </time>
        </li>
      ))}
    </ul>
  );
}
