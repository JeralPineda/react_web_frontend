import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import MenuTop from 'components/MenuTop';
import MenuSider from 'components/MenuSider';

import './LayoutAdmin.scss';

const LayoutAdmin = ({ routes }) => {
   const { Header, Content, Footer } = Layout;

   const [menuCollapsed, setMenuCollapsed] = useState(true);

   const style = {
      marginLeft: menuCollapsed ? '80px' : '200px',
   };

   return (
      <Layout>
         <MenuSider menuCollapsed={menuCollapsed} />

         <Layout className='layout-admin' style={style}>
            <Header className='layout-admin__header'>
               <MenuTop menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed} />
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
