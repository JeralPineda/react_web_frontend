import React, { useEffect, useState } from 'react';
import { List, Button, Modal as ModalAntd, notification } from 'antd';
import DragSortableList from 'react-drag-sortable';

import { deleteCourseApi, getCourseDataUdemyApi } from 'api/courses';
import Modal from 'components/Modal';
import { Course } from './Course';
import { getAccessTokenApi } from 'api/auth';

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
            content: (
               <Course
                  //
                  course={course}
                  deleteCourse={deleteCourse}
               />
            ),
         });
      });
      setListCourses(listCourseArray);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [courses]);

   const onSort = (sortedList, dropEvent) => {
      console.log(sortedList);
   };

   const deleteCourse = (course) => {
      const accesToken = getAccessTokenApi();

      confirm({
         title: 'Eliminando curso',
         content: `¿Estas seguro de que quieres eliminar el curso ${course.idCourse}?`,
         okText: 'Eliminar',
         okType: 'danger',
         cancelText: 'Cancelar',
         onOk() {
            deleteCourseApi(accesToken, course.uid)
               .then((response) => {
                  const typeNotification = response.code === 200 ? 'success' : 'warning';
                  notification[typeNotification]({
                     message: response.msg,
                  });
                  setReloadCourses(true);
               })
               .catch(() => {
                  notification['error']({
                     message: 'Error del servidor, intentelo más tarde.',
                  });
               });
         },
      });
   };

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
