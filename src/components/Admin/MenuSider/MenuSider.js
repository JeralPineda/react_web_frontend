import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

import './MenuSider.scss';
import { Link } from 'react-router-dom';

const MenuSider = ({ menuCollapsed }) => {
   const { Sider } = Layout;

   return (
      <Sider className='menu-sider' collapsed={menuCollapsed}>
         <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
            <Menu.Item key='1'>
               <Link to={'/admin'}>
                  <HomeOutlined />
                  <span className='nav-text'> Home</span>
               </Link>
            </Menu.Item>
            <Menu.Item key='2'>
               <Link to={'/admin/users'}>
                  <UserOutlined />
                  <span className='nav-text'> Usuarios</span>
               </Link>
            </Menu.Item>
         </Menu>
      </Sider>
   );
};

export default MenuSider;
