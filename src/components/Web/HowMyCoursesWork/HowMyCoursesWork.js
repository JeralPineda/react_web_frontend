import React from 'react';
import { Col, Row } from 'antd';
import { CheckCircleOutlined, ClockCircleOutlined, DollarOutlined, KeyOutlined, MessageOutlined, UserOutlined } from '@ant-design/icons';

import './HowMyCoursesWork.scss';
import { CardInfo } from './CardInfo';

const HowMyCoursesWork = () => {
   return (
      <Row className='how-my-courses-work'>
         <Col lg={24} className='how-my-courses-work__title'>
            <h2>¿Como funcionan mis cursos?</h2>
            <h3>Cada curso cuenta con contenido bajo la web de Udemy, activa las 24 horas al dia los 365 días del año.</h3>
         </Col>

         <Col lg={4} />
         <Col lg={16}>
            <Row className='row-cards'>
               <Col md={8}>
                  <CardInfo
                     //
                     icon={<ClockCircleOutlined />}
                     title='Cursos y Clases'
                     subtitle='Cursos entre 10 y 30 horas y cada clase del curso con duración máxima de 15 minutos, fáciles de llevar en tu dia a dia de aprendizaje'
                  />
               </Col>

               <Col md={8}>
                  <CardInfo
                     //
                     icon={<KeyOutlined />}
                     title='Acceso 24/7'
                     subtitle='Acceso a los cursos en cualquier momento, desde cualquier lugar sin importar dia y hora.'
                  />
               </Col>

               <Col md={8}>
                  <CardInfo
                     //
                     icon={<MessageOutlined />}
                     title='Aprendizaje colaborativo'
                     subtitle='Aprende de los demás dejando tus dudas para que profesores y compañeros te ayuden.'
                  />
               </Col>
            </Row>
            <Row className='row-cards'>
               <Col md={8}>
                  <CardInfo
                     //
                     icon={<UserOutlined />}
                     title='Mejora tu perfil'
                     subtitle='Aprende y mejora tu perfil para mantenerte informado de actualizaciones.'
                  />
               </Col>

               <Col md={8}>
                  <CardInfo
                     //
                     icon={<DollarOutlined />}
                     title='Precios bajos'
                     subtitle='Obtén el curso que necesitas por solo 9.99 y ten acceso a el por tiempo ilimitado y soporte ilimitado.'
                  />
               </Col>

               <Col md={8}>
                  <CardInfo
                     //
                     icon={<CheckCircleOutlined />}
                     title='Certificado de finalización'
                     subtitle='Al completar un curso recibiras una certificación que te expedirá Udemy en PDF.'
                  />
               </Col>
            </Row>
         </Col>
         <Col lg={4} />
      </Row>
   );
};

export default HowMyCoursesWork;
