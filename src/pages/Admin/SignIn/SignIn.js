import React from 'react';
// import { Redirect } from 'react-router-dom';
import { Layout, Tabs } from 'antd';

import RegisterForm from 'components/Admin/RegisterForm';
import logo from '../../../assets/img/png/logo192.png';
import LoginForm from 'components/Admin/LoginForm';
import { getAccessTokenApi } from 'api/auth';

import './SignIn.scss';
import { Redirect } from 'react-router-dom';

const SignIn = () => {
   const { Content } = Layout;
   const { TabPane } = Tabs;

   if (getAccessTokenApi()) {
      return <Redirect to='/admin' />;
   }

   return (
      <Layout className='sign-in'>
         <Content className='sign-in__content'>
            <h1 className='sign-in__content-logo'>
               <img src={logo} alt='logo' />
            </h1>

            <div className='sign-in__content-tabs'>
               <Tabs type='card'>
                  <TabPane tab={<span>Entrar</span>} key='1'>
                     <LoginForm />
                  </TabPane>
                  <TabPane tab={<span>Nuevo usuario</span>} key='2'>
                     <RegisterForm />
                  </TabPane>
               </Tabs>
            </div>
         </Content>
      </Layout>
   );
};

export default SignIn;
