import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import './LayoutAdmin.scss';

const LayoutAdmin = ({ routes }) => {
   const { Header, Content, Footer } = Layout;

   return (
      <Layout>
         <h2>Menu Sider Admin</h2>

         <Layout>
            <Header>Header</Header>

            <Content>
               <LoadRouters routes={routes} />
            </Content>

            <Footer>Footer</Footer>
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

export default LayoutAdmin;
