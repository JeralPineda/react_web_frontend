import React, { useState } from 'react';
import { Switch } from 'antd';
// import { HomeOutlined, UserOutlined } from '@ant-design/icons';

import { UserActive } from './UserActive';
import { UserInactive } from './UserInactive';
import Modal from 'components/Modal';

import './ListUsers.scss';

const ListUsers = ({ usersActive, usersInactive }) => {
   const [viewUserActives, setViewUserActives] = useState(true);

   const handleActives = () => {
      setViewUserActives(!viewUserActives);
   };

   return (
      <div className='list-users'>
         <div className='list-users__switch'>
            <Switch
               //
               defaultChecked
               onChange={handleActives}
            />

            <span> {viewUserActives ? 'Usuarios Activos' : 'Usuarios Inactivos'}</span>
         </div>

         {viewUserActives ? <UserActive usersActive={usersActive} /> : <UserInactive usersInactive={usersInactive} />}

         <Modal
            //
            title='Mi Modal'
            isVisible={true}
            setIsVisible={() => console.log('hola')}
         >
            Este es mi modal!!
         </Modal>
      </div>
   );
};

export default ListUsers;
