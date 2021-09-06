import React, { useEffect, useState } from 'react';
import { Button, notification } from 'antd';
import queryString from 'query-string';
import { withRouter } from 'react-router';

import Modal from 'components/Modal';
import { getPostApi } from 'api/post';
import PostsList from 'components/Admin/Blog/PostsList';
import Pagination from 'components/Pagination';

import './Blog.scss';

const Blog = ({ location, history }) => {
   const [posts, setPosts] = useState(null);
   const [reloadPosts, setReloadPosts] = useState(false);
   const [isVisibleModal, setIsVisibleModal] = useState(false);
   const [modalTitle, setModalTitle] = useState('');
   const [modalContent, setModalContent] = useState(null);

   const { page = 1 } = queryString.parse(location.search);

   useEffect(() => {
      getPostApi(10, page)
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

      setReloadPosts(false);
   }, [page, reloadPosts]);

   if (!posts) {
      return null;
   }

   return (
      <div className='blog'>
         <div className='blog__add-post'>
            <Button type='primary'>Nuevo post</Button>
         </div>

         <PostsList posts={posts} />
         <Pagination
            //
            posts={posts}
            location={location}
            history={history}
         />

         <Modal
            //
            title={modalTitle}
            isVisible={isVisibleModal}
            setIsVisible={setIsVisibleModal}
            width='75%'
         />
      </div>
   );
};

export default withRouter(Blog);
