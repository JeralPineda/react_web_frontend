import React from 'react';
import { List, Avatar, Button } from 'antd';
import { DeleteOutlined, EditOutlined, StopOutlined } from '@ant-design/icons';

import NoAvatar from 'assets/img/png/no-avatar.png';
import EditUserForm from '../EditUserForm';

export const UsersActive = ({ usersActive, setIsVisibleModal, setModalTitle, setModalContent }) => {
   const editUser = (user) => {
      setIsVisibleModal(true);
      setModalTitle(`Editar ${user.name ? user.name : '...'} ${user.lastName} ${user.lastName ? user.lastName : '...'} `);
      setModalContent(<EditUserForm user={user} />);
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
