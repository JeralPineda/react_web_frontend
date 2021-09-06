import React from 'react';
import { List, Modal, notification } from 'antd';

import { Post } from './Post';

import './PostsList.scss';

const { confirm } = Modal;

const BlogList = ({ posts }) => {
   return (
      <div className='posts-list'>
         <List
            //
            dataSource={posts.docs}
            renderItem={(post) => <Post post={post} />}
         />
      </div>
   );
};

export default BlogList;
