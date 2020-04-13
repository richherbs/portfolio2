/**
 * @var {defaultProbs} array An array containing the relative weights of the options to be output by weightedRand. This is
 * the default behaviour, and will cause weightedRand() to output a 0 or a 1, each with 50% chance.
 */
var defaultProbs = [
    2,
    2
];

/**
 * Function to generate a random number, weighted by an array of weights
 * 
 * @param probs Array   An indexed array of numeric values. These values define the relative probability that a number will be
 *                      returned. For example, if entry 0 in the array is 1 and entry 1 in the array is 0.5, the function
 *                      is twice as likely to return 1 as it is to return 0
 * @return Int  A number ranging from 0 to one less than the length of the array probs
 */
function weightedRand(probs = defaultProbs) {
    let total = 0;
    let i = 0;
    for (i = 0; i < probs.length; i++) {
        total += probs[i];
    }
    let randNo = total*Math.random();
    total = 0;
    for (i = 0; i < probs.length; i++) {
        total += probs[i];
        if (randNo < total){
            return i;
        }
    }
}

/**
 * Function to apply stying to a card based on the inputted number
 * 
 * @param cardId Tnt the number associated to the card which has been drawn
 */
function drawCard(cardId) {
    let cardOnPage = document.querySelector('.card');
    cardOnPage.classList.remove('cardIfZero');
    cardOnPage.classList.remove('cardIfOne');
    cardOnPage.classList.remove('cardIfTwo');
    if (cardId == 0) {
        cardOnPage.classList.add('cardIfZero');
    } else if (cardId == 1) {
        cardOnPage.classList.add('cardIfOne');
    } else {
        cardOnPage.classList.add('cardIfTwo');
    }
}