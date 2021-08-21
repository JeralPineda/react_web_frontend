import React, { useState } from 'react';
import { Switch, List, Avatar, Button } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

import NoAvatar from 'assets/img/png/no-avatar.png';

import './ListUsers.scss';

const ListUsers = ({ userActive, userInactive }) => {
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

         {viewUserActives ? <UserActive /> : <UserInactive />}
      </div>
   );
};

const UserActive = () => {
   return <h3>Lista de usuarios activos</h3>;
};

const UserInactive = () => {
   return <h3>Lista de usuarios inactivos</h3>;
};

export default ListUsers;
