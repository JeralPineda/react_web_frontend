import React from 'react';

import './EditUserForm.scss';

const EditUserForm = ({ user }) => {
   return (
      <div>
         <h1>Formulario para editar usuario</h1>
         <h2>{user.email}</h2>
      </div>
   );
};

export default EditUserForm;
