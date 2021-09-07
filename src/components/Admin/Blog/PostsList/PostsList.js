import React from 'react';
import { List, Modal, notification } from 'antd';

import { Post } from './Post';
import { getAccessTokenApi } from 'api/auth';

import './PostsList.scss';
import { deletePostApi } from 'api/post';

const { confirm } = Modal;

const PostsList = ({ posts, setReloadPosts, editPost }) => {
   const deletePost = (post) => {
      const accessToken = getAccessTokenApi();

      confirm({
         title: 'Eliminando post',
         content: `¿Estas seguro de eliminar el post ${post.uid}?`,
         okText: 'Eliminar',
         okType: 'danger',
         cancelText: 'Cancelar',
         onOk() {
            deletePostApi(accessToken, post.uid)
               .then((response) => {
                  const typeNotification = response.code === 200 ? 'success' : 'warning';

                  notification[typeNotification]({
                     message: response.msg,
                  });

                  setReloadPosts(true);
               })
               .catch(() => {
                  notification['error']({
                     message: 'Error en el servidor',
                  });
               });
         },
      });
   };

   return (
      <div className='posts-list'>
         <List
            //
            dataSource={posts.docs}
            renderItem={(post) => (
               <Post
                  //
                  post={post}
                  deletePost={deletePost}
                  editPost={editPost}
               />
            )}
         />
      </div>
   );
};

export default PostsList;
