import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

import LogoWeb from '../../../assets/img/png/logo192.png';
import { getMenuApi } from 'api/menu';

import './MenuTop.scss';

const MenuTop = () => {
   return (
      <Menu className='menu-topp' mode='horizontal'>
         <Menu.Item className='menu-topp__logo'>
            <Link to={'/'}>
               <img src={LogoWeb} alt='Jeral Pineda' />
            </Link>
         </Menu.Item>

         <Menu.Item className='menu-topp__item'>
            <Link to={'/'}>Home</Link>
         </Menu.Item>
         <Menu.Item className='menu-topp__item'>
            <Link to={'/contact'}>Contacto</Link>
         </Menu.Item>

         <div>Social Media..</div>
      </Menu>
   );
};

export default MenuTop;
