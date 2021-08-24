import React, { useEffect, useState } from 'react';
import { List, Avatar, Button, notification } from 'antd';
import { DeleteOutlined, EditOutlined, StopOutlined } from '@ant-design/icons';

import { activateUserApi, getAvatarApi } from 'api/user';
import NoAvatar from 'assets/img/png/no-avatar.png';
import { getAccessTokenApi } from 'api/auth';

export const UserActive = ({ user, editUser, setReloadUsers }) => {
   const [avatar, setAvatar] = useState(null);

   useEffect(() => {
      if (user.avatar) {
         getAvatarApi(user.avatar).then((response) => {
            setAvatar(response);
         });
      } else {
         setAvatar(null);
      }
   }, [user]);

   const desactivateUser = () => {
      const accessToken = getAccessTokenApi();

      activateUserApi(accessToken, user.uid, false)
         .then((response) => {
            notification['success']({
               message: response,
            });

            // actualizamos el usuario
            setReloadUsers(true);
         })
         .catch((err) => {
            notification['error']({
               message: err,
            });
         });
   };

   const deleteUser = () => {
      console.log('Eliminar usuario');
   };

   return (
      <List.Item
         //
         actions={[
            <Button
               //
               type='primary'
               onClick={() => editUser(user)}
            >
               <EditOutlined />
            </Button>,
            <Button
               //
               type='danger'
               onClick={desactivateUser}
            >
               <StopOutlined />
            </Button>,
            <Button
               //
               type='danger'
               onClick={deleteUser}
            >
               <DeleteOutlined />
            </Button>,
         ]}
      >
         <List.Item.Meta
            avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
            title={`
                        ${user.name ? user.name : '...'}
                        ${user.lastName ? user.lastName : '...'}
                    `}
            description={user.email}
         />
      </List.Item>
   );
};
