import React, { useEffect, useState } from 'react';
import { List, Button, Modal as ModalAntd, notification } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

import { getCourseDataUdemyApi } from 'api/courses';
import Modal from 'components/Modal';

export const Course = ({ course }) => {
   const [courseData, setCourseData] = useState(null);

   useEffect(() => {
      getCourseDataUdemyApi(course.idCourse).then((response) => {
         if (response.code !== 200) {
            notification['warning']({
               message: `El curso con el id ${course.idCourse} no se ha encontrado`,
            });
         }

         setCourseData(response.data);
      });
   }, [course]);

   if (!courseData) {
      return null;
   }

   return (
      <List.Item
         //
         actions={[
            <Button
               //
               type='primary'
               onClick={() => console.log('Editar curso')}
            >
               <EditOutlined />
            </Button>,
            <Button
               //
               type='danger'
               onClick={() => console.log('Eliminar curso')}
            >
               <DeleteOutlined />
            </Button>,
         ]}
      >
         <img
            //
            src={courseData.image_480x270}
            alt={courseData.title}
            style={{ width: '100px', marginRight: '20px' }}
         />

         <List.Item.Meta
            //
            title={`${courseData.title} | ID: ${course.idCourse}`}
            description={courseData.headline}
         />
      </List.Item>
   );
};
