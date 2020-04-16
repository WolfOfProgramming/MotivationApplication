export const getHistoryEntriesArray = () => {
  return JSON.parse(localStorage.getItem('historyEntriesArray')) || [];
};

export const setHistoryEntriesArray = (array) => {
  localStorage.setItem('historyEntriesArray', JSON.stringify(array));
};

const TIME_FORMAT_OPTIONS = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export const dateTimeFormat = Intl.DateTimeFormat('en-US', TIME_FORMAT_OPTIONS);
