import React, { useState } from 'react';
import { Switch, List, Avatar, Button } from 'antd';
// import { HomeOutlined, UserOutlined } from '@ant-design/icons';

import NoAvatar from 'assets/img/png/no-avatar.png';

import './ListUsers.scss';

const ListUsers = ({ usersActive, usersInactive }) => {
   const [viewUserActives, setViewUserActives] = useState(true);

   const handleActives = () => {
      setViewUserActives(!viewUserActives);
   };

   return (
      <div className='List-users'>
         <div className='List-users__switch'>
            <Switch
               //
               defaultChecked
               onChange={handleActives}
            />

            <span> {viewUserActives ? 'Usuarios Activos' : 'Usuarios Inactivos'}</span>
         </div>

         {viewUserActives ? <UserActive usersActive={usersActive} /> : <UserInactive />}
      </div>
   );
};

const UserActive = ({ usersActive }) => {
   console.log(usersActive);
   return (
      <List
         //
         className='users-active'
         itemLayout='horizontal'
         dataSource={usersActive}
         renderItem={(user) => {
            <List.Item>
               <List.Item.Meta
                  //
                  avatar={<Avatar src={user.avatar ? user.avatar : NoAvatar} />}
                  title={`
                    ${user.name ? user.name : '...'}
                    ${user.lastname ? user.lastname : '...'}
                    `}
                  description={user.email}
               />
            </List.Item>;
         }}
      />
   );
};

const UserInactive = () => {
   return <h3>Lista de usuarios inactivos</h3>;
};

export default ListUsers;
