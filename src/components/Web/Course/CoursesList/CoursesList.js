import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Button, Rate, notification } from 'antd';

import { getCourseDataUdemyApi } from 'api/courses';
import { Course } from './Course';

import './CoursesList.scss';

const CoursesList = ({ courses }) => {
   return (
      <div className='courses-list'>
         <Row>
            {courses.map((course) => (
               <Col
                  //
                  key={course.uid}
                  md={8}
                  className='courses-list__course'
               >
                  <Course course={course} />
               </Col>
            ))}
         </Row>
      </div>
   );
};

export default CoursesList;
