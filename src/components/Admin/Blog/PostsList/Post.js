import React from 'react';
import { Button, List } from 'antd';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const Post = ({ post, deletePost, editPost }) => {
   return (
      <List.Item
         //
         actions={[
            <Link to={`/blog/${post.url}`} target='_blank'>
               <Button
                  //
                  type='primary'
               >
                  <EyeOutlined />
               </Button>
            </Link>,
            <Button
               //
               type='primary'
               onClick={() => editPost(post)}
            >
               <EditOutlined />
            </Button>,
            <Button
               //
               type='danger'
               onClick={() => deletePost(post)}
            >
               <DeleteOutlined />
            </Button>,
         ]}
      >
         <List.Item.Meta title={post.title} />
      </List.Item>
   );
};
