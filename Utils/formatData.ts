const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];
export function FormatDate(date: number | undefined) {
  if (!date) return 'Data não inserida corretamente.';

  let newDate = new Date(Number(date));
  return `${newDate.getDate()} de ${
    months[newDate.getMonth()]
  } de ${newDate.getFullYear()}`;
}
