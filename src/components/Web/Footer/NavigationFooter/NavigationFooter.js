import React from 'react';
import { Col, Row } from 'antd';

import { RenderListLeft } from './RenderListLeft/RenderListLeft';
import { RenderListRight } from './RenderListRight/RenderListRight';

import './NavigationFooter.scss';

const NavigationFooter = () => {
   return (
      <Row className='navigation-footer'>
         <Col md={24}>
            <h3>Navegación</h3>
         </Col>

         <Col md={12}>
            <RenderListLeft />
         </Col>

         <Col md={12}>
            <RenderListRight />
         </Col>
      </Row>
   );
};

export default NavigationFooter;
