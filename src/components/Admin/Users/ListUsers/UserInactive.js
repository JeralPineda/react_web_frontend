import React, { useEffect, useState } from 'react';
import { List, Avatar, Button, notification, Modal } from 'antd';
import { CheckOutlined, DeleteOutlined } from '@ant-design/icons';

import NoAvatar from 'assets/img/png/no-avatar.png';
import { activateUserApi, deleteUserApi, getAvatarApi } from 'api/user';
import { getAccessTokenApi } from 'api/auth';

export const UserInactive = ({ user, setReloadUsers }) => {
   const [avatar, setAvatar] = useState(null);

   const { confirm } = Modal;

   useEffect(() => {
      if (user.avatar) {
         getAvatarApi(user.avatar).then((response) => {
            setAvatar(response);
         });
      } else {
         setAvatar(null);
      }
   }, [user]);

   const activeUser = () => {
      const accessToken = getAccessTokenApi();

      activateUserApi(accessToken, user.uid, true)
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

   const showDeleteConfirm = () => {
      const token = getAccessTokenApi();

      confirm({
         title: 'Eliminando usuario',
         content: `¿Estas seguro que deseas eliminar a ${user.email}?`,
         okText: 'Eliminar',
         okType: 'danger',
         cancelText: 'Cancelar',
         onOk() {
            deleteUserApi(token, user.uid)
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
         },
      });
   };

   return (
      <List.Item
         //
         actions={[
            <Button
               //
               type='primary'
               onClick={activeUser}
            >
               <CheckOutlined />
            </Button>,
            <Button
               //
               type='danger'
               onClick={showDeleteConfirm}
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
