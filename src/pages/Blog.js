import React from 'react';
import { Col, Row } from 'antd';
import { useParams } from 'react-router-dom';

import PostListWeb from 'components/Web/Blog/PostListWeb';
import PostInfo from 'components/Web/Blog/PostInfo';

export const Blog = ({ location, history }) => {
   const { url } = useParams();

   return (
      <Row>
         <Col md={4} />
         <Col md={16}>
            {url ? (
               <PostInfo />
            ) : (
               <PostListWeb
                  //
                  location={location}
                  history={history}
               />
            )}
         </Col>
         <Col md={4} />
      </Row>
   );
};
