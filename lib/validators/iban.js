/**
 * Created by jacek on 26.06.16.
 */

const utils = require('../utils');

module.exports = function ( iban ) {

    const prefix = /^[A-Z]{2}.+/.test( iban ) ? '' : 'PL';
    const pure = prefix + iban.replace(/[^A-Z0-9]/g,'');
    const numbers = pure.split('');
    const countryCode = numbers.splice( 0, 4 );

    countryCode[0] = utils.alphaToNumber(countryCode[0]);
    countryCode[1] = utils.alphaToNumber(countryCode[1]);

    const newOrder = numbers.concat( countryCode );

    return 1 === utils.modLong( newOrder.join('') ,97);
}