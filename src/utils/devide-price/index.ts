export const dividePrice = (price: string): string => {
  const reversedPrice = price.split('').reverse();
  let result = '';
  for (let i = 0; i < reversedPrice.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      result += ' ';
    }
    result += reversedPrice[i];
  }
  return result.split('').reverse().join('');
};
