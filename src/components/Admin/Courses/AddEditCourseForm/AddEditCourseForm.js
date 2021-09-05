import React, { useEffect, useState } from 'react';
import { notification } from 'antd';

import { getAccessTokenApi } from 'api/auth';
import { AddEditForm } from './AddEditForm';

import './AddEditCourseForm.scss';
import { addCourseApi, updateCourseApi } from 'api/courses';

const AddEditCourseForm = ({ setIsVisibleModal, setReloadCourses, course }) => {
   const [courseData, setCourseData] = useState({});

   useEffect(() => {
      course ? setCourseData(course) : setCourseData({});
   }, [course]);

   const addCourse = () => {
      if (!courseData.idCourse) {
         notification['error']({
            message: 'El id del curso es obligatorio',
         });
      } else {
         const accessToken = getAccessTokenApi();

         addCourseApi(accessToken, courseData)
            .then((response) => {
               const typeNotification = response.code === 200 ? 'success' : 'warning';
               notification[typeNotification]({
                  message: response.msg,
               });
               setIsVisibleModal(false);
               setReloadCourses(true);
               setCourseData({});
            })
            .catch(() => {
               notification['error']({
                  message: 'Error del servidor, intentelo más tarde.',
               });
            });
      }
   };

   const updateCourse = () => {
      const accessToken = getAccessTokenApi();

      updateCourseApi(accessToken, course.uid, courseData)
         .then((response) => {
            const typeNotification = response.code === 200 ? 'success' : 'warning';
            notification[typeNotification]({
               message: response.msg,
            });
            setIsVisibleModal(false);
            setReloadCourses(true);
            setCourseData({});
         })
         .catch(() => {
            notification['error']({
               message: 'Error del servidor, intentelo más tarde.',
            });
         });
   };

   return (
      <div className='add-edit-course-form'>
         <AddEditForm
            //
            course={course}
            addCourse={addCourse}
            updateCourse={updateCourse}
            courseData={courseData}
            setCourseData={setCourseData}
         />
      </div>
   );
};

export default AddEditCourseForm;
