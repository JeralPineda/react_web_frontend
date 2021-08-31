import React from 'react';
import { BookOutlined, CodeOutlined, DatabaseOutlined, RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const RenderListLeft = () => {
   return (
      <ul>
         <li>
            <a href='/'>
               <BookOutlined /> Cursos online
            </a>
         </li>
         <li>
            <Link to='/contact'>
               <CodeOutlined /> Desarrollo web
            </Link>
         </li>
         <li>
            <a href='/'>
               <DatabaseOutlined /> Base de datos
            </a>
         </li>
         <li>
            <a href='/'>
               <RightOutlined /> Política de privacidad
            </a>
         </li>
      </ul>
   );
};
