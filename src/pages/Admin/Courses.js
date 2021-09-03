import React, { useEffect, useState } from 'react';
import { getCoursesApi } from 'api/courses';

const Courses = () => {
   const [courses, setCourses] = useState([]);
   const [reloadCourses, setReloadCourses] = useState(false);

   useEffect(() => {
      getCoursesApi().then((response) => {
         setCourses(response.courses);
      });

      setReloadCourses(false);
   }, [reloadCourses]);

   return (
      <div className='courses'>
         <h1>Administrar cursos</h1>
      </div>
   );
};

export default Courses;
