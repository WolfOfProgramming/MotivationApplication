import React, { useEffect, useState } from 'react';
import HistoryEntry from './HistoryEntry';

const TIME_FORMAT_OPTIONS = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export const dateTimeFormat = Intl.DateTimeFormat('en-US', TIME_FORMAT_OPTIONS);

export default function History() {
  const [list, setList] = useState([]);
  const [chosenHistoryItem, setChosenHistoryItem] = useState(null);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('history')) || [];
    const initialList = history.map((historyItem, index) => {
      return { historyItem, id: index };
    });
    setList(initialList);
  }, []);

  const handleClick = (historyItem) => {
    setChosenHistoryItem(historyItem);
  };

  const deleteEntry = (entryObject) => {
    const newList = JSON.parse(localStorage.getItem('history')) || [];
    const entryToDelete = newList.findIndex((el) => el === entryObject);
    newList.splice(entryToDelete, 1);
    localStorage.setItem('history', JSON.stringify([...newList]));

    setList((prevState) => {
      const newList = [...prevState];
      newList.splice(entryToDelete, 1);
      return newList;
    });
  };

  return (
    <div className='History'>
      {chosenHistoryItem ? (
        <HistoryEntry
          chosenHistoryItem={chosenHistoryItem}
          setChosenHistoryItem={setChosenHistoryItem}
          deleteEntry={deleteEntry}
        />
      ) : (
        <>
          <h2 className='History__title'>History</h2>
          {list.length > 0 ? (
            <ul className='History__list'>
              {list.map(({ historyItem, id }) => {
                return (
                  <li
                    className='History__item'
                    key={id}
                    onClick={() => handleClick(historyItem)}
                  >
                    <h3 className='History__subtitle'>
                      {historyItem.category}
                    </h3>
                    <time className='History__time'>
                      {dateTimeFormat.format(historyItem.date)}
                    </time>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className='History__paragraph'>You have no history entries.</p>
          )}
        </>
      )}
    </div>
  );
}
