describe.only('mvIdentity', function() {

    var mvIdentity;

    var BASIC_USER;
    var ADMIN_USER;

    beforeEach(module('app'));

    beforeEach(function() {

        BASIC_USER = {roles: ['not admin']};
        ADMIN_USER = {roles: ['admin']};

    });

    describe('constructor', function() {

        describe('bootstrappedUserObject set', function () {
            beforeEach(module(function($provide) {
                $provide.value('mvUser', function() { return {}; });
                $provide.value('$window', {bootstrappedUserObject: BASIC_USER});
            }));

            it('should set the user to an existing user if bootstrappedUserObject is set', inject(function(mvIdentity) {
                expect(mvIdentity.currentUser).to.deep.equal(BASIC_USER);
            }));
        });

        describe('bootstrappedUserObject is NOT set', function () {
            beforeEach(module(function($provide) {
                $provide.value('mvUser', function() { return {}; });
                $provide.value('$window', {});
            }));

            it('should set the user to an existing user if bootstrappedUserObject is set', inject(function(mvIdentity) {
                expect(mvIdentity.currentUser).to.equal(undefined)
            }));
        });

    }); 

    describe('isAuthorized', function() {

        it('should return true when a user is an admin', inject(function(mvIdentity) {
            mvIdentity.currentUser = ADMIN_USER;
            var authorized = mvIdentity.isAuthorized('admin');
            expect(authorized).to.be.true 
        }));

        it('should return false when a user is NOT an admin', inject(function(mvIdentity) {
            mvIdentity.currentUser = BASIC_USER;
            var authorized = mvIdentity.isAuthorized('admin');
            expect(authorized).to.be.false 
        }));

    }); 

})

