import React, { useEffect, useState } from 'react';
import { Switch, Button, List, Modal as ModalAnrd, notification } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import DragSortableList from 'react-drag-sortable';

import Modal from 'components/Modal';
import { MenuItem } from './MenuItem';
import { updateMenuApi } from 'api/menu';
import { getAccessTokenApi } from 'api/auth';

import './MenuWebList.scss';

const { confirm } = ModalAnrd;

const MenuWebList = ({ menu, setReloadMenuWeb }) => {
   console.log(menu);
   const [listItems, setListItems] = useState([]); //guardamos los item
   // Cerrar el modal
   const [isVisibleModal, setIsVisibleModal] = useState(true);

   // Titulo del modal
   const [modalTitle, setModalTitle] = useState('');

   const [modalContent, setmodalContent] = useState(null);

   useEffect(() => {
      const listItemArray = [];

      menu.forEach((item) => {
         listItemArray.push({
            content: <MenuItem item={item} />,
         });
      });

      setListItems(listItemArray);
   }, [menu]);

   const onSort = (sortedList, dropEvent) => {
      const accessToken = getAccessTokenApi();

      //   recorremos el array que nos devuelve el order list
      sortedList.forEach((item) => {
         const { uid } = item.content.props.item;
         const order = item.rank;

         updateMenuApi(accessToken, uid, { order });
      });
   };

   return (
      <div className='menu-web-list'>
         <div className='menu-web-list__header'>
            <Button type='primary'>Menu</Button>
         </div>

         <div className='menu-web-list__items'>
            <DragSortableList items={listItems} onSort={onSort} type='vertical' />
         </div>
      </div>
   );
};

export default MenuWebList;
