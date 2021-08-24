import React from 'react';
import { List } from 'antd';

import EditUserForm from '../EditUserForm';
import { UserActive } from './UserActive';

export const UsersActive = ({ usersActive, setIsVisibleModal, setModalTitle, setModalContent, setReloadUsers }) => {
   const editUser = (user) => {
      setIsVisibleModal(true);

      setModalTitle(`Editar ${user.name ? user.name : '...'} ${user.lastName} ${user.lastName ? user.lastName : '...'} `);

      setModalContent(
         <EditUserForm //
            user={user}
            setIsVisibleModal={setIsVisibleModal}
            setReloadUsers={setReloadUsers}
         />
      );
   };

   return (
      <List //
         className='users-active'
         itemLayout='horizontal'
         dataSource={usersActive}
         renderItem={(user) => (
            <UserActive //
               user={user}
               editUser={editUser}
               setReloadUsers={setReloadUsers}
            />
         )}
      />
   );
};
