import React from 'react';

import { getCourseDataUdemyApi } from 'api/courses';

const CoursesList = ({ courses, setReloadCourses }) => {
   if (courses.length > 0) {
      courses.forEach((course) => {
         getCourseDataUdemyApi(course.idCourse).then((response) => {
            console.log(response);
         });
      });
   }

   return (
      <div>
         <h1>Courses List...</h1>
      </div>
   );
};

export default CoursesList;
