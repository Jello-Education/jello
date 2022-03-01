export const capitalize = (string) => {
  if (typeof string !== 'string') return '';
  return `${string.charAt(0).toUpperCase()}${string.slice(1).toLowerCase()}`;
};

export const getInitials = (name) => {
  const initials = name.match(/\b\w/g) || [];
  return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
};

export const getRandomString = () =>
  (Math.random() + 1).toString(36).substring(7);

export const truncate = (string, length) => {
  if (typeof string !== 'string') return '';
  return `${string.substring(0, length)}...`;
};

export const replaceAll = (string, wordsObject) => {
  const re = new RegExp(Object.keys(wordsObject).join('|'), 'gi');
  return string.replace(re, (matched) => wordsObject[matched.toLowerCase()]);
};

export const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/\//g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
