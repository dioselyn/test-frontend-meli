const formatCurrency = (number) => {
  const formatNumber = new Intl.NumberFormat('es-ES', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    style: 'decimal',
    useGrouping: true,
  });

  const numberFormat = formatNumber.format(number);
  return numberFormat;
};

export { formatCurrency };
