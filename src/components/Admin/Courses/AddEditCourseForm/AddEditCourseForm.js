import React, { useEffect, useState } from 'react';
import { Form, Input, Button, notification } from 'antd';

import { getAccessTokenApi } from 'api/auth';
import { AddEditForm } from './AddEditForm';

import './AddEditCourseForm.scss';

const AddEditCourseForm = ({ setIsVisibleModal, setReloadCourses, course }) => {
   const [courseData, setCourseData] = useState({});

   return (
      <div className='add-edit-course-form'>
         <AddEditForm course={course} />
      </div>
   );
};

export default AddEditCourseForm;
