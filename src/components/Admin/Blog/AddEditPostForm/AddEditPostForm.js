import React, { useEffect, useState } from 'react';
import { notification } from 'antd';

import { getAccessTokenApi } from 'api/auth';
import { addPostApi, updatePostApi } from 'api/post';
import { AddEditForm } from './AddEditForm';

import './AddEditPostForm.scss';

const AddEditPostForm = ({ setIsVisibleModal, setReloadPosts, post }) => {
   const [postData, setPostData] = useState({});

   useEffect(() => {
      if (post) {
         setPostData(post);
      } else {
         setPostData({});
      }
   }, [post]);

   const processPost = () => {
      const { title, url, date, description } = postData;

      if (!title || !url || !date || !description) {
         notification['error']({
            message: 'Todos los campos son obligatorios',
         });
      } else {
         if (!post) {
            addPost(postData);
         } else {
            updatePost();
         }
      }
   };

   const addPost = () => {
      const accessToken = getAccessTokenApi();

      addPostApi(accessToken, postData)
         .then((response) => {
            const typeNotification = response.code === 200 ? 'success' : 'warning';

            notification[typeNotification]({
               message: response.msg,
            });

            setIsVisibleModal(false);
            setReloadPosts(true);
            setPostData({});
         })
         .catch(() => {
            notification['error']({
               message: 'Error del servidor',
            });
         });
   };

   const updatePost = () => {
      const token = getAccessTokenApi();

      updatePostApi(token, post.uid, postData)
         .then((response) => {
            const typeNotification = response.code === 200 ? 'success' : 'warning';

            notification[typeNotification]({
               message: response.msg,
            });

            setIsVisibleModal(false);
            setReloadPosts(true);
            setPostData({});
         })
         .catch(() => {
            notification['error']({
               message: 'Error en el servidor',
            });
         });
   };

   return (
      <div className='add-edit-post-form'>
         <AddEditForm
            //
            postData={postData}
            setPostData={setPostData}
            post={post}
            processPost={processPost}
         />
      </div>
   );
};

export default AddEditPostForm;
