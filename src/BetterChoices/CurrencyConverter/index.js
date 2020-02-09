

import ratios from './ratios.json';

export /**
 * Utility function to convert price from chf to eur
 *
 * @param {*} price
 * @returns
 */
const convertPrice = (price, category) => {

    return Math.round(price*100*(ratios[category]|| 0.542107325))/100;

}