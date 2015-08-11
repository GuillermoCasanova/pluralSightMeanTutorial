
angular.module('app')
    .controller('mvMainCtrl', function($scope, mvCachedCourseList) {

        // Queries data from the mvCachedCourses service which has a cached 
        // version of the data from mvCourse 
        $scope.courses = mvCachedCourseList.query(); 

    });