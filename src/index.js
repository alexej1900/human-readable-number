module.exports = function toReadable(number) {
    let num = '';
    let arr9 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arr19 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arr0 = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number < 10) return arr9[number];
    else if (number % 10 == 0 && number < 100) return arr0[number / 10 - 1];
    else if (number < 20) return arr19[number - 11];
    else if (number < 100) {
        num = number.toString();
        return arr0[num.charAt(0) - 1] + ' ' + arr9[num.charAt(1)];
    } else if (number % 100 == 0) {
        return arr9[number / 100] + ' hundred';
    } else if (number < 1000) {
        num = number.toString();
        return arr9[num.charAt(0)] + ' hundred ' + toReadable(number % 100);
    }
}