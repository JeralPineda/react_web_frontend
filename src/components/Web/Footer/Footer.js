import { Col, Row, Layout } from 'antd';
import React from 'react';

import MyInfo from './MyInfo';

import './Footer.scss';

const Footer = () => {
   const { Footer } = Layout;

   return (
      <Footer className='footer'>
         <Row>
            <Col md={4} />
            <Col md={16}>
               <Row>
                  <Col md={8}>
                     <MyInfo />
                  </Col>
                  <Col md={8}>Navegación</Col>
                  <Col md={8}>NewsLetter</Col>
               </Row>
               <Row className='footer__copyright'>
                  <Col md={12}>2021 ALL RIGHTS RESERVED</Col>
                  <Col md={12}>JERAL PINEDA | DESARROLLADOR WEB</Col>
               </Row>
            </Col>
            <Col md={4} />
         </Row>
      </Footer>
   );
};

export default Footer;
