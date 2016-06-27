/**
 * Created by jacek on 26.06.16.
 */


const utils = require('../utils');

function regonCheck( regon, weights, checkSumPos ) {
    
    const checkSum = regon.splice( checkSumPos, 1 )[0];
    const sum = utils.multiplyByWeights( regon, weights ).reduce( (c,p) => c + p );

    return sum % 11 === checkSum;
}

function regon9( regon ) {

    const weights = [ 8, 9, 2, 3, 4, 5, 6, 7 ];
    return regonCheck( regon, weights, 8 );
}

function regon14( regon ) {

    const weights = [ 2, 4, 8, 5, 0, 9, 7, 3, 6, 1, 2, 4, 8 ];
    return regonCheck( regon, weights, 13 );
}

module.exports = function ( regon ) {

    const numbers = utils.pureNumbers(regon);

    return (numbers.length === 9 && regon9( numbers )) || 
        (numbers.length === 14 && regon9( numbers.slice(0,9)) && regon14( numbers ));

};