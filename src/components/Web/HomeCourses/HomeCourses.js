import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Button } from 'antd';

import reactJsHooks from '../../../assets/img/jpg/react-js-hooks.jpg';
import reactNative from '../../../assets/img/jpg/react-native.jpg';
import javaScript from '../../../assets/img/jpg/javascript-es6.jpg';
import wordPress from '../../../assets/img/jpg/wordpress.jpg';
import prestaShop from '../../../assets/img/jpg/prestashop-1-7.jpg';
import cssGrid from '../../../assets/img/jpg/css-grid.jpg';
import { CardCourse } from './CardCourse';

import './HomeCourses.scss';

const HomeCourses = () => {
   return (
      <Row className='home-courses'>
         <Col lg={24} className='home-courses__title'>
            <h2>Aprende y mejora tus habilidades</h2>
         </Col>
         <Col lg={4} />
         <Col lg={16}>
            <Row className='row-courses'>
               <Col md={6}>
                  <CardCourse
                     //
                     image={reactJsHooks}
                     title='React JS Hooks'
                     subtitle='Intermedio - React/JavaScript'
                     link='https://www.udemy.com/course/react-js-de-cero-a-experto-creado-aplicaciones-reales/'
                  />
               </Col>

               <Col md={6}>
                  <CardCourse
                     //
                     image={reactNative}
                     title='React Native Expo'
                     subtitle='Intermedio - React/JavaScript'
                     link='https://www.udemy.com/course/react-native-expo-creando-mini-tripadvisor-de-restaurantes/'
                  />
               </Col>

               <Col md={6}>
                  <CardCourse
                     //
                     image={javaScript}
                     title='JavaScript ES6'
                     subtitle='Básico - JavaScript'
                     link='https://www.udemy.com/course/master-javascript-y-es6-lo-ultimo-js-con-proyectos-reales/'
                  />
               </Col>

               <Col md={6}>
                  <CardCourse
                     //
                     image={wordPress}
                     title='WordPress'
                     subtitle='Básico - WordPress'
                     link='https://www.udemy.com/course/master-javascript-y-es6-lo-ultimo-js-con-proyectos-reales/'
                  />
               </Col>
            </Row>
            <Row className='row-courses'>
               <Col md={6}>
                  <CardCourse
                     //
                     image={prestaShop}
                     title='PrestaShop'
                     subtitle='Básico - PrestaShop'
                     link='https://www.udemy.com/course/prestashop-1-7-crea-tu-tienda-online-de-0-a-experto/'
                  />
               </Col>

               <Col md={6} />
               <Col md={6} />

               <Col md={6}>
                  <CardCourse
                     //
                     image={cssGrid}
                     title='CSS Grid'
                     subtitle='Intermedio - CSS'
                     link='https://www.udemy.com/course/css-grid-principiante-a-experto-creando-web-responsive/'
                  />
               </Col>
            </Row>
         </Col>

         <Col lg={4} />

         <Col lg={24} className='home-courses__more'>
            <Link to='/courses'>
               <Button>Ver más</Button>
            </Link>
         </Col>
      </Row>
   );
};

export default HomeCourses;
