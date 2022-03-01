export const currencyFormatter = (currency) => {
  const value = Number(currency / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return value.split(',')[1] === '00' ? value.slice(0, -3) : value;
};

export default null;
