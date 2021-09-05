import React from 'react';
import { Row, Col } from 'antd';

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
