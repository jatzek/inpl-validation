/**
 * Created by jacek on 26.06.16.
 */

const idPl = require('./validators/id_pl');
const nip = require('./validators/nip');
const pesel = require('./validators/pesel');
const regon = require('./validators/regon');
const iban = require('./validators/iban');

const validators = {

    'idPl' : idPl,
    'nip' : nip,
    'pesel' : pesel,
    'regon' : regon,
    'iban' : iban
};

const validator = function( validator, value ) {

    return validators[ validator ]( value );
};

validator.availableValidators = validators;

module.exports = validator;