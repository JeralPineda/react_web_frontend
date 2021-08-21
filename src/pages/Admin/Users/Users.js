import React, { useEffect, useState } from 'react';

import { getAccessTokenApi } from 'api/auth';
import { getUsersActiveApi } from 'api/user';

import './Users.scss';

const Users = () => {
   const [usersActive, setUsersActive] = useState([]);
   const [usersInactive, setUsersInactive] = useState([]);

   const token = getAccessTokenApi();

   console.log('userActive' + usersActive);
   console.log('userInactive' + usersInactive);

   useEffect(() => {
      getUsersActiveApi(token, true).then((response) => {
         setUsersActive(response);
      });

      getUsersActiveApi(token, false).then((response) => {
         setUsersInactive(response);
      });
   }, [token]);

   return (
      <div>
         <h1>Lista de usuarios</h1>
      </div>
   );
};

export default Users;
