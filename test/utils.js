/**
 * Created by jacek on 26.06.16.
 */
require('should');
const pureNumbers = require('../lib/utils').pureNumbers;

describe('Pure numbers', function () {
    
    it('123 should be [1,2,3]', function() {
        
        pureNumbers('123').should.eql([1,2,3]);
    })
    it('11-11 should be [1,1,1,1]', function ( ) {

        pureNumbers('11-11').should.eql([1,1,1,1]);
    });
});