import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import './LayoutBasic.scss';

const LayoutBasic = ({ routes }) => {
   const { Content, Footer } = Layout;

   return (
      <Layout>
         <h2>Menu...</h2>

         <Layout>
            <Content>
               <LoadRouters routes={routes} />
            </Content>

            <Footer>Jeral Pineda</Footer>
         </Layout>
      </Layout>
   );
};

function LoadRouters({ routes }) {
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
