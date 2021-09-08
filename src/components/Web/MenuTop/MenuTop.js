import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

import LogoWeb from '../../../assets/img/png/logo192.png';
import { getMenuApi } from 'api/menu';

import './MenuTop.scss';
import SocialLinks from '../SocialLinks';

const MenuTop = () => {
   const [menuData, setMenuData] = useState([]);

   useEffect(() => {
      getMenuApi().then((response) => {
         const arrayMenu = [];

         response.menu.forEach((item) => {
            // if (item.active) {
            //    arrayMenu.push(item);
            // }

            item.active && arrayMenu.push(item);
         });

         setMenuData(arrayMenu);
      });
   }, []);

   return (
      <Menu className='menu-top-web' mode='horizontal'>
         <Menu.Item className='menu-top-web__logo'>
            <Link to={'/'}>
               <img src={LogoWeb} alt='Jeral Pineda' />
               <h2 className='menu-top-web__logo-jeral'>JeralPineda</h2>
            </Link>
         </Menu.Item>

         {menuData.map((item) => {
            // detectamos si la url es interna o externa a la web
            const external = item.url.indexOf('http') > -1 ? true : false;

            if (external) {
               return (
                  <Menu.Item key={item.uid} className='menu-top-web__item'>
                     <a href={item.url} target='_blank' rel='noopener noreferrer'>
                        {item.title}
                     </a>
                  </Menu.Item>
               );
            }

            return (
               <Menu.Item key={item.uid} className='menu-top-web__item'>
                  <Link to={item.url}>{item.title}</Link>
               </Menu.Item>
            );
         })}

         <SocialLinks />
      </Menu>
   );
};

export default MenuTop;
