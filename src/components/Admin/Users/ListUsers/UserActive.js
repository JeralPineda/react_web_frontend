import React from 'react';
import { List, Avatar, Button } from 'antd';
import { DeleteOutlined, EditOutlined, StopOutlined } from '@ant-design/icons';

import NoAvatar from 'assets/img/png/no-avatar.png';

export const UserActive = ({ usersActive }) => {
   const editUser = () => {
      console.log('Editando usuario');
   };

   const activeUser = () => {
      console.log('Desactivar usuario');
   };

   const deleteUser = () => {
      console.log('Eliminar usuario');
   };

   return (
      <List
         className='users-active'
         itemLayout='horizontal'
         dataSource={usersActive}
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
