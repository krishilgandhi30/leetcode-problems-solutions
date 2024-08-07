/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {

    if (num === 0) return 'Zero';

    const belowTwenty = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const thousands = ['', 'Thousand', 'Million', 'Billion'];
    function convertHundreds(num) {
        if (num === 0) return '';
        let result = '';
        if (num >= 100) {
            result += belowTwenty[Math.floor(num / 100)] + ' Hundred ';
            num %= 100;
        }
        if (num >= 20) {
            result += tens[Math.floor(num / 10)] + ' ';
            num %= 10;
        }
        if (num > 0) {
            result += belowTwenty[num] + ' ';
        }
        return result.trim();
    }
    let result = '';
    let i = 0;
    while (num > 0) {
        let chunk = num % 1000;
        console.log("Chunk:::::::::", chunk)
        if (chunk > 0) {
            result = convertHundreds(chunk) + ' ' + thousands[i] + ' ' + result;
        }
        num = Math.floor(num / 1000);
        i++;
    }

    return result.trim();
};

