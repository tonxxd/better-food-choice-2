

export /**
 * Utility function to convert price from chf to eur
 *
 * @param {*} price
 * @returns
 */
const convertPrice = (price) => {
    const conversion_EUR_in_CHF = 1.09;
    const conversion_GDP_CH = 59800.00;
    const conversion_GDP_DE = 46200.00;
    const conversion_factor = (conversion_EUR_in_CHF * conversion_GDP_CH / conversion_GDP_DE).toFixed(3);

    return ((price/conversion_factor*20).toFixed(0)/20).toFixed(2);

}