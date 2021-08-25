import React, { useState } from 'react';
import { Button, Switch } from 'antd';

import { UsersActive } from './UsersActive';
import { UsersInactive } from './UsersInactive';
import Modal from 'components/Modal';
import AddUserForm from '../AddUserForm';

import './ListUsers.scss';

const ListUsers = ({ usersActive, usersInactive, setReloadUsers }) => {
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

   const addUserModal = () => {
      setIsVisibleModal(true);

      setModalTitle('Creando nuevo usuario');
      setModalContent(
         //
         <AddUserForm setIsVisibleModal={setIsVisibleModal} setReloadUsers={setReloadUsers} />
      );
   };

   return (
      <div className='list-users'>
         <div className='list-users__header'>
            <div className='list-users__header-switch'>
               <Switch
                  //
                  defaultChecked
                  onChange={handleActives}
               />

               <span> {viewUserActives ? 'Usuarios Activos' : 'Usuarios Inactivos'}</span>
            </div>

            <Button type='primary' onClick={addUserModal}>
               Nuevo usuario
            </Button>
         </div>

         {viewUserActives ? (
            <UsersActive
               //
               usersActive={usersActive}
               setIsVisibleModal={setIsVisibleModal}
               setModalTitle={setModalTitle}
               setModalContent={setModalContent}
               setReloadUsers={setReloadUsers}
            />
         ) : (
            <UsersInactive usersInactive={usersInactive} setReloadUsers={setReloadUsers} />
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
