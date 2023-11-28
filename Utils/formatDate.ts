import React from 'react';

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];
function formatDate(date: Date | string) {
  const localeDate = new Date(date);
  const dateFormated = `${localeDate.getDate()} de ${
    months[localeDate.getMonth()]
  } de ${localeDate.getFullYear()}`;

  return dateFormated;
}

export default formatDate;
