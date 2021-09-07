import React, { useEffect, useState } from 'react';
import { notification } from 'antd';

import { getAccessTokenApi } from 'api/auth';
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

   return (
      <div className='add-edit-post-form'>
         <AddEditForm
            //
            postData={postData}
            setPostData={setPostData}
            post={post}
         />
      </div>
   );
};

export default AddEditPostForm;
