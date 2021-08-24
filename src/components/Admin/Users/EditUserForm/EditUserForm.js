import React, { useEffect, useState } from 'react';

import { UploadAvatar } from './UploadAvatar';
import { EditForm } from './EditForm';
import { getAvatarApi } from 'api/user';

import './EditUserForm.scss';

const EditUserForm = ({ user }) => {
   const [avatar, setAvatar] = useState(null);

   const [userData, setUserData] = useState({});

   useEffect(() => {
      setUserData({
         //
         name: user.name,
         lastName: user.lastName,
         email: user.email,
         role: user.role,
         avatar: user.avatar,
      });
   }, [user]);

   useEffect(() => {
      if (user.avatar) {
         getAvatarApi(user.avatar).then((response) => {
            setAvatar(response);
         });
      } else {
         setAvatar(null);
      }
   }, [user]);

   useEffect(() => {
      if (avatar) {
         setUserData({ ...userData, avatar: avatar.file });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [avatar]);

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
