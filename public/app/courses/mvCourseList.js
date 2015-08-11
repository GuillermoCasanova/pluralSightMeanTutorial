angular.module('app').controller('mvCourseListCtrl', function($scope, mvCachedCourses) {

    // Queries data from the mvCachedCourses service which has a cached 
    // version of the data from mvCourse 
    $scope.courses = mvCachedCourses.query(); 


    // Creates options for select box to sort list by  
    // Based of the properties of the courses object 
    $scope.sortOptions = [

        {value: "name", text: "Sort by title"},
        {value: "published", text: "Sort by published date"}
    ];


    // Sets an initial sort order by default to be by title
    $scope.sortOrder = $scope.sortOptions[0].value; 
    
})