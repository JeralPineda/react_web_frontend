import React, { useEffect, useState } from 'react';
import { Spin, List, notification } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/es';
import queryString from 'query-string';
import Pagination from 'components/Pagination';
import { getPostsApi } from 'api/post';

import './PostListWeb.scss';

const PostListWeb = ({ location, history }) => {
   const [post, setPost] = useState(null);

   // en que pagina estamos actualmente
   const { page = 1 } = queryString.parse(location.search);

   useEffect(() => {
      getPostsApi(10, page)
         .then((response) => {
            if (response?.code !== 200) {
               notification['warning']({
                  message: response.msg,
               });
            } else {
               setPost(response.posts);
            }
         })
         .catch(() => {
            notification['error']({
               message: 'Error del servidor',
            });
         });
   }, [page]);

   return (
      <div>
         <h1>PostListWeb</h1>
      </div>
   );
};

export default PostListWeb;
