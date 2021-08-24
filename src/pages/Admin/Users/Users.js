import React, { useEffect, useState } from 'react';

import { getAccessTokenApi } from 'api/auth';
import { getUsersActiveApi } from 'api/user';
import ListUsers from 'components/Admin/Users/ListUsers';

import './Users.scss';

const Users = () => {
   const [usersActive, setUsersActive] = useState([]);
   const [usersInactive, setUsersInactive] = useState([]);

   //    Estado para actualizar el contenido de la lista
   const [reloadUsers, setReloadUsers] = useState(false);

   const token = getAccessTokenApi();

   useEffect(() => {
      getUsersActiveApi(token, true).then((response) => {
         setUsersActive(response.users);
      });

      getUsersActiveApi(token, false).then((response) => {
         setUsersInactive(response.users);
      });

      setReloadUsers(false);
   }, [token, reloadUsers]);

   return (
      <div className='users'>
         <ListUsers usersActive={usersActive} usersInactive={usersInactive} setReloadUsers={setReloadUsers} />
      </div>
   );
};

export default Users;
