import React from 'react';

import { updateMenuApi } from 'api/menu';
import { getAccessTokenApi } from 'api/auth';

import './EditMenuWebForm.scss';
import { EditForm } from './EditForm';

const EditMenuWebForm = ({ setIsVisibleModal, setReloadMenuWeb, menu }) => {
   return (
      <div className='edit-menu-web-form'>
         <EditForm />
      </div>
   );
};

export default EditMenuWebForm;
