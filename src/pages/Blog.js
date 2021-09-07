import React from 'react';
import { Col, Row } from 'antd';
import { useParams } from 'react-router-dom';

export const Blog = ({}) => {
   const { url } = useParams();

   return (
      <div>
         {/* / */}
         {url ? <h1>En un post</h1> : <h1>Lista de post</h1>}
      </div>
   );
};
