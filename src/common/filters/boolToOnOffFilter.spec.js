/* jshint ignore: start */

describe('ngDevstack', function () {
    describe('boolToOnOffFilter', function () {
        var boolToOnOff;

        beforeEach(module('ngDevstack'));

        beforeEach(inject(function ($filter) {
            boolToOnOff = $filter('boolToOnOff');
        }));

        it('should display "on" when thruthy value passed', function () {
            var value = true,
                expected = 'on',
                actual;

            actual = boolToOnOff(value);
            expect(actual).toEqual(expected);
        });

        it('should display "off" when falsy value passed', function () {
            var value = false,
                expected = 'off',
                actual;

            actual = boolToOnOff(value);
            expect(actual).toEqual(expected);
        });
    });
});

/* jshint ignore: end */