

import ratios from './ratios.json';

export /**
 * Utility function to convert price from chf to eur
 *
 * @param {*} price
 * @returns
 */
const convertPrice = (price, category) => {
    console.log(price, category)
    price = parseFloat(price.toString().replace("€",'').replace('.-','').replace('-','').replace("chf",'').replace('CHF','').replace('EUR','').replace('eur','') || 0)
    return (Math.round(price*100*(ratios[category]|| 0.542107325))/100).toFixed(2);

}