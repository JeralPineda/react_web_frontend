import React, { useState } from 'react';
import { notification } from 'antd';

import './AddMenuWebForm.scss';
import { AddForm } from 'components/Admin/Users/AddUserForm/AddForm';

const AddMenuWebForm = () => {
   return (
      <div className='add-menu-web-form'>
         <AddForm />
      </div>
   );
};

export default AddMenuWebForm;
