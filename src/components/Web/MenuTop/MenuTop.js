import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

import './MenuTop.scss';

const MenuTop = () => {
   return (
      <Menu className='menu-top' mode='horizontal'>
         <Menu.Item className='menu-top__logo'>Logo..</Menu.Item>

         <Menu.Item className='menu-top__item'>
            <Link to={'/'}>Home</Link>
         </Menu.Item>
         <Menu.Item className='menu-top__item'>
            <Link to={'/contact'}>Contacto</Link>
         </Menu.Item>

         <div>Social Media..</div>
      </Menu>
   );
};

export default MenuTop;
