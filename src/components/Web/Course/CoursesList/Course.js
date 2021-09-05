import React, { useEffect, useState } from 'react';
import { Button, Card, notification, Rate } from 'antd';

import { getCourseDataUdemyApi } from 'api/courses';

export const Course = ({ course }) => {
   const [courseInfo, setCourseInfo] = useState({});

   const { Meta } = Card;

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
      <a href='#' target='_blank' rel='noopener noreferrer'>
         <Card
            //
            cover={<img src={courseInfo.image_480x270} alt={courseInfo.title} />}
         >
            <Meta
               //
               title={courseInfo.title}
               description={courseInfo.headline}
            />

            <Button>Ir al curso</Button>

            <div className='courses-list__course-footer'>
               <span className='price'>{course.price ? `${course.price} US$` : courseInfo.price}</span>

               <div>
                  <Rate disabled defaultValue={5} />
               </div>
            </div>
         </Card>
      </a>
   );
};
