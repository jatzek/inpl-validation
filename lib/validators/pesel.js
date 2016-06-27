/**
 * Created by jacek on 26.06.16.
 */

const utils = require('../utils');

module.exports = function ( pesel ) {

    const weights = [ 1, 3, 7, 9, 1, 3, 7, 9, 1, 3 ];
    const numbers =  utils.pureNumbers( pesel );

    utils.length( numbers, 11 );
    const checkSum = numbers.splice(10,1)[0];
    const sum = utils.multiplyByWeights( numbers, weights ).reduce( (c,p) => c+p);

    return ( (10 - (sum % 10)) % 10 === checkSum );
};