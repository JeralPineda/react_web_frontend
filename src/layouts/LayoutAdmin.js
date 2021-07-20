import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import MenuTop from 'components/MenuTop';
import MenuSider from 'components/MenuSider';

import './LayoutAdmin.scss';

const LayoutAdmin = ({ routes }) => {
   const { Header, Content, Footer } = Layout;

   return (
      <Layout>
         <MenuSider />

         <Layout className='layout-admin'>
            <Header className='layout-admin__header'>
               <MenuTop />
            </Header>

            <Content className='layout-admin__content'>
               <LoadRoutes routes={routes} />
            </Content>

            <Footer className='layout-admin__footer'>Footer</Footer>
         </Layout>
      </Layout>
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

export default LayoutAdmin;
