import React, { useEffect, useState } from 'react';
import { List, Button, Modal as ModalAntd, notification } from 'antd';
import DragSortableList from 'react-drag-sortable';

import { getCourseDataUdemyApi } from 'api/courses';
import Modal from 'components/Modal';
import { Course } from './Course';

import './CoursesList.scss';

const { confirm } = ModalAntd;

const CoursesList = ({ courses, setReloadCourses }) => {
   const [listCourses, setListCourses] = useState([]);
   const [isVisibleModal, setIsVisibleModal] = useState(false);
   const [modalTitle, setModalTitle] = useState('');
   const [modalContent, setModalContent] = useState(null);

   useEffect(() => {
      const listCourseArray = [];
      courses.forEach((course) => {
         listCourseArray.push({
            content: <Course course={course} />,
         });
      });
      setListCourses(listCourseArray);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [courses]);

   const onSort = (sortedList, dropEvent) => {
      console.log(sortedList);
   };

   if (courses.length > 0) {
      courses.forEach((course) => {
         getCourseDataUdemyApi(course.idCourse).then((response) => {
            console.log(response);
         });
      });
   }

   return (
      <div className='courses-list'>
         <div className='courses-list__header'>
            <Button type='primary' onClick={() => console.log('Creando curso')}>
               Nuevo curso
            </Button>
         </div>

         <div className='courses-list__items'>
            {listCourses.length === 0 && (
               <h2
                  //
                  style={{ textAlign: 'center', margin: 0 }}
               >
                  No tienes cursos creados
               </h2>
            )}
            <DragSortableList items={listCourses} onSort={onSort} type='vertical' />
         </div>
      </div>
   );
};

export default CoursesList;
