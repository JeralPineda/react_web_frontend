import React, { useEffect, useState } from 'react';

import { getAccessTokenApi } from 'api/auth';
import { getUsersApi } from 'api/user';

import './Users.scss';

const Users = () => {
   const [users, setUsers] = useState([]);
   const token = getAccessTokenApi();

   console.log(users);

   useEffect(() => {
      getUsersApi(token).then((response) => {
         setUsers(response);
      });
   }, [token]);

   return (
      <div>
         <h1>Lista de usuarios</h1>
      </div>
   );
};

export default Users;
