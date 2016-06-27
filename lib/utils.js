/**
 * Created by jacek on 26.06.16.
 */

const alphaOffset = 'A'.charCodeAt(0) - 10;

exports.pureNumbers = function ( value ) {

    return value
        .toString()
        .replace(/[^\d]/g,'')
        .split('')
        .map( x => parseInt(x) );
};

const alphaToNumber = function ( c ) {

    return c.charCodeAt(0) - alphaOffset;
};

exports.modLong = function m( val, mod ) {

    val = val.toString();

    if ( val.length > 6 ) {
        var a = parseInt(val.substr(0,6));
        var r = val.substr(6,val.length-1);
        var b = a % mod;
        return m(b.toString() + r, mod);
    }

    return parseInt( val ) % mod;
}

exports.alphaToNumber = alphaToNumber;

exports.alphaToNumbers = function( str ) {

    return str.toString().split('').map( alphaToNumber );
};

exports.multiplyByWeights = function( values, weights ) {
    
    return values.map( ( v, i) =>  v * weights[ i ] );
};


exports.length = function ( value, expectedLength ) {

    if ( value.length !== expectedLength ) {

        throw new Error(`Not required value length! Expected ${expectedLength} but ${value.length} given!`);
    }
}