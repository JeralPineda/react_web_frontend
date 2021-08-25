import React, { useState } from 'react';
import { notification } from 'antd';

import { getAccessTokenApi } from 'api/auth';
import { signUpAdminApi } from 'api/user';

import './AddUserForm.scss';
import { AddForm } from './AddForm';

const AddUserForm = ({ setIsVisibleModal, setReloadUsers }) => {
   const [userData, setUserData] = useState({});

   const addUser = () => {
      console.log(userData);
   };

   return (
      <div className='add-user-form'>
         <AddForm
            //
            userData={userData}
            setUserData={setUserData}
            addUser={addUser}
         />
      </div>
   );
};

export default AddUserForm;
