/*var assert = require('assert'),
    config = require('./../lib/config');
*/


    var expect = require('chai').expect;
    var config = require('./../lib/config');


    var units = {
        type: 'si',
        tmp: '˚C',
        speed: 'mps'
    };

    var ip = '';


    describe('Config', function () {

        it('has 3 props', function () {
            var Config = new config(units, ip);
            expect(Config.args).to.exist;
            expect(Config.ip).to.exist;
            expect(Config.units).to.exist;
        });

        it('after construction, 2 props are populated', function () {
            var Config = new config(units, ip);
            expect(Config.args).to.not.equal(null);
            expect(Config.units).to.not.equal(null);

        });

        it('has correct key types',function(){

        });
    });













/*describe('Config', function () {
    it('has 3 props')

    it('after construction, 2 props are populated')

    it('has correct key types')
});*/
