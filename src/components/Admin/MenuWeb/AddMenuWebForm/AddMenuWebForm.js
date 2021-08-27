import React, { useState } from 'react';
import { notification } from 'antd';

import { AddForm } from './AddForm';
import { addMenuApi } from 'api/menu';
import { getAccessTokenApi } from 'api/auth';

import './AddMenuWebForm.scss';

const AddMenuWebForm = ({ setIsVisibleModal, setReloadMenuWeb }) => {
   const [menuWebData, setMenuWebData] = useState({});

   const addMenu = () => {
      let finalData = {
         title: menuWebData.title,
         url: `${menuWebData.http ? menuWebData.http : 'http://'}${menuWebData.url}`,
      };

      if (!finalData.title || !finalData.url || !menuWebData.url) {
         notification['error']({
            message: 'Todos los campos son obligatorios',
         });
      }

      const accessToken = getAccessTokenApi();

      finalData.active = false;
      finalData.order = 1000;

      addMenuApi(accessToken, finalData)
         .then((response) => {
            notification['success']({
               message: response,
            });

            setIsVisibleModal(false);

            setReloadMenuWeb(true);

            // Reiniciamos el formulario
            setMenuWebData({});
            finalData = {};
         })
         .catch((err) => {
            notification['success']({
               message: 'Error en el servidor',
            });
         });
   };

   return (
      <div className='add-menu-web-form'>
         <AddForm menuWebData={menuWebData} setMenuWebData={setMenuWebData} addMenu={addMenu} />
      </div>
   );
};

export default AddMenuWebForm;
