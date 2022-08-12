/**
 * @param {Number} number
 */
module.exports = function toReadable (number) {
    const simpleNumbersStr = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ];
    const twoDigitNumbersStr = [
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ];
    const maxNumSize = 3;

    if(number < 20){
        return simpleNumbersStr[number];
    }
    else {
        if(number < 100){
            return twoDigitNumToString(number);
        }
        else{
            const firstDigitIndex = Math.floor(number / 100);
            const secondValue = number % 100;
            let secondValueStr = ' ';

            if(secondValue > 0 && secondValue < 20){
                secondValueStr += simpleNumbersStr[secondValue];
            }
            else if(secondValue != 0){
                secondValueStr += twoDigitNumToString(secondValue);
            }

            return `${simpleNumbersStr[firstDigitIndex]} hundred${secondValueStr}`.trimEnd();
        }
    }

    function twoDigitNumToString(num){
        const index = Math.floor(num / 10) - 2;
        const lastDigit = num % 10;
        return lastDigit === 0 ? twoDigitNumbersStr[index] : `${twoDigitNumbersStr[index]} ${simpleNumbersStr[lastDigit]}`;
    }
}
