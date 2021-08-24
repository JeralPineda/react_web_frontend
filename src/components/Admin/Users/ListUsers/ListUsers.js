import React, { useState } from 'react';
import { Switch } from 'antd';
// import { HomeOutlined, UserOutlined } from '@ant-design/icons';

import { UsersActive } from './UsersActive';
import { UsersInactive } from './UsersInactive';
import Modal from 'components/Modal';

import './ListUsers.scss';

const ListUsers = ({ usersActive, usersInactive }) => {
   const [viewUserActives, setViewUserActives] = useState(true);

   // Estado para mostrar y ocultar el modal
   const [isVisibleModal, setIsVisibleModal] = useState(false);

   // Estado para el titulo
   const [modalTitle, setModalTitle] = useState('');

   // Estado para el contenido del modal
   const [modalContent, setModalContent] = useState(null);

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

         {viewUserActives ? (
            <UsersActive
               //
               usersActive={usersActive}
               setIsVisibleModal={setIsVisibleModal}
               setModalTitle={setModalTitle}
               setModalContent={setModalContent}
            />
         ) : (
            <UsersInactive usersInactive={usersInactive} />
         )}

         <Modal
            //
            title={modalTitle}
            isVisible={isVisibleModal}
            setIsVisible={setIsVisibleModal}
         >
            {modalContent}
         </Modal>
      </div>
   );
};

export default ListUsers;
