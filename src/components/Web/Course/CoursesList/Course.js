import React, { useEffect, useState } from 'react';
import { notification } from 'antd';

import { getCourseDataUdemyApi } from 'api/courses';

export const Course = ({ course }) => {
   const [courseInfo, setCourseInfo] = useState({});

   useEffect(() => {
      getCourseDataUdemyApi(course.idCourse)
         .then((response) => {
            if (response?.code !== 200) {
               notification['warning']({
                  message: response.msg,
               });
            } else {
               setCourseInfo(response.data);
            }
         })
         .catch(() => {
            notification['error']({
               message: 'Error del servidor',
            });
         });
   }, [course]);

   return (
      <div>
         <h1>{courseInfo.title}</h1>
      </div>
   );
};
