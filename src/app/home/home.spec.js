/* jshint ignore: start */

/**
 * Tests sit right alongside the file they are testing, which is more intuitive
 * and portable than separating `src` and `test` directories. Additionally, the
 * build process will exclude all `.spec.js` files from the build
 * automatically.
 */
describe('home module', function () {
    var homeController;

    beforeEach(module('ngDevstack'));
    beforeEach(module('ngDevstack.home'));
    
    beforeEach(inject(function ($controller) {
        homeController = $controller('HomeCtrl');
    }));

    it('should toggle "isActive" attribute with toggleActive() method', function () {
        homeController.isActive = false;

        homeController.toggleActive();
        expect(homeController.isActive).toEqual(true);

        homeController.toggleActive();
        expect(homeController.isActive).toEqual(false);
    });

});

/* jshint ignore: end */
