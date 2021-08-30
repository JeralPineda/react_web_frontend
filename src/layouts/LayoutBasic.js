import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';

import MenuTop from 'components/Web/MenuTop';

import './LayoutBasic.scss';

const LayoutBasic = ({ routes }) => {
   const { Footer } = Layout;

   return (
      <>
         <Row>
            <Col md={4} />
            <Col md={16}>
               <MenuTop />
            </Col>
            <Col md={4} />
         </Row>

         <LoadRoutes routes={routes} />
         <Footer>Jeral Pineda</Footer>
      </>
   );
};

function LoadRoutes({ routes }) {
   return (
      <Switch>
         {routes.map((route, index) => (
            <Route
               key={index} //
               path={route.path}
               exact={route.exact}
               component={route.component}
            />
         ))}
      </Switch>
   );
}

export default LayoutBasic;
