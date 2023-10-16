// Função para calcular a diferença em dias entre duas datas
export const calculateDaysDifference = (date1: Date, date2: Date) => {
  const diffInTime = Math.abs(date2.getTime() - date1.getTime());
  const diffInDays = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));
  return diffInDays;
};