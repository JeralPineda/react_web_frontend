import React, { useState } from 'react';
import { Avatar, Form, Input, Select, Button, Row, Col } from 'antd';
// import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { useDropzone } from 'react-dropzone';

import { UploadAvatar } from './UploadAvatar';

import './EditUserForm.scss';

const EditUserForm = ({ user }) => {
   const [avatar, setAvatar] = useState(null);
   return (
      <div className='edit-user-form'>
         <UploadAvatar avatar={avatar} setAvatar={setAvatar} />
      </div>
   );
};

export default EditUserForm;
