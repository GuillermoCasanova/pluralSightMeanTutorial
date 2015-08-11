angular.module('app').controller('mvCourseListCtrl', function($scope, mvCourse) {

    // Queries the mvCourse resource from the mvCourse service to get list of courses 
    $scope.courses = mvCourse.query(); 


    // Creates options for select box to sort list by  
    // Based of the properties of the courses object 
    $scope.sortOptions = [

        {value: "name", text: "Sort by title"},
        {value: "published", text: "Sort by published date"}
    ];


    // Sets an initial sort order by default to be by title
    $scope.sortOrder = $scope.sortOptions[0].value; 
    
})