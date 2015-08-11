
angular.module('app')
    .controller('mvMainCtrl', function($scope, mvCachedCourses) {

        // Queries data from the mvCachedCourses service which has a cached 
        // version of the data from mvCourse 
        $scope.courses = mvCachedCourses.query(); 

    });