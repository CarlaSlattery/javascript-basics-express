/* eslint-disable spaced-comment */
const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const newArray = [...array, element];
  return newArray;
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  const numbersArr = number => {
    return number.toString();
  };
  return numbers.map(numbersArr);
};

const uppercaseWordsInArray = strings => {
  const makeUpper = string => {
    return string.toUpperCase();
  };
  return strings.map(makeUpper);
};

const reverseWordsInArray = strings => {
  const reverseArr = string => {
    return string
      .split('')
      .reverse()
      .join('');
  };
  return strings.map(reverseArr);
};

const onlyEven = numbers => {
  const myArray = num => {
    return num % 2 === 0;
  };
  return numbers.filter(myArray);
};

const removeNthElement2 = (index, array) => {
  const newArray = [...array];
  newArray.splice(index, 1);
  return newArray;
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(char => /^[aeiou]/i.test(char));
};

const removeSpaces = string => {
  return string.replace(/ /g, '');
};

const sumNumbers = numbers => {
  const sum = numbers.reduce((accum, value) => {
    return accum + value;
  }, 0);
  return sum;
};

const sortByLastLetter = strings => {
  return strings.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
