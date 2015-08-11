angular.module('app').controller('mvCourseListCtrl', function($scope, mvCourse) {

    // Queries the mvCourse resource from the mvCourse service to get list of courses 
    $scope.courses = mvCourse.query(); 
    
})