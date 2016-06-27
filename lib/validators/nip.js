/**
 * Created by jacek on 26.06.16.
 */

const utils = require('../utils');

module.exports = function valid( nip ) {

    const numbers = utils.pureNumbers( nip );

    utils.length( numbers, 10 );

    const weights = [6, 5, 7, 2, 3, 4, 5, 6, 7];
    const checkSum = numbers.splice(9,1)[0];
    const sum = utils.multiplyByWeights( numbers, weights ).reduce( (c,p) => c+p );

    return ( sum % 11 === checkSum );
};