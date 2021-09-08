import React, { useEffect, useState } from 'react';
import { Spin, List, notification } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/es';
import queryString from 'query-string';
import { Helmet } from 'react-helmet';

import Pagination from 'components/Pagination';
import { getPostsApi } from 'api/post';

import './PostListWeb.scss';

const PostListWeb = ({ location, history }) => {
   const [posts, setPosts] = useState(null);

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
               setPosts(response.posts);
            }
         })
         .catch(() => {
            notification['error']({
               message: 'Error del servidor',
            });
         });
   }, [page]);

   if (!posts) {
      return (
         <Spin
            //
            style={{ width: '100%', padding: '200px' }}
         />
      );
   }

   return (
      <div className='posts-list-web'>
         <h1>Blog</h1>

         <List
            //
            dataSource={posts.docs}
            renderItem={(post) => <Post post={post} />}
         />

         <Pagination
            //
            posts={posts}
            location={location}
            history={history}
         />
      </div>
   );
};

function Post({ post }) {
   const day = moment(post.date).format('DD');
   const month = moment(post.date).format('MMMM');

   return (
      <>
         <Helmet>
            <title>Blog | Jeral Pineda</title>
         </Helmet>

         <List.Item className='post'>
            <div className='post__date'>
               <span>{day}</span>
               <span>{month}</span>
            </div>

            {/* <Link to={`blog/${post.url}`}> */}
            <List.Item.Meta title={<Link to={`blog/${post.url}`}>{post.title}</Link>} />
            {/* </Link> */}
         </List.Item>
      </>
   );
}

export default PostListWeb;
