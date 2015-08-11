angular.module('app').factory('mvCourse', function($resource) {


    var CourseResource = $resource('/api/courses/:_id', { _id : '@id'}, {

        // Adds update method since resource doesn't have it's own put method
        update: {method: 'PUT', isArray: false}

    });

    // Returns data from the CourseResouce variable
    return CourseResource; 

})