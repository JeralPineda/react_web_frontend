import React, { useEffect, useState } from 'react';
import { Row, Col, Spin, notification } from 'antd';

import PresentationCourses from 'components/Web/Course/PresentationCourses';
import CoursesList from 'components/Web/Course/CoursesList';
import { getCoursesApi } from 'api/courses';

export const Courses = () => {
   return (
      <Row>
         <Col md={4} />
         <Col md={16}>
            <PresentationCourses />
            <CoursesList />
         </Col>
         <Col md={4} />
      </Row>
   );
};
