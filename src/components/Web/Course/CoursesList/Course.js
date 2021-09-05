import React, { useEffect, useState } from 'react';
import { Button, Card, notification, Rate } from 'antd';

import { getCourseDataUdemyApi } from 'api/courses';

export const Course = ({ course }) => {
   const [courseInfo, setCourseInfo] = useState({});

   const [urlCourse, setUrlCourse] = useState('');

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
               mountUrl(response.data.url);
            }
         })
         .catch(() => {
            notification['error']({
               message: 'Error del servidor',
            });
         });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [course]);

   const mountUrl = (url) => {
      if (!course.link) {
         const baseUrl = `https://www.udemy.com${url}`;
         const finalUrl = baseUrl + (course.coupon ? `?couponCode=${course.coupon}` : '');
         setUrlCourse(finalUrl);
      } else {
         setUrlCourse(course.link);
      }
   };

   return (
      <a href={urlCourse} target='_blank' rel='noopener noreferrer'>
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
