import React, { useEffect, useState } from 'react';
import { Switch, Button, List, Modal as ModalAnrd, notification } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import DragSortableList from 'react-drag-sortable';

import Modal from 'components/Modal';
import { MenuItem } from './MenuItem';
import { activateMenuApi, updateMenuApi } from 'api/menu';
import { getAccessTokenApi } from 'api/auth';

import './MenuWebList.scss';
import AddMenuWebForm from '../AddMenuWebForm';

const { confirm } = ModalAnrd;

const MenuWebList = ({ menu, setReloadMenuWeb }) => {
   const [listItems, setListItems] = useState([]); //guardamos los item
   // Cerrar el modal
   const [isVisibleModal, setIsVisibleModal] = useState(false);

   // Titulo del modal
   const [modalTitle, setModalTitle] = useState('');

   const [modalContent, setmodalContent] = useState(null);

   useEffect(() => {
      const listItemArray = [];

      menu.forEach((item) => {
         listItemArray.push({
            content: (
               <MenuItem
                  //
                  item={item}
                  activateMenu={activateMenu}
               />
            ),
         });
      });

      setListItems(listItemArray);
   }, [menu]);

   const activateMenu = (menu, status) => {
      const accessToken = getAccessTokenApi();

      activateMenuApi(accessToken, menu.uid, status)
         .then((response) => {
            notification['success']({
               message: response,
            });
         })
         .catch((err) => {
            notification['error']({
               message: err,
            });
         });
   };

   const onSort = (sortedList, dropEvent) => {
      const accessToken = getAccessTokenApi();

      //   recorremos el array que nos devuelve el order list
      sortedList.forEach((item) => {
         const { uid } = item.content.props.item;
         const order = item.rank;

         updateMenuApi(accessToken, uid, { order });
      });
   };

   const addMenuWebModal = () => {
      setIsVisibleModal(true);

      setModalTitle('Creando nuevo menú');

      setmodalContent(<AddMenuWebForm />);
   };

   return (
      <div className='menu-web-list'>
         <div className='menu-web-list__header'>
            <Button type='primary' onClick={addMenuWebModal}>
               Crear menú
            </Button>
         </div>

         <div className='menu-web-list__items'>
            <DragSortableList items={listItems} onSort={onSort} type='vertical' />
         </div>

         <Modal title={modalTitle} isVisible={isVisibleModal} setIsVisible={setIsVisibleModal}>
            {modalContent}
         </Modal>
      </div>
   );
};

export default MenuWebList;
