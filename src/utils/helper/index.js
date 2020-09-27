import React from 'react';
import { Box } from '@material-ui/core';

export const capitalize = (str) => {
  const newStr = str.toLowerCase();
  return newStr.charAt(0).toUpperCase() + newStr.slice(1);
};

export const removeNullProps = (obj) => {
  for (let prop in obj) {
    if (!obj[prop]) {
      delete obj[prop];
    }
  }
  return obj;
};

export const wait = (time) => new Promise((res) => setTimeout(res, time));

export const shortenString = (str, len = 45) => {
  if (str.length > len) {
    return str.slice(0, len - 1) + '...';
  }
  return str;
};

export const parseErrors = (errors) => (
  <Box>
    Os seguintes erros foram encontrados:{' '}
    {Object.entries(errors).map((error) => (
      <li key={error[1].msg}>{error[1].msg}</li>
    ))}
  </Box>
);

export const dateFormat = (date, size) => {
  const options = {};
  switch (size) {
    case 'year':
      options.year = 'numeric';
      break;

    case 'month-year':
      options.year = 'numeric';
      options.month = 'long';
      break;

    case 'day-month-year':
      options.year = 'numeric';
      options.month = 'long';
      options.day = 'numeric';
      break;

    default:
      break;
  }
  return date.toLocaleDateString('pt-br', options);
};
