import React, { useEffect, useState } from 'react';
import { Row, Col, Spin, notification } from 'antd';
import { Helmet } from 'react-helmet';

import PresentationCourses from 'components/Web/Course/PresentationCourses';
import CoursesList from 'components/Web/Course/CoursesList';
import { getCoursesApi } from 'api/courses';

export const Courses = () => {
   const [courses, setCourses] = useState(null);

   useEffect(() => {
      getCoursesApi()
         .then((response) => {
            if (response?.code !== 200) {
               notification['warning']({
                  message: response.msg,
               });
            } else {
               setCourses(response.courses);
            }
         })
         .catch(() => {
            notification['error']({
               message: 'Error del servidor',
            });
         });
   }, []);

   return (
      <>
         <Helmet>
            <title>Cursos | Jeral Pineda</title>
            <meta
               //
               name='description'
               content='Cursos | Web sobre programación de Jeral Pineda'
               data-react-helmet='true'
            />
         </Helmet>

         <Row>
            <Col md={4} />
            <Col md={16}>
               <PresentationCourses />

               {!courses ? (
                  <Spin
                     //
                     tip='Cargando cursos'
                     style={{ textAlign: 'center', width: '100%', padding: '20px' }}
                  />
               ) : (
                  <CoursesList courses={courses} />
               )}
            </Col>
            <Col md={4} />
         </Row>
      </>
   );
};
