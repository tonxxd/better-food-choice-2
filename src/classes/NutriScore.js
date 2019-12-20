import $ from 'jquery'


/**
 * Utility function to convert array of ranges into class 
 *
 * @param {*} value
 * @param {*} intervals
 * @param {*} defaultClass
 * @returns
 */
const fromClassRange = (value, intervals, defaultClass) => {
    for (let i = 0; i < intervals.length - 1; i++)
        if (intervals[i] && value <= intervals[i])
            return i

    //default class
    return defaultClass || 10
}

export /**
 * Calculate score
 *
 * @param {*} productCategory
 * @param {*} {
 *     energy,
 *     fibers,
 *     protein,
 *     fruitvegetables,
 *     sodium,
 *     acids,
 *     sugar,
 *     natrium
 * }
 * @returns
 */
const getScoreLocal = (productCategory, {
    energy,
    fibers,
    protein,
    fruitvegetables,
    sodium,
    acids,
    sugar,
    natrium
}) => {

    // Code for calculation of NutriScore based
    // on the recognized values on the website.

    let scores = {
        energy: 0,
        acids: 0,
        sugar: 0,
        sodium: 0,

        fruitvegetables: 0,
        fibers: 0,
        protein:0

    }

    if (productCategory === 'food') {

        //energy
        scores.energy = fromClassRange(energy.toNumber(), [335, 670, 1005, 1340, 1675, 2010, 2345, 2680, 3015, 3350]);

        //acids
        scores.acids = fromClassRange(acids.toNumber(), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

        //sugar
        scores.sugar = fromClassRange(sugar.toNumber(), [4.5, 9, 13.5, 18, 22.5, 27, 31, 36, 40, 45]);

        //sodium
        scores.sodium = fromClassRange(sodium.toNumber(), [0.225, 0.45, 0.675, 0.9, 1.125, 1.35, 1.575, 1.8, 2.025, 2.25]);

        // fruitvegetables
        scores.fruitvegetables = fromClassRange(fruitvegetables.toNumber(), [40, 60, 80], 5);

        // fibers
        scores.fruitvegetables = fromClassRange(fibers.toNumber(), [0.9, 1.9, 2.8, 3.7, 4.7], 5);

        //proteins
        scores.protein = fromClassRange(protein.toNumber(), [1.6, 3.2, 4.8, 6.4, 8.0], 5);



    } else {

        scores.energy = fromClassRange(acids, [0, 30, 60, 90, 120, 150, 180, 210, 240, 270]);

        scores.acids = 0;

        scores.sugar = fromClassRange(acids, [0, 1.5, 3, 4.5, 6, 7.5, 9, 10.5, 12, 13.5]);

        scores.sodium = 0;

        // false values to skip classes as in the original file 
        scores.fruitvegetables = fromClassRange(fruitvegetables, [40, false, 60, false, 80]);

        scores.fibers = 0;

        scores.protein = 0;

    }

    const badIngredientScore = scores.energy + scores.acids + scores.sodium + scores.sugar


    // Calculating Nutriscore.
    const goodIngredientScore = scores.fruitvegetables + scores.fibers + scores.protein;

    let nutriScoreNumber, nutriScore;

    if (badIngredientScore <= 11) {
        nutriScoreNumber = badIngredientScore - goodIngredientScore - scores.fruitvegetables - scores.fibers;
    } else {
        if (scores.fruitvegetables >= 5) {
            nutriScoreNumber = badIngredientScore - goodIngredientScore - scores.fruitvegetables - scores.fibers;
        } else {
            nutriScoreNumber = badIngredientScore - scores.fruitvegetables - scores.fibers;
        }
    }

    if (productCategory === 'food') {
        if (nutriScoreNumber <= -1) {
            nutriScore = "A";
        } else if (nutriScoreNumber <= 2) {
            nutriScore = "B";
        } else if (nutriScoreNumber <= 10) {
            nutriScore = "C";
        } else if (nutriScoreNumber <= 18) {
            nutriScore = "D";
        } else if (nutriScoreNumber <= 40) {
            nutriScore = "E";
        }
    } else {
        if (productCategory === 'water') {
            nutriScore = "A";
        } else if (nutriScoreNumber <= 1) {
            nutriScore = "B";
        } else if (nutriScoreNumber <= 5) {
            nutriScore = "C";
        } else if (nutriScoreNumber <= 9) {
            nutriScore = "D";
        } else if (nutriScoreNumber <= 30) {
            nutriScore = "E";
        }
    }


    return nutriScore;

}


export /**
 * display score 
 * 
 * @param {*} score
 * @param {*} group
 * @param {*} parent
 * @param {string} [size='big','small']
 * @returns
 */
const displayScore = (score, group, parent, size='big') => {

    const images = {
        A: chrome.runtime.getURL("nsA.png"),
        B: chrome.runtime.getURL("nsB.png"),
        C: chrome.runtime.getURL("nsC.png"),
        D: chrome.runtime.getURL("nsD.png"),
        E: chrome.runtime.getURL("nsE.png"),
        V: chrome.runtime.getURL("nsV.png"),
    }

    // if group B do not render
    if(group === 'B' && ['C','D','E'].indexOf(score) >= 0)
        return;


    // else render badge
    const img = $('<img />')
        .attr("src", images[score])
        .css({
            height: size === 'big' ? 90 : 40,
            zIndex: 10,
            display: 'block'
        })
        .appendTo(parent)


}