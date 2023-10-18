module.exports = function toReadable (number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number >= 0 && number <= 9) {
        return units[number];
    } else if (number === 10) {
        return 'ten';
    } else if (number >= 11 && number <= 99) {
        if (number >= 11 && number <= 19) {
            return teens[number - 11];
        } else {
            const tensDigit = Math.floor(number / 10);
            const unitsDigit = number % 10;
            return tens[tensDigit - 1] + (unitsDigit !== 0 ? ' ' + units[unitsDigit] : '');
        }
    } else if (number >= 100) {
        const hundredsDigit = Math.floor(number / 100);
        const remainder = number % 100;
        if (remainder === 0) {
            return units[hundredsDigit] + ' hundred';
        } else {
            return units[hundredsDigit] + ' hundred ' + toReadable(remainder);
        }
    }
}
