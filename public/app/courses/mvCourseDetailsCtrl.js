angular.module('app').controller('mvCourseDetailsCtrl', function($scope, $routeParams, mvCourse) {

    $scope.course = mvCourse.get({_id:$routeParams.id});

    


})