import React, { useEffect, useState } from 'react';
import { notification } from 'antd';

import { UploadAvatar } from './UploadAvatar';
import { EditForm } from './EditForm';
import { getAvatarApi, uploadAvatarApi, updateUserApi } from 'api/user';
import { getAccessTokenApi } from 'api/auth';

import './EditUserForm.scss';

const EditUserForm = ({ user, setIsVisibleModal, setReloadUsers }) => {
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

   const updateUser = () => {
      //    obtenemos el token
      const token = getAccessTokenApi();

      let userUpdate = userData;

      //   verificamos que las contraseñas sean iguales
      if (userUpdate.password || userUpdate.repeatPassword) {
         if (userUpdate.password !== userUpdate.repeatPassword) {
            notification['error']({
               message: 'Las contraseñas tienen que ser iguales',
            });
            return;
         } else {
            delete userUpdate.repeatPassword;
         }
      }

      //   Verificamos que los campos no vengan vacíos
      if (!userUpdate.name || !userUpdate.lastName || !userUpdate.email) {
         notification['error']({
            message: 'El nombre, apellido y email son obligatorios',
         });
         return;
      }

      //   Verificamos que el avatar sea correcto
      if (typeof userUpdate.avatar === 'object') {
         uploadAvatarApi(token, userUpdate.avatar, user.uid).then((response) => {
            userUpdate.avatar = response.avatarName;

            //actualizamos usuario
            updateUserApi(token, userUpdate, user.uid).then((result) => {
               notification['success']({
                  message: result.msg,
               });
            });
         });
      } else {
         //actualizamos usuario
         updateUserApi(token, userUpdate, user.uid).then((result) => {
            notification['success']({
               message: result.msg,
            });
         });
      }

      //   cerramos el modal
      setIsVisibleModal(false);

      //  Actualizar la info del usuario
      setReloadUsers(true);
   };

   return (
      <div className='edit-user-form'>
         <UploadAvatar avatar={avatar} setAvatar={setAvatar} />
         <EditForm userData={userData} setUserData={setUserData} updateUser={updateUser} />
      </div>
   );
};

export default EditUserForm;
