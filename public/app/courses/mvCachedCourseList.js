angular.module('app').factory('mvCachedCourseList', function(mvCourse) {
        

        // Variable to store courseList
        var courseList; 

        return {

            query: function() {

                // Checks if courseList has been populated, it not, it populates it
                if(!courseList) {

                    courseList = mvCourse.query(); 
                }

                // Returns the populated courseList 
                return courseList; 

            }

        }

})