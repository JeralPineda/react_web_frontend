import React, { useEffect, useState } from 'react';
import { notification } from 'antd';

import { updateMenuApi } from 'api/menu';
import { getAccessTokenApi } from 'api/auth';
import { EditForm } from './EditForm';

import './EditMenuWebForm.scss';

const EditMenuWebForm = ({ setIsVisibleModal, setReloadMenuWeb, menu }) => {
   const [menuWebData, setMenuWebData] = useState(menu);

   useEffect(() => {
      setMenuWebData(menu);
   }, [menu]);

   const editMenu = () => {
      if (!menuWebData.title || !menuWebData.url) {
         notification['error']({
            message: 'Todos los campos son obligatorios',
         });
      }

      const accessToken = getAccessTokenApi();

      updateMenuApi(accessToken, menuWebData.uid, menuWebData)
         .then((response) => {
            notification['success']({
               message: response,
            });

            setIsVisibleModal(false); //ocultar modal
            setReloadMenuWeb(true); //recargar menu y mostrar nuevos valores
         })
         .catch((err) => {
            notification['error']({
               message: 'Error del servidor',
            });
         });
   };

   return (
      <div className='edit-menu-web-form'>
         <EditForm
            //
            menuWebData={menuWebData}
            setMenuWebData={setMenuWebData}
            editMenu={editMenu}
         />
      </div>
   );
};

export default EditMenuWebForm;
