import React, { useState } from 'react';
import { notification } from 'antd';

import { getAccessTokenApi } from 'api/auth';
import { signUpAdminApi } from 'api/user';

import './AddUserForm.scss';
import { AddForm } from './AddForm';

const AddUserForm = ({ setIsVisibleModal, setReloadUsers }) => {
   const [userData, setUserData] = useState({});

   let userUpdate = userData;

   const addUser = () => {
      if (!userData.name || !userData.lastName || !userData.email || !userData.role || !userData.password || !userData.repeatPassword) {
         notification['error']({
            message: 'Todos los campos son obligatorios',
         });
      } else if (userData.password !== userData.repeatPassword) {
         notification['error']({
            message: 'Las contraseñas tienen que ser iguales ',
         });
      } else {
         const accessToken = getAccessTokenApi();

         //  eliminamos el repeatPassword de la data
         delete userUpdate.repeatPassword;

         signUpAdminApi(accessToken, userData)
            .then((response) => {
               notification['success']({
                  message: response,
               });

               //    Cerramos el modal
               setIsVisibleModal(false);

               //    Actualizamos la lista de usuarios
               setReloadUsers(true);

               //    Actualizamos la data para limpiar los campos
               setUserData({
                  name: '',
                  lastName: '',
                  email: '',
                  role: '',
                  password: '',
                  repeatPassword: '',
               });
            })
            .catch((err) => {
               notification['error']({
                  message: err,
               });
            });
      }
   };

   return (
      <div className='add-user-form'>
         <AddForm
            //
            userData={userData}
            setUserData={setUserData}
            addUser={addUser}
         />
      </div>
   );
};

export default AddUserForm;
