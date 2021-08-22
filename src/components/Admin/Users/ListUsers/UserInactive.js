import React from 'react';
import { List, Avatar, Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

import NoAvatar from 'assets/img/png/no-avatar.png';

export const UserInactive = ({ usersInactive }) => {
   const editUser = () => {
      console.log('Editando usuario');
   };

   const deleteUser = () => {
      console.log('Eliminar usuario');
   };

   return (
      <List
         className='users-active'
         itemLayout='horizontal'
         dataSource={usersInactive}
         renderItem={(user) => (
            <List.Item
               //
               actions={[
                  <Button
                     //
                     type='primary'
                     onClick={editUser}
                  >
                     <EditOutlined />
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
                  avatar={<Avatar src={user.avatar ? user.avatar : NoAvatar} />}
                  title={`
                        ${user.name ? user.name : '...'}
                        ${user.lastName ? user.lastName : '...'}
                    `}
                  description={user.email}
               />
            </List.Item>
         )}
      />
   );
};
