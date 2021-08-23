import React, { useState } from 'react';

import { UploadAvatar } from './UploadAvatar';
import { EditForm } from './EditForm';

import './EditUserForm.scss';

const EditUserForm = ({ user }) => {
   const [avatar, setAvatar] = useState(null);

   const [userData, setUserData] = useState({
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
   });

   const updateUser = (e) => {
      console.log(userData);
   };

   return (
      <div className='edit-user-form'>
         <UploadAvatar avatar={avatar} setAvatar={setAvatar} />
         <EditForm userData={userData} setUserData={setUserData} updateUser={updateUser} />
      </div>
   );
};

export default EditUserForm;
