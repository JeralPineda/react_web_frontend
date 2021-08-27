import React, { useState } from 'react';
import { notification } from 'antd';

import { AddForm } from './AddForm';
import { addMenuApi } from 'api/menu';
import { getAccessTokenApi } from 'api/auth';

import './AddMenuWebForm.scss';

const AddMenuWebForm = ({ setIsVisibleModal, setReloadMenuWeb }) => {
   const [menuWebData, setMenuWebData] = useState({});

   const addMenu = () => {
      const finalData = {
         title: menuWebData.title,
         url: `${menuWebData.http ? menuWebData.http : 'http://'}${menuWebData.url}`,
      };

      console.log(finalData);
   };

   return (
      <div className='add-menu-web-form'>
         <AddForm menuWebData={menuWebData} setMenuWebData={setMenuWebData} addMenu={addMenu} />
      </div>
   );
};

export default AddMenuWebForm;
