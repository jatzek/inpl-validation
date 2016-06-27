/**
 * Created by jacek on 26.06.16.
 */

const utils = require('../utils');

module.exports = function( idno ) {

    const weights = [ 7, 3, 1, 7, 3, 1, 7, 3 ];
    const pattern = /^([A-Z]{3})(\d)(\d{5})$/;

    const matches = pattern.exec( idno );

    if ( matches === null ) {

        return false;
    }

    const checkSum = parseInt( matches[2] );

    const alphaValues = utils.alphaToNumbers( matches[1] );
    const digitValues = utils.pureNumbers( matches[3] );
    const values = alphaValues.concat(digitValues);

    const sum = utils.multiplyByWeights( values, weights ).reduce( ( c, p )=> c + p );

    return ( sum % 10 === checkSum );
};