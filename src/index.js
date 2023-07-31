module.exports = function toReadable (number) {
  const singleDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  function convertNum(num) {
    if (num < 10) {
      return singleDigits[num];
    } else if (num < 20) {
      return teens[num - 11];
    } else if (num % 10 === 0) {
      return tens[Math.floor(num / 10)];
    } else {
      const tenDigit = Math.floor(num / 10);
      const singleDigit = num % 10;
      return tens[tenDigit] + ' ' + singleDigits[singleDigit];
    }
  }

  if (number === 0) {
    return singleDigits[0];
  } else if (number === 10) {
    return 'ten';
  }
  else if (number < 100) {
    return convertNum(number);
  } else if (number < 1000) {
    const hundredDigit = Math.floor(number / 100);
    const remainingTwoDigits = number % 100; 
     const twoDigitNum = remainingTwoDigits === 10 ? 'ten' : convertNum(remainingTwoDigits); 
    return singleDigits[hundredDigit] + ' hundred' + (remainingTwoDigits !== 0 ? ' ' + twoDigitNum : ''); 
  } else {
    return 'Number out of range';
  }
}
