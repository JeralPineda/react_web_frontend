import React, { useEffect, useState } from 'react';

import { getMenuApi } from 'api/menu';

const MenuWeb = () => {
   const [menu, setMenu] = useState([]);
   const [reloadMenuWeb, setReloadMenuWeb] = useState(false);

   useEffect(() => {
      getMenuApi().then((response) => {
         setMenu(response.menu);
      });

      setReloadMenuWeb(false);
   }, [reloadMenuWeb]);

   return (
      <div className='menu-web'>
         <h1>Menu web</h1>
      </div>
   );
};

export default MenuWeb;
