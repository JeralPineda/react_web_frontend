import React from 'react';
import { Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, PoweroffOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import JeralPineda from '../../assets/img/png/logo-white.png';

import './MenuTop.scss';

const MenuTop = ({ menuCollapsed, setMenuCollapsed }) => {
   const handleMenuCollapsed = () => {
      setMenuCollapsed(!menuCollapsed);
   };

   return (
      <div className='menu-top'>
         <div className='menu-top__left'>
            <Link to={'/admin'}>
               <img className='menu-top__left-logo' src={JeralPineda} alt='logo' />
            </Link>

            <Button type='link' onClick={handleMenuCollapsed}>
               {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
         </div>
         <div className='menu-top__right'>
            <Button type='link' onClick={() => console.log('cerrar sesión')}>
               <PoweroffOutlined />
            </Button>
         </div>
      </div>
   );
};

export default MenuTop;
