import React from 'react';
import { Button } from 'antd';
import { MenuOutlined, PoweroffOutlined } from '@ant-design/icons';

import JeralPineda from '../../assets/img/png/logo-white.png';

import './MenuTop.scss';

const MenuTop = () => {
   return (
      <div className='menu-top'>
         <div className='menu-top__left'>
            <img className='menu-top__left-logo' src={JeralPineda} alt='logo' />

            <Button type='link' onClick={() => console.log('click')}>
               <MenuOutlined />
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
