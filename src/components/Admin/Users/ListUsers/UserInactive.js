import React, { useEffect, useState } from 'react';
import { List, Avatar, Button } from 'antd';
import { CheckOutlined, DeleteOutlined } from '@ant-design/icons';

import NoAvatar from 'assets/img/png/no-avatar.png';
import { getAvatarApi } from 'api/user';

export const UserInactive = ({ user }) => {
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

   const editUser = () => {
      console.log('Activar usuario');
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
               onClick={editUser}
            >
               <CheckOutlined />
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
