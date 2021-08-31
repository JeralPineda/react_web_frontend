import React from 'react';
import { AppstoreOutlined, HddOutlined, RightOutlined, UserOutlined } from '@ant-design/icons';

export const RenderListRight = () => {
   return (
      <ul>
         <li>
            <a href='/'>
               <HddOutlined /> Sistemas / Servidores
            </a>
         </li>
         <li>
            <a href='/'>
               <AppstoreOutlined /> CMS
            </a>
         </li>
         <li>
            <a href='/'>
               <UserOutlined /> Portfolio
            </a>
         </li>
         <li>
            <a href='/'>
               <RightOutlined /> Política de Cookies
            </a>
         </li>
      </ul>
   );
};
