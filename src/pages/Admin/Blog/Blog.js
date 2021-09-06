import React, { useEffect, useState } from 'react';
import { Button, notification } from 'antd';

import Modal from 'components/Modal';

import './Blog.scss';

const Blog = () => {
   const [isVisibleModal, setIsVisibleModal] = useState(false);
   const [modalTitle, setModalTitle] = useState('');
   const [modalContent, setModalContent] = useState(null);

   return (
      <div className='blog'>
         <div className='blog__add-post'>
            <Button type='primary'>Nuevo post</Button>
         </div>

         <h1>Post list..</h1>
         <h2>Paginacion</h2>

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

export default Blog;
