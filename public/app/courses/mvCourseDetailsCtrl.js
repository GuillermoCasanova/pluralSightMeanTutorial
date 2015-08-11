angular.module('app').controller('mvCourseDetailsCtrl', function($scope, $routeParams, mvCachedCourses) {


    // Requests the cachedCourses data 
    // Then goes through the data array to find the request course to add to the $scope 
    mvCachedCourses.query().$promise.then(function(collection) {

        collection.forEach(function(course) {

            if(course._id === $routeParams.id) {

                // Sets course to the $scope
                $scope.course = course; 
            }
        })

    });

    


})