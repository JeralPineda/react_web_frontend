import React, { useEffect, useState } from 'react';
import { List, Avatar, Button } from 'antd';
import { DeleteOutlined, EditOutlined, StopOutlined } from '@ant-design/icons';

import { getAvatarApi } from 'api/user';
import NoAvatar from 'assets/img/png/no-avatar.png';

export const UserActive = ({ user, editUser }) => {
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

   const activeUser = () => {
      console.log('Desactivar usuario');
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
               onClick={activeUser}
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
