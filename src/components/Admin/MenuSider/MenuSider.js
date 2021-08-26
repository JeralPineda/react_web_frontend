import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HomeOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';

import './MenuSider.scss';

const MenuSider = ({ menuCollapsed, location }) => {
   const { Sider } = Layout;

   return (
      <Sider className='menu-sider' collapsed={menuCollapsed}>
         <Menu theme='dark' mode='inline' defaultSelectedKeys={[location.pathname]}>
            <Menu.Item key='/admin'>
               <Link to={'/admin'}>
                  <HomeOutlined />
                  <span className='nav-text'>Home</span>
               </Link>
            </Menu.Item>

            <Menu.Item key='/admin/users'>
               <Link to={'/admin/users'}>
                  <UserOutlined />
                  <span className='nav-text'>Usuarios</span>
               </Link>
            </Menu.Item>

            <Menu.Item key='/admin/menu'>
               <Link to={'/admin/menu'}>
                  <MenuOutlined />
                  <span className='nav-text'>Menu</span>
               </Link>
            </Menu.Item>
         </Menu>
      </Sider>
   );
};

export default withRouter(MenuSider);
