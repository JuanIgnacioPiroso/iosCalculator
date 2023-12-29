import {useState} from 'react';

export const useCalculator = () => {
  const [number, setNumber] = useState('0');

  const buildNumber = (numberString: string) => {
    // ********** Chequear que no se pueda poner 2 veces la coma ********** //
    if (number.includes('.') && numberString === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      // ********** Punto decimal ********** //
      if (numberString === '.') {
        return setNumber(number + numberString);
      }

      // ********** Chequear si es otro cero y no hay punto ********** //
      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }

      // ********** Chequear si es diferente de cero, no hay punto, y es el primer numero ********** //
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }

      // ********** Evitar 000000000.000 ********** //
      if (numberString === '0' && !number.includes('0')) return;

      return setNumber(number + numberString);
    }

    setNumber(number + numberString);
  };

  return {
    // Properties
    number,

    // Methods
    buildNumber,
  };
};
