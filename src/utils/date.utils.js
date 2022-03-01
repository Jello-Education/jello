export const addDays = (dateToAdd, days) => {
  const date = new Date(dateToAdd);
  date.setDate(date.getDate() + days);
  return date;
};

export const dayFormatter = (date) => `0${date.getDate()}`.slice(-2);

export const dayMonthFormatter = (date) => {
  const day = date.getDate();
  const monthIndex = date.getMonth();
  return `${`0${day}`.slice(-2)}/${`0${monthIndex + 1}`.slice(-2)}`;
};

export const monthYearFormatter = (date) => {
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  return `${`0${monthIndex + 1}`.slice(-2)}/${`${year}`.slice(-2)}`;
};

export const dateFormatter = (dateToFormat) => {
  const date = new Date(dateToFormat);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  return `${`0${day}`.slice(-2)}/${`0${monthIndex + 1}`.slice(
    -2
  )}/${`${year}`.slice(-2)}`;
};

export const isToday = (date) => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

export const isYesterday = (date) => {
  const today = new Date();
  return (
    today.getDate() - date.getDate() === 1 &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

export const dateTimeFormatter = (date) => {
  const current = new Date(date);
  const isDateToday = isToday(current);
  const isDateYesterday = isYesterday(current);
  const dateFormatted = dateFormatter(current);

  let dateComposed = dateFormatted;
  if (isDateToday) dateComposed = 'Hoje';
  if (isDateYesterday) dateComposed = 'Ontem';

  const hours = current.getHours();
  const minutes = current.getMinutes();
  const time = `${`0${hours}`.slice(-2)}:${`0${minutes}`.slice(-2)}`;
  return `${dateComposed} às ${time}`;
};
