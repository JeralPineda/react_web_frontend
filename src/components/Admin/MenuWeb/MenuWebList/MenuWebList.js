import React from 'react';

import './MenuWebList.scss';

const MenuWebList = ({ menu, setReloadMenuWeb }) => {
   return (
      <div>
         {menu.map((item) => (
            <h3 key={item.uid}>{item.url}</h3>
         ))}
      </div>
   );
};

export default MenuWebList;
